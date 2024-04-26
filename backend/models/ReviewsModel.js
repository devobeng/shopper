import mongoose from 'mongoose';
const reviewsSchema = mongoose.Schema(
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
		rating: {
			type: Number,
			required: [true, 'Please add rating'],
		},
		comment: {
			type: String,
			required: [true, 'Please add comment'],
		},
	},
	{
		timestamps: true,
	}
);
const Reveiws = mongoose.model('Reveiws', reviewsSchema);
export default Reveiws;
