import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export function HomePage() {
  const [selectedMood, setSelectedMood] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleMoodChange = (e) => {
    setSelectedMood(e.target.value);
  };

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmit = () => {
    if (selectedMood && ['party', 'nostalgic', 'heartbreak', 'club', 'hyped', 'combination'].includes(selectedMood)) {
      navigate(`/${selectedMood}`);
    } else {
      console.error('Invalid or null selected mood');
    }
  };

  return (
    <div>
      <main>
        <div className={`selector-container ${showModal ? 'modal-container' : ''}`}>
          

          <button className="mood-button" onClick={handleShowModal}>
            CHOOSE YOUR MOOD
          </button>

          {showModal && (
            <div className="modal">
              <h1 className="select-title">SELECT YOUR MOOD</h1>
              <p className="select-notice">SELECT YOUR MOOD AND LISTEN TO A PLAYLIST CURATED FOR YOUR MOOD.</p>
              <form className="selector">
                <label className="selecter-options" html="mood">
                  MOOD:
                </label>
                <select id="mood" name="mood" onChange={handleMoodChange} value={selectedMood || ''}>
                  <option value="null">Choose a Drake</option>
                  <option value="party">Party Drake</option>
                  <option value="nostalgic">Nostalgic Drake</option>
                  <option value="heartbreak">Heartbreak Drake</option>
                  <option value="club">Hit the Club Drake</option>
                  <option value="hyped">Hyped Drake</option>
                  <option value="combination">Combination Drake</option>
                </select>
              </form>
              <div className="button-container">
                <button className="submit-button" onClick={handleSubmit}>
                  Submit
                </button>
                <button className="close-button" onClick={handleCloseModal}>
                  Close
                </button>
              </div>
            </div>
          )}
        </div>

        <a className="merch-button button-link" href="https://us.octobersveryown.com/" target="_blank" rel="noopener noreferrer">
          MERCH
        </a>
        <button className="quiz-button">
          <Link to='/quiz' className="button-link">
            QUIZ
          </Link>
        </button>
        <button className="review-button">
          <Link to='/review' className="button-link">
            REVIEW/RATE
          </Link>
        </button>
      </main>
    </div>
  );
}