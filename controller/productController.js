import product from '../models/product.js'

export const getMyProducts = async (req, res) => {
  try {
    const products = await product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};  

export const addNewProducts = async (req,res)=> {
  try {
    const {
      user_name,
      name,
      price,
      offer_description,
      category
    } = req.body;

    const new_product = await product.create({
      user_name,
      name,
      price,
      offer_description,
      category
    });

    res.status(201).json(new_product);

  } catch (error) {
    res.status(500).json({error: error.message});
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const {user_name, name, price, offer_description, category } = req.body;

  const updatedProduct = await product.findByIdAndUpdate(
    id,
    {
      user_name,
      name,
      price,
      offer_description,
      category
    },
    { new: true }
  );

  res.json(updatedProduct);
};

export const deleteProduct =  async (req,res) => {
  const {id} = req.params
  const deletedProduct = await product.findByIdAndDelete(id);
  res.json(deletedProduct);
}