import express from "express";
import dotenv from "dotenv";
import db_connector from "./db/connect.js";

const app = express();

dotenv.config();

db_connector();

app.use(express.json());
app.use(express.static("puplic"));

import productRoutes from "./routes/productProduct.js";
import cartRoutes from "./routes/cartCart.js";

app.use("/products", productRoutes)
app.use("/cart", cartRoutes)

app.listen(process.env.PORT, () => {
  console.log(`app is running on ${process.env.PORT}`);
});