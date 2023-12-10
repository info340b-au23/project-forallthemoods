import React from 'react';
import { Link } from 'react-router-dom';
import 'material-icons/iconfont/material-icons.css';
import './app.css';

import Navibar from './Nav';

export function PartyPage () {
  return (
    <div>
      <Navibar />
      <main className="mood-page">
        <button className="mood-button">
          <Link to='/party' className="button-link">
            PARTY Drake
          </Link>
        </button>
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