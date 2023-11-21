import React from 'react';

export function QuizPage() {
  return (
    <div>
      <div className="nav-container">
        <span className="menu material-icons">menu</span>
        <header>FOR ALL THE MOODS</header>
        <span className="profile material-icons">account_circle</span>

      </div>

        <main>
          <div className="review-container">
            <h1 className="quiz-title">WHAT TYPE OF DRAKE FAN ARE YOU?</h1>
            <h1 className="question-number">Question 1/10</h1>

            <section className="image-container">
              <img className="drake-album2" src="img/Take-Care.jpeg" alt="Take Care Album Cover" />
              <span className="right material-icons">chevron_right</span>
            </section>
            <p className="quiz-caption">What is your favorite song from Take Care?</p>

            <section className="quiz-container">
              <div className="flex-container-quiz">
                <div className="question1">
                  <input type="checkbox" value="check" id="check1" />
                  <label htmlFor="check1">Take Care</label>
                </div>
              </div>
            </section>
          </div>
        </main>
      <footer>
        <small>
          &copy; 2023 For All the Moods
        </small>
      </footer>
    </div>
  );
}

  