import React from 'react';
import { Link, useParams } from 'react-router-dom';

const EgmoodPage = () => {
    const { mood } = useParams();

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
                        <li><Link to="/signup">SIGN-UP</Link></li>
                    </ul>
                </nav>
            </div>

            <button className="mood-button">{mood}</button>

            <div className={`eg-mood-background ${ mood ? mood.toLowerCase() + '\public\img\bg-sad.jpg' : ''}`}>
                <button className="mood-button"><Link to='/mood' className="button-link">Nostalgic Drake</Link></button>
                <a className="merch-button" href="https://us.octobersveryown.com/" target="_blank">MERCH</a>
                <button className="quiz-button">QUIZ</button>
                <button className="review-button">REVIEW/RATE</button>
            </div>

            <footer>
                <small>
                    &copy; 2023 For All the Moods
                </small>
            </footer>
        </div>
    );
};

export default EgmoodPage;