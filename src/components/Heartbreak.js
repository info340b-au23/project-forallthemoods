import React from 'react';
import { Link } from 'react-router-dom';
import 'material-icons/iconfont/material-icons.css';

export function HeartbreakPage () {
  return (
    <div className="heartbreak-background">
      <main className="mood-page">
        <button className="mood-button">
          <Link to='/Homepage' className="button-link">
            HEARTBREAK DRAKE
          </Link>
        </button>
        <a className="spotify-button button-link" href="https://open.spotify.com/playlist/2lDwK6wAeyPCoPbdh9fFbU?si=131c115987da44c8" target="_blank" rel="noopener noreferrer">
          HEARTBREAK PLAYLIST
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

export default HeartbreakPage;