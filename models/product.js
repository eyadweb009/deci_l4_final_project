import mongoose from 'mongoose';

const my_products = new mongoose.Schema({
  user_name: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  offer_description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  }
})

const product = mongoose.model('product', my_products);

export default product;