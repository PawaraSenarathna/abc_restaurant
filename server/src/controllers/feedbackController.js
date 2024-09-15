import Feedback from "../models/Feedback.js"

// POST route to add customer feedback
export const createFeedback = async (req, res) => {
  console.log("hit")
  const { name, email, phoneNumber, branch, rating, feedback } = req.body;

  // Validate required fields
  if (!name || !email || !phoneNumber || !branch || !rating || !feedback) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Create new feedback document
    const newFeedback = new Feedback({
      name,
      email,
      phoneNumber,
      branch,
      rating,
      feedback,
    });

    // Save feedback to the database
    const savedFeedback = await newFeedback.save();

    // Return success response
    res.status(201).json({ message: 'Feedback submitted successfully', data: savedFeedback });
  } catch (error) {
    console.error('Error saving feedback:', error);
    res.status(500).json({ message: 'Server error, please try again later' });
  }
};

export const getAllFeedback = async (req, res) => {
  try {
    // Await the result of the find query
    const allFeedback = await Feedback.find();
    console.log("Feedbacks fetched:", allFeedback);

    // If no feedback is found, return a 204 status
    if (allFeedback.length === 0) {
      return res.status(204).json({ message: "No feedback found" });
    }

    // Send the feedback data as JSON
    res.json(allFeedback);
  } catch (error) {
    console.error("Error fetching feedback:", error);
    res.status(500).json({ message: "Failed to fetch feedback" });
  }
};