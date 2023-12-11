import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Dropdown, ButtonGroup } from 'react-bootstrap';

export function HomePage() {
  const [selectedMood, setSelectedMood] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  // Function to handle mood selection 
  const handleMoodChange = (selectedValue) => {
    setSelectedMood(selectedValue);
    navigate(`/${selectedValue}`);
    handleCloseModal();
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
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
              <Dropdown as={ButtonGroup} onSelect={handleMoodChange}> 
                <Dropdown.Toggle variant="primary" className="dropdown-basic">
                  SELECT
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item eventKey="party">Party Drake</Dropdown.Item>
                  <Dropdown.Item eventKey="nostalgic">Nostalgic Drake</Dropdown.Item>
                  <Dropdown.Item eventKey="heartbreak">Heartbreak Drake</Dropdown.Item>
                  <Dropdown.Item eventKey="club">Hit the Club Drake</Dropdown.Item>
                  <Dropdown.Item eventKey="hyped">Hyped Drake</Dropdown.Item>
                  <Dropdown.Item eventKey="combination">Combination Drake</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          )}
        </div>

        <a className="merch-button button-link" href="https://us.octobersveryown.com/" target="_blank" rel="noopener noreferrer">
          MERCH
        </a>
        <button className="quiz-button">
          <Link to="/quiz" className="button-link">
            QUIZ
          </Link>
        </button>
        <button className="review-button">
          <Link to="/review" className="button-link">
            REVIEW/RATE
          </Link>
        </button>
      </main>
    </div>
  );
}
