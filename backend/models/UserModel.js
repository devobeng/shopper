import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'Please add name'],
		},
		email: {
			type: String,
			required: [true, 'Please add email'],
			unique: [true, 'Email already taken'],
		},
		password: {
			type: String,
			required: [true, 'Please password is required'],
		},
		isAdmin: {
			type: Boolean,
			required: true,
			default: false,
		},
	},
	{
		timestamps: true,
	}
);

const User = mongoose.model('User', userSchema);
export default User;
