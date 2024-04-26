import mongoose from 'mongoose';

const connectDB = async () => {
	try {
		const con = await mongoose.connect(process.env.MONGO_URI, {});
		console.log(`The database is connected on ${con.connection.host}`);
	} catch (error) {
		console.log(error.message);
		process.exit(1);
	}
};

export default connectDB;
