import React from 'react';
import { Link } from 'react-router-dom';
import 'material-icons/iconfont/material-icons.css';

export function HypedPage () {
  return (
    <div className="hyped-background">
      <main className="mood-page">
        <button className="mood-button">
          <Link to='/hyped' className="button-link">
            HYPED DRAKE
          </Link>
        </button>
        <a className="spotify-button button-link" href="https://open.spotify.com/playlist/3yniL3tuzGTBuexLTTdZZE?si=3000bfa4b8f74d61" target="_blank" rel="noopener noreferrer">
          HYPED PLAYLIST
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

export default HypedPage;