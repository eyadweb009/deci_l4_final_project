import express from 'express';

import { getMyProducts, addNewProducts, updateProduct, deleteProduct } from '../controller/productController.js';

const router = express.Router();

router.get('/', getMyProducts);
router.post('/', addNewProducts);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;