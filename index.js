
// import express from 'express';
// import mongoose from 'mongoose';
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
// import cors from 'cors';
// import bodyParser from 'body-parser';
// import dotenv from 'dotenv';
// import Grievance from './models/Grievance.js'; // Ensure this is correct

// dotenv.config(); // Load environment variables

// const app = express();
// const PORT = process.env.PORT || 8080;
// const JWT_SECRET = process.env.JWT_SECRET;

// // Middleware
// app.use(cors({
//   origin: 'http://localhost:3000', // Replace with your frontend URL
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   allowedHeaders: ['Content-Type', 'Authorization'],
// }));
// app.use(bodyParser.json());

// // MongoDB connection
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((error) => console.error("Failed to connect to MongoDB", error));

// // User schema
// const userSchema = new mongoose.Schema({
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
// });

// // Models
// const User = mongoose.model("User", userSchema);

// // User Signup (Register)
// app.post('/signup', async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Check if the email already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: 'Email already registered' });
//     }

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = new User({ email, password: hashedPassword });

//     // Save the new user
//     await newUser.save();
//     res.status(201).json({ message: 'User registered successfully!' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error registering user', error });
//   }
// });

// // User Login
// app.post('/login', async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(401).json({ message: 'Invalid credentials' });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(401).json({ message: 'Invalid credentials' });
//     }

//     const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
//     res.status(200).json({ token });
//   } catch (error) {
//     res.status(500).json({ message: 'Error logging in', error });
//   }
// });

// // Middleware to verify JWT
// const verifyToken = (req, res, next) => {
//   const token = req.headers['authorization']?.split(" ")[1];
//   if (!token) {
//     return res.status(403).json({ message: 'No token provided' });
//   }

//   jwt.verify(token, JWT_SECRET, (err, decoded) => {
//     if (err) {
//       return res.status(500).json({ message: 'Failed to authenticate token' });
//     }
//     req.userId = decoded.id;
//     next();
//   });
// };

// // Handle grievances
// app.post('/grievance', async (req, res) => {
//   try {
//     const { name, email, description } = req.body;

//     // Log the received grievance data
//     console.log('Received grievance data:', name, email, description);

//     const newGrievance = new Grievance({ name, email, description });
//     const savedGrievance = await newGrievance.save();

//     console.log('Grievance saved successfully:', savedGrievance);
//     res.status(201).json({ message: 'Grievance submitted successfully' });
//   } catch (error) {
//     console.error('Error submitting grievance:', error);
//     res.status(500).json({ message: 'Error submitting grievance', error });
//   }
// });
// app.post('/grievance', (req, res) => {
//   const { name, email, description } = req.body;
//   const newGrievance = { name, email, description, timestamp: new Date() };
//   grievances.push(newGrievance);
//   res.status(201).json(newGrievance);
// });

// app.get('/grievances', (req, res) => {
//   res.json(grievances);
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoutes from './routes/auth-routes.js';
import grievanceRoutes from './routes/grievance-routes.js';
import './config/db.js'; // DB connection file

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

// Middleware
app.use(cors({
  origin: 'http://localhost:3000', // Replace with your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(bodyParser.json());

// Routes
app.use('/api', authRoutes); // All authentication routes (login, signup)
app.use('/grievance', grievanceRoutes); // Grievance routes

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
