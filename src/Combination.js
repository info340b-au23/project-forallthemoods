import React from 'react';
import { Link } from 'react-router-dom';
import 'material-icons/iconfont/material-icons.css';
import './app.css';


export function CombinationPage () {
  return (
    <div className="combination-background">
      <main className="mood-page">
        <button className="mood-button">
          <Link to='/combination' className="button-link">
            COMBINATION DRAKE
          </Link>
        </button>
        <a className="spotify-button button-link" href="https://open.spotify.com/playlist/52tBTRhudKjyTwdojySTAw?si=48eb34dd59f6488e" target="_blank" rel="noopener noreferrer">
          COMBINATION PLAYLIST
        </a>
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
};

export default CombinationPage;