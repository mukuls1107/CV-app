import React, { useState } from "react";
import "../styles/Feedback.css";
import axios from "axios";

const DISCORD_WEBHOOK_URL = import.meta.env.VITE_WEBHOOK_URL;

const Feedback = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [likes, setLikes] = useState("");
  const [features, setFeatures] = useState("");
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendFeedbackToDiscord({ username, likes, features, rating, comment });
    alert("Thanks For The Feedback :)");
    setIsFormVisible(false);
    setUsername("");
    setLikes("");
    setFeatures("");
    setRating("");
    setComment("");
  };

  const sendFeedbackToDiscord = async (feedback) => {
    try {
      await axios.post(DISCORD_WEBHOOK_URL, {
        username: "Feedback",
        content: `New Feedback:\nName: **${feedback.username}**\nRating: **${feedback.rating}**\nComment: **${feedback.comment}**\nFeature Wanted: **${feedback.features}**\nLikes: **${feedback.likes}**`,
      });
    } catch (error) {
      console.error("Error sending feedback to Discord:", error);
    }
  };

  return (
    <div>
      {isFormVisible && (
        <div className="feedback-form-container">
          <div className="feedback-form">
            <h2 className="feedback-title">Give us your feedback</h2>
            <form className="feedback-form-content" onSubmit={handleSubmit}>
              <div className="feedback-rating">
                <label htmlFor="name" className="feedback-label">
                  Enter Your Name:{" "}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="feedback-input-nm"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="feedback-rating">
                <label htmlFor="likes" className="feedback-label">
                  Things You Don't Like:{" "}
                </label>
                <input
                  type="text"
                  id="likes"
                  name="likes"
                  className="feedback-input-nm"
                  value={likes}
                  onChange={(e) => setLikes(e.target.value)}
                  required
                />
              </div>
              <div className="feedback-rating">
                <label htmlFor="features" className="feedback-label">
                  Any Feature You Would Love to Have:{" "}
                </label>
                <input
                  type="text"
                  id="features"
                  name="features"
                  className="feedback-input-nm"
                  value={features}
                  onChange={(e) => setFeatures(e.target.value)}
                  required
                />
              </div>
              <div className="feedback-rating">
                <label htmlFor="rating" className="feedback-label">
                  Rating:
                </label>
                <select
                  id="rating"
                  name="rating"
                  className="feedback-input"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              <div className="feedback-comment">
                <label htmlFor="comment" className="feedback-label">
                  Final Note For Us:
                </label>
                <textarea
                  id="comment"
                  name="comment"
                  className="feedback-input feedback-textarea"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                ></textarea>
              </div>
              <button type="submit" className="feedback-submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
      <button onClick={toggleForm} className="feedback-toggle-btn">
        Give Feedback
      </button>
    </div>
  );
};

export default Feedback;
