import React from 'react';
import { useParams } from 'react-router-dom';

const EgmoodPage = () => {
    const { mood } = useParams();

    return (
        <div className='sad-background'>
            <div className="nav-container">
                <span className="menu material-icons">menu</span>
                <header>FOR ALL THE MOODS</header>
                <span className="profile material-icons">account_circle</span>


            </div>
{/* 
            <button className="mood-button">{mood}</button> */}

            <div className={`eg-mood-background ${ mood ? mood.toLowerCase() + '-background' : ''}`}>
                <button className="heart-button">HEARTBREAK DRAKE</button>
                <button className="merch-button button-link" href="https://us.octobersveryown.com/" target="_blank" rel="noopener noreferrer">MERCH</button>
                <button className="quiz-button"> QUIZ</button>
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