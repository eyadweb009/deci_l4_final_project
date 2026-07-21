import cart from '../models/cart.js';

export const getCart = async (req, res) => {
  const cart_items = await cart.find();
  res.json(cart_items);
};

export const addToCart = async (req, res) => {
  const { user_name, id, name, quantity, price, category } = req.body;

  const added_item_to_cart = await cart.create({
    user_name,
    id,
    name,
    quantity,
    price,
    category
  });

  res.status(201).json(added_item_to_cart);
};

export const updateCart = async (req, res) => {
  const { id } = req.params;
  const { name, quantity, price, category } = req.body;

  const updated_item = await cart.findByIdAndUpdate(
    id,
    {
      name,
      quantity,
      price,
      category
    },
    { new: true }
  );

  res.json(updated_item);
};

export const deleteCart = async (req, res) => {
  const { id } = req.params;

  if (id) {
    await cart.findByIdAndDelete(id);
    res.json({ message: 'item removed from cart' });
  } else {
    await cart.deleteMany({});
    res.json({ message: 'all items removed from cart' });
  }
};