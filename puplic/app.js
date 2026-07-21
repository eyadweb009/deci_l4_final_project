const loginButtons = document.querySelectorAll('.button');
loginButtons.forEach((button) => {
  button.addEventListener('click', () => {
    window.location.href = "login.html";
  });
});

const productsContainer = document.querySelector(".products");

async function getProducts() {
  if (!productsContainer) return;

  try {
    const res = await fetch("/products");
    const products = await res.json();

    productsContainer.innerHTML = "";

    products.forEach((product) => {
      productsContainer.innerHTML += `
        <div class="product">
          <h2>user :</h2><h2>${product.user_name}</h2>
          <h2>product :</h2><h2>${product.name}</h2>
          <h2>price :</h2><p>${product.price} EGP</p>
          <h2>category :</h2><p>${product.category}</p>
          <h2>offer :</h2><p>${product.offer_description}</p>
          <button class="delete-btn" data-id="${product._id}">Delete</button>
          <button class="purchase_button" data-id="${product._id}">purchase item</button>
        </div>
      `;
    });

    const deleteButtons = document.querySelectorAll(".delete-btn");
    deleteButtons.forEach((button) => {
      button.addEventListener("click", async () => {
        const id = button.dataset.id;
        await fetch(`/products/${id}`, { method: "DELETE" });
        getProducts();
      });
    });

    const purchaseButtons = document.querySelectorAll(".purchase_button");
    purchaseButtons.forEach((button) => {
      button.addEventListener("click", async (e) => {
        e.preventDefault();
        const id = button.dataset.id;

        const targetProduct = products.find(p => String(p._id) === String(id));
        if (!targetProduct) return;

        const response = await fetch("/cart", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            id: Math.floor(Math.random() * 100000),
            name: targetProduct.name,
            quantity: 1,
            price: targetProduct.price,
            category: targetProduct.category,
            user_name: targetProduct.user_name
          })
        });

        if (response.ok) {
          await fetch(`/products/${id}`, { method: "DELETE" });
          getProducts();
          getCart();
        }
      });
    });

  } catch (err) {
    console.error(err);
  }
}

getProducts();

const cartContainer = document.querySelector(".cart");

async function getCart() {
  if (!cartContainer) return;

  try {
    const res = await fetch("/cart");
    const cart = await res.json();

    cartContainer.innerHTML = "";

    cart.forEach((item) => {
      cartContainer.innerHTML += `
        <div class="cart-item">
          <h3>user :${item.user_name || 'N/A'}</h3>
          <h3>id :${item.id}</h3>
          <h3>product :${item.name}</h3>
          <p>quantity :${item.quantity}</p>
          <p>price :${item.price} EGP</p>
          <p>category :${item.category}</p>
          <button class="remove-cart-btn" data-id="${item._id}">Delete</button>
        </div>
      `;
    });

    const removeButtons = document.querySelectorAll(".remove-cart-btn");
    removeButtons.forEach((button) => {
      button.addEventListener("click", async () => {
        const id = button.dataset.id;
        await fetch(`/cart/${id}`, { method: "DELETE" });
        getCart();
      });
    });

  } catch (err) {
    console.error(err);
  }
}

getCart();

const confirmation_button = document.querySelector(".confirmation_button");
if (confirmation_button) {
  confirmation_button.addEventListener("click", async () => {
    try {
      const response = await fetch("/cart", {
        method: "DELETE"
      });
      if (response.ok) {
        getCart();
      }
    } catch (err) {
      console.error(err);
    }
  });
}