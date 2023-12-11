import React from 'react';
import { Link } from 'react-router-dom';
import 'material-icons/iconfont/material-icons.css';
import './app.css';


export function ClubPage () {
  return (
    <div className="club-background">
      <main className="mood-page">
        <button className="mood-button">
          <Link to='/club' className="button-link">
            HIT THE CLUB DRAKE
          </Link>
        </button>
        <a className="spotify-button button-link" href="https://open.spotify.com/playlist/1VG0cAfJoSLhvOmF6MBWmW?si=97e061b1d3a44ac2" target="_blank" rel="noopener noreferrer">
          HIT THE CLUB PLAYLIST
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

export default ClubPage;