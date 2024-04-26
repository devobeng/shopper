import Product from '../models/productModel.js';
import asyncHandler from 'express-async-handler';
const getAllProducts = asyncHandler(async (req, res) => {
	const product = await Product.find();

	res.status(200).json({
		count: product.length,
		success: true,
		data: product,
	});
});
const getProduct = asyncHandler(async (req, res) => {
	const product = await Product.findById(req.params.id);
	if (product) {
		res.status(200).json({
			success: true,
			data: product,
		});
	} else {
		res.status(404);
		throw new Error('Resource not found');
	}
});

export { getAllProducts, getProduct };
