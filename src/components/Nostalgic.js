import React from 'react';
import { Link } from 'react-router-dom';
import 'material-icons/iconfont/material-icons.css';


export function NostalgicPage () {
  return (
    <div className="nostalgic-background">
      <main className="mood-page">
        <button className="mood-button">
          <Link to='/Homepage' className="button-link">
            NOSTALGIC DRAKE
          </Link>
        </button>
        <a className="spotify-button button-link" href="https://open.spotify.com/playlist/6BJML8R0wnLpkcvLIe7nK6?si=f02e740c0be348f2" target="_blank" rel="noopener noreferrer">
          NOSTALGIC PLAYLIST
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

export default NostalgicPage;