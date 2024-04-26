import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
dotenv.config();
import product from './data/products.js';
import products from './data/products.js';

const PORT = process.env.PORT || 3002;
const app = express();
connectDB();
app.get('/api/v1/products', (req, res) => {
	res.json(product);
});
app.get('/api/v1/products/:id', (req, res) => {
	const product = products.find((p) => p._id === req.params.id);
	res.json(product);
});

app.listen(PORT, () => console.log(`API is running on ${PORT}`));
