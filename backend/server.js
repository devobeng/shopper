import express from 'express';
import dotenv from 'dotenv';
import productRouter from './routes/productRouter.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
dotenv.config();

const PORT = process.env.PORT || 3002;
const app = express();
connectDB();
app.use('/api/v1/products', productRouter);
app.use(notFound);
app.use(errorHandler);
app.listen(PORT, () => console.log(`API is running on ${PORT}`));
