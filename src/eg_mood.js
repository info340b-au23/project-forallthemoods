import React from 'react';
import { useParams } from 'react-router-dom';

const EgmoodPage = () => {
    const { mood } = useParams();

    return (
        <div className='sad-background'>
{/* 
            <button className="mood-button">{mood}</button> */}

            <div className={`eg-mood-background ${ mood ? mood.toLowerCase() + '-background' : ''}`}>
                <button className="heart-button">HEARTBREAK DRAKE</button>
                <button className="merch-button button-link" href="https://us.octobersveryown.com/" target="_blank" rel="noopener noreferrer">MERCH</button>
                <button className="quiz-button"> QUIZ</button>
                <button className="review-button">REVIEW/RATE</button>
            </div>
        </div>
    );
};

export default EgmoodPage;