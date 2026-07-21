import mongoose from "mongoose";
import product from "./models/product.js";
import dotenv from "dotenv";

dotenv.config();

const seedDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is missing in .env file!");
    }

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

    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding database:", error.message);
  } finally {
    await mongoose.disconnect();
    process.exit();
  }
};

seedDB();