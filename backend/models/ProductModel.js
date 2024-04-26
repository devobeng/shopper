import mongoose from 'mongoose';
import Reveiws from './ReviewsModel';
const productSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.ObjectId,
			required: true,
			ref: 'User',
		},
		name: {
			type: String,
			required: [true, 'Please add name'],
		},
		image: {
			type: String,
			required: [true, 'Please add an Image'],
		},
		brand: {
			type: String,
			required: [true, 'Please add brand'],
		},
		category: {
			type: String,
			required: [true, 'Add a category'],
		},
		description: {
			type: String,
			required: [true, 'Add description'],
		},
		reviews: [Reveiws],
		rating: {
			type: Number,
			required: [true, 'Please add rating'],
			default: 0,
		},
		price: {
			type: Number,
			required: [true, 'Please add price'],
			default: 0,
		},
		countInstock: {
			type: Number,
			required: [true, 'Please add price'],
			default: 0,
		},
	},
	{
		timestamps: true,
	}
);

const Product = mongoose.model('Product', productSchema);
export default Product;
