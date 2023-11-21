import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export function MoodPage()  {
    const [selectedMood, setSelectedMood] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const handleMoodChange = (e) => {
        setSelectedMood(e.target.value);
    };

    const handleShowModal = () => {
        setShowModal(!showModal);
    };

    const handleSubmit = () => {
        if (selectedMood) {
            navigate('/eg_mood/${selectedMood.toLowerCase()}')
        }
    };

    return (
        <div>
            <div className="nav-container">
                <span className="menu material-icons">menu</span>
                <header>FOR ALL THE MOODS</header>
                <span className="profile material-icons">account_circle</span>

                <nav>
                    <ul>
                        <li><Link to="/">HOME PAGE</Link></li>
                        <li><Link to="/quiz">QUIZ</Link></li>
                        <li><Link to="/review">REVIEW</Link></li>
                        <li><Link to="/mood">MOOD</Link></li>
                        <li><Link to="/eg_mood">MOOD EXAMPLE</Link></li>
                        <li><Link to="/sign_up">SIGN-UP</Link></li>
                    </ul>
                </nav>
            </div>

            <div className ="selector-container">
                <h1 className="select-title">SELECT YOUR MOOD</h1>
                <p className="select-notice">SELECT YOUR MOOD AND LISTEN TO A PLAYLIST CURATED FOR YOUR MOOD.</p>

                <button className="mood-button" onClick={handleShowModal}>Choose Your Mood</button>

                {showModal && (
                    <div className="modal">
                        <form className="selector">
                            <label className="selecter-options" html="mood">MOOD:</label>
                            <select id="mood" name="mood" onChange={handleMoodChange}>
                                <option value="party">Party Drake</option>
                                <option value="nostalgic">Nostalgic Drake</option>
                                <option value="heartbreak">Heartbreak Drake</option>
                                <option value="club">Hit the Club Drake</option>
                                <option value="hyped">Hyped Drake</option>
                                <option value="combination">Combination Drake</option>
                            </select>
                        </form>
                        <button onClick={handleSubmit}>Submit</button>
                        <button onClick={handleShowModal}>Close</button>
                    </div>
                )}
            </div>
            
            <footer>
                <small>
                    &copy; 2023 For All the Moods
                </small>
            </footer>
        </div>
    );
};

// export default MoodPage;