import express from 'express';
import {
	getAllProducts,
	getProduct,
} from '../controllers/productController.js';
const productRouter = express.Router();

productRouter.route('/').get(getAllProducts);
productRouter.route('/:id').get(getProduct);
export default productRouter;
