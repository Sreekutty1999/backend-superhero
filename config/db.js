// import mongoose from 'mongoose';

// const connectDB = async () => {
//   try {
//     console.log('MONGO_URI:', process.env.MONGO_URI);
//     const conn = await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log(`MongoDB Connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.error(`Failed to connect to MongoDB`, error);
//     process.exit(1); // Exit process with failure
//   }
// };

// export default connectDB;

// import mongoose from 'mongoose';

// const connectDB = async () => {
//   try {
//     console.log("MONGO_URI:", process.env.MONGO_URI);
//     const conn = await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log(`MongoDB Connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.error("MongoDB connection error: ", error.message);
//     process.exit(1); // Terminate the process if the connection fails
//   }
// };

// export default connectDB;
// db.js
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
