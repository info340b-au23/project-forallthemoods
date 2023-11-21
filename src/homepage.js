import { Link } from "react-router-dom";
import 'material-icons/iconfont/material-icons.css';
import './app.css';


export function HomePage() {
    return (
      <div>
        <div className="nav-container">
          <span className="menu material-icons">menu</span>
          <header>FOR ALL THE MOODS</header>
          <span className="profile material-icons">account_circle</span>
    
          <main>
            <button className="mood-button"><Link to='/mood' className="button-link">MY MOODS</Link></button>
            <button className="merch-button button-link" href="https://us.octobersveryown.com/" target="_blank" rel="noopener noreferrer">MERCH</button>
            <button className="quiz-button" ><Link to='/quiz' className="button-link">QUIZ</Link></button>
            <button className="review-button"><Link to='/review' className="button-link">REVIEW/RATE</Link></button>
          </main>
        </div>
        <footer>
            <small>
              &copy; 2023 For All the Moods
            </small>
        </footer>
      </div>
    );
  }