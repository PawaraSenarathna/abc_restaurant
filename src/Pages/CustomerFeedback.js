import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CustomerFeedback() {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    branch: '',
    rating: '',
    feedback: '',
  });

  // State to hold all feedbacks
  const [feedbacks, setFeedbacks] = useState([]);

  // Fetch feedbacks when component mounts
  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation to ensure no empty fields
    const { name, email, phoneNumber, branch, rating, feedback } = formData;
    if (!name || !email || !phoneNumber || !branch || !rating || !feedback) {
      alert('Please fill out all fields.');
      return;
    }

    try {
      // Send POST request to backend
      const response = await axios.post('/feedback', formData);
      alert(response.data.message); // Display success message from server

      // Reset form
      setFormData({
        name: '',
        email: '',
        phoneNumber: '',
        branch: '',
        rating: '',
        feedback: '',
      });

      // Fetch updated feedbacks
      fetchFeedbacks();
    } catch (error) {
      console.error('Error submitting feedback:', error.response?.data || error.message);
      alert('Failed to submit feedback. Please try again later.');
    }
  };

  // Fetch all feedbacks
  const fetchFeedbacks = async () => {
    console.log("fuck")
    try {
      const response = await axios.get('/feedback'); // Adjust endpoint if necessary
      console.log(response)
      setFeedbacks(response.data); // Set feedbacks in state

    } catch (error) {
      console.error('Error fetching feedbacks:', error);
      alert('Failed to fetch feedbacks.');
    }
  };

  return (
    <div className="h-90">
      <div className="h-90 d-flex justify-content-center align-items-center">
        <form
          className="border-0 rounded-3 bg-opacity-25 py-5 w-50 d-flex flex-column align-items-center text-white"
          onSubmit={handleSubmit}
        >
          
          <div className="mb-4">
            <h1 className="text-black">Customer Feedback</h1>
           
          </div>

          <div className="mb-3 w-50">
            <label className="form-label w-100 text-start ps-2" htmlFor="customerName">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="customerName"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>

          <div className="mb-3 w-50">
            <label className="form-label w-100 text-start ps-2" htmlFor="customerEmail">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="customerEmail"
              name="email"
              placeholder="example@test.com"
              value={formData.email}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>

          <div className="mb-3 w-50">
            <label className="form-label w-100 text-start ps-2" htmlFor="customerPhoneNumber">
              Phone Number
            </label>
            <input
              type="text"
              className="form-control"
              id="customerPhoneNumber"
              name="phoneNumber"
              placeholder="Enter your phone number"
              value={formData.phoneNumber}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>

          <div className="mb-3 w-50">
            <label className="form-label w-100 text-start ps-2" htmlFor="branch">
              Select Branch
            </label>
            <select
              className="form-select"
              id="branch"
              name="branch"
              value={formData.branch}
              onChange={handleChange}
            >
              <option value="" disabled>Select Branch</option>
              <option value="Colombo">Colombo</option>
              <option value="Kandy">Kandy</option>
              <option value="Jaffna">Jaffna</option>
              <option value="Monaragala">Monaragala</option>
            </select>
          </div>

          <div className="mb-3 w-50">
            <label className="form-label w-100 text-start ps-2" htmlFor="rating">
              Rating As
            </label>
            <select
              className="form-select"
              id="rating"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
            >
              <option value="" disabled>Select Rating Number</option>
              <option value="1">1/5</option>
              <option value="2">2/5</option>
              <option value="3">3/5</option>
              <option value="4">4/5</option>
              <option value="5">5/5</option>
            </select>
          </div>

          <div className="mb-3 w-50">
            <label className="form-label w-100 text-start ps-2" htmlFor="feedback">
              Feedback
            </label>
            <input
              type="text"
              className="form-control"
              id="feedback"
              name="feedback"
              placeholder="Enter Your Feedback"
              value={formData.feedback}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>

          <button type="submit" className="btn btn-dark w-50 mt-3">
            Submit Feedback
          </button>
        </form>
      </div>

      {/* Display all feedbacks */}
      <div className="mt-5">
        <h2 className="text-center">All Feedbacks</h2>
        <table className="table table-striped table-dark mt-3 w-75 mx-auto">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              
              <th>Branch</th>
              <th>Rating</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            {feedbacks.map((feedback) => (
              <tr key={feedback._id}>
                <td>{feedback.name}</td>
                <td>{feedback.email}</td>
                
                <td>{feedback.branch}</td>
                <td>{feedback.rating}/5</td>
                <td>{feedback.feedback}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CustomerFeedback;
