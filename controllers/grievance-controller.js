// // grievance-controller.js
// const express = require('express');
// const router = express.Router();

// router.post('/submit-grievance', async (req, res) => {
//   const { name, email, description } = req.body;
  
//   try {
//     // Simulate saving to a database or processing
//     // For example:
//     // await GrievanceModel.create({ name, email, description });

//     // Send success response
//     res.status(200).json({ success: true, message: "Grievance submitted successfully!" });
//   } catch (error) {
//     console.error("Error submitting grievance:", error);
//     res.status(500).json({ success: false, message: "Error submitting grievance." });
//   }
// });

// module.exports = router;

// grievance-controller.js
import Grievance from '../models/grievance.js'; // Adjust the path to your model

export const submitGrievance = async (req, res) => {
  try {
    const { name, email, description } = req.body;
    
    // Create and save the grievance
    const newGrievance = new Grievance({
      name,
      email,
      description,
    });
    await newGrievance.save();

    res.status(201).json({ message: 'Grievance submitted successfully!' });
  } catch (error) {
    console.error('Error submitting grievance:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const getGrievances = async (req, res) => {
  try {
    const grievances = await Grievance.find();
    res.status(200).json(grievances);
  } catch (error) {
    console.error('Error fetching grievances:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
