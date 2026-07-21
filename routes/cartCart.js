import express from 'express';

import { getCart, addToCart, updateCart, deleteCart } from '../controller/cartController.js';

const router = express.Router();

router.get("/", getCart);
router.post("/", addToCart);
router.put("/:id", updateCart);
router.delete('/', deleteCart);
router.delete('/:id', deleteCart);

export default router;