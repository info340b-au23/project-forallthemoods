import { Link } from "react-router-dom";
import 'material-icons/iconfont/material-icons.css';
import './app.css';


export function HomePage() {
    return (
      <div className="nav-container">
        <span className="menu material-icons">menu</span>
        <header>FOR ALL THE MOODS</header>
        <span className="profile material-icons">account_circle</span>
  
        <nav>
          <ul>
            <li><Link to='/'>HOME PAGE</Link></li>
            <li><Link to='/quiz'>QUIZ</Link></li>
            <li><Link to='/review'>REVIEW</Link></li>
            <li><Link to='/mood'>MOOD</Link></li>
            <li><Link to='/eg_mood'>MOOD EXAMPLE</Link></li>
            <li><Link to='/sign-up'>SIGN-UP</Link></li>
          </ul>
        </nav>
  
        <main>
          <button className="mood-button">MY MOODS</button>
          <a className="merch-button" href="https://us.octobersveryown.com/" target="_blank" rel="noopener noreferrer">MERCH</a>
          <button className="quiz-button"> QUIZ</button>
          <button className="review-button">REVIEW/RATE</button>
        </main>
  
        <footer>
          <small>
            &copy; 2023 For All the Moods
          </small>
        </footer>
      </div>
    );
  }