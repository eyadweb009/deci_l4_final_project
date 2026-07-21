import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
  user_name: {
    type: String,
    required: true
  },
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
    default: 1
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  }
});

const cart = mongoose.model('cart', cartSchema);

export default cart;