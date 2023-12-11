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
          <button className="btn btn-primary mood-button" onClick={handleShowModal}>
            CHOOSE YOUR MOOD
          </button>

          {showModal && (
            <div className="modal fade show" role="dialog" style={{ display: 'block' }}>
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title">SELECT YOUR MOOD</h1>
                  </div>
                  <div className="modal-body">
                    <p className="select-notice">SELECT YOUR MOOD AND LISTEN TO A PLAYLIST CURATED FOR YOUR MOOD.</p>
                    <form className="selector">
                      <div className="form-group">
                        <select
                          className="form-control"
                          id="mood"
                          name="mood"
                          onChange={handleMoodChange}
                          value={selectedMood || ''}
                        >
                          <option value="null">Choose a Drake</option>
                          <option value="party">Party Drake</option>
                          <option value="nostalgic">Nostalgic Drake</option>
                          <option value="heartbreak">Heartbreak Drake</option>
                          <option value="club">Hit the Club Drake</option>
                          <option value="hyped">Hyped Drake</option>
                          <option value="combination">Combination Drake</option>
                        </select>
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button className="btn btn-primary" onClick={handleSubmit}>
                      Submit
                    </button>
                    <button className="btn btn-secondary" onClick={handleCloseModal}>
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <a className="merch-button btn btn-primary button-link" href="https://us.octobersveryown.com/" target="_blank" rel="noopener noreferrer">
          MERCH
        </a>
        <Link to="/quiz" className="btn btn-primary quiz-button">
          QUIZ
        </Link>
        <Link to="/review" className="btn btn-primary review-button">
          REVIEW/RATE
        </Link>
      </main>
    </div>
  );
}
