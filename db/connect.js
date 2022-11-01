import mongoose from 'mongoose';

// connection string
const connectDB = (url) => {
  return mongoose.connect(url);
};

export default connectDB;
