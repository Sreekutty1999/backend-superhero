// routes/grievance-routes.js
import express from 'express';
import { submitGrievance, getGrievances } from '../controllers/grievance-controller.js';
const router = express.Router();

// Handle POST request to /grievance
router.post('/', (req, res) => {
  const { name, email, description } = req.body;

  router.post('/submit', submitGrievance); // Handle POST request to /grievance/submit
router.get('/', getGrievances); // Handle GET request to /grievance

  
  // Check for required fields
  if (!name || !email || !description) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Process the grievance here (e.g., save to database)
  console.log(`Received grievance from ${name} (${email}): ${description}`);

  // Respond with a success message
  res.status(200).json({ message: 'Grievance submitted successfully!' });
});

export default router;
