// FeedbackPage.jsx

import React, { useState } from 'react';
import '../css/FeedbackPage.css'; // Import the CSS file

const FeedbackPage = () => {
  const [feedbackData, setFeedbackData] = useState({
    overallRating: 5,
    speedRating: 5,
    customerServiceRating: 5,
    featuresRating: 5,
    comments: '',
  });

  const [loading, setLoading] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleRatingChange = (field, value) => {
    setFeedbackData({ ...feedbackData, [field]: value });
  };

  const handleCommentsChange = (e) => {
    setFeedbackData({ ...feedbackData, comments: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      // Simulating a delay to simulate an API request
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Display a feedback message based on the overall rating
      const feedbackMessage = getOverallFeedbackMessage(feedbackData.overallRating);
      setFeedbackMessage(feedbackMessage);

      // Reset the form after successful submission
      setFeedbackData({
        overallRating: 5,
        speedRating: 5,
        customerServiceRating: 5,
        featuresRating: 5,
        comments: '',
      });
    } catch (error) {
      console.error('Error submitting feedback:', error);
      setFeedbackMessage('Failed to submit feedback. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Function to get an overall feedback message based on the rating
  const getOverallFeedbackMessage = (overallRating) => {
    switch (overallRating) {
      case 5:
        return 'Thank you for providing an excellent overall experience!';
      case 4:
        return 'We appreciate your positive feedback and suggestions for improvement.';
      case 3:
        return 'Thank you for your feedback. We\'ll work on making your experience even better.';
      case 2:
        return 'We apologize for the inconvenience. Your feedback helps us identify areas for improvement.';
      case 1:
        return 'We are sorry for the experience. Please share more details so we can address the issues.';
      default:
        return 'Thank you for your feedback!';
    }
  };

  return (
    <div className="feedback-container">
      <h2>Provide Feedback</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="overallRating">Overall Rating:</label>
        <select
          id="overallRating"
          name="overallRating"
          value={feedbackData.overallRating}
          onChange={(e) => handleRatingChange('overallRating', parseInt(e.target.value, 10))}
        >
          {[5, 4, 3, 2, 1].map((rating) => (
            <option key={rating} value={rating}>
              {rating} - {getOverallFeedbackMessage(rating)}
            </option>
          ))}
        </select>

        <h3>Feedback Sections:</h3>

        <div className="feedback-section">
          <label htmlFor="speedRating">Speed:</label>
          <select
            id="speedRating"
            name="speedRating"
            value={feedbackData.speedRating}
            onChange={(e) => handleRatingChange('speedRating', parseInt(e.target.value, 10))}
          >
            {[5, 4, 3, 2, 1].map((rating) => (
              <option key={rating} value={rating}>
                {rating} - {getFeedbackSectionMessage('Speed', rating)}
              </option>
            ))}
          </select>
        </div>

        <div className="feedback-section">
          <label htmlFor="customerServiceRating">Customer Service:</label>
          <select
            id="customerServiceRating"
            name="customerServiceRating"
            value={feedbackData.customerServiceRating}
            onChange={(e) =>
              handleRatingChange('customerServiceRating', parseInt(e.target.value, 10))
            }
          >
            {[5, 4, 3, 2, 1].map((rating) => (
              <option key={rating} value={rating}>
                {rating} - {getFeedbackSectionMessage('Customer Service', rating)}
              </option>
            ))}
          </select>
        </div>

        <div className="feedback-section">
          <label htmlFor="featuresRating">App Features:</label>
          <select
            id="featuresRating"
            name="featuresRating"
            value={feedbackData.featuresRating}
            onChange={(e) => handleRatingChange('featuresRating', parseInt(e.target.value, 10))}
          >
            {[5, 4, 3, 2, 1].map((rating) => (
              <option key={rating} value={rating}>
                {rating} - {getFeedbackSectionMessage('App Features', rating)}
              </option>
            ))}
          </select>
        </div>

        <div className="feedback-section">
          <label htmlFor="comments">Additional Comments:</label>
          <textarea
            id="comments"
            name="comments"
            value={feedbackData.comments}
            onChange={handleCommentsChange}
            rows="4"
          ></textarea>
        </div>

        <button type="submit" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit Feedback'}
        </button>

        {feedbackMessage && (
          <div className="feedback-message">
            <p>{feedbackMessage}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default FeedbackPage;
