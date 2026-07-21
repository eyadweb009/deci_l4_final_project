import mongoose from "mongoose";
import product from "./models/product.js";
import dotenv from "dotenv";

dotenv.config();

await mongoose.connect(process.env.MONGO_URI);

await product.deleteMany({});

await product.insertMany([
  {
    user_name: "Admin",
    name: "Laptop", 
    price: 15000,
    category: "Electronics",
    offer_description: "10% off"
  },
  {
    user_name: "Admin",
    name: "Phone",
    price: 8000,
    category: "Electronics",
    offer_description: "Free case"
  }
]);

console.log("my database is seeded!");
process.exit();