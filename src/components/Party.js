import React from 'react';
import { Link } from 'react-router-dom';
import 'material-icons/iconfont/material-icons.css';

export function PartyPage () {
  return (
    <div className="party-background">
      <main className="mood-page">
        <button className="mood-button">
          <Link to='/party' className="button-link">
            PARTY DRAKE
          </Link>
        </button>
        <a className="spotify-button button-link" href="https://open.spotify.com/playlist/7AGbCCR3Kqy24uHyu6CMZB?si=32755969fa70412c" target="_blank" rel="noopener noreferrer">
          PARTY PLAYLIST
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

export default PartyPage;