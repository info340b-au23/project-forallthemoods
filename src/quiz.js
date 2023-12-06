import React from 'react';

export function QuizPage() {
  return (
    <div>
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
                        <input type="checkbox" value="check" id="check"/>
                            <p>Take Care</p>
                    </div>
                  
                    <div className="question2">
                        <input type="checkbox" value="check" id="check"/>
                            <p>Headlines</p>
                    </div>
                           
                            
                    <div className="question3">
                        <input type="checkbox" value="check" id="check"/>
                            <p>Marvins Room</p>
                    </div>
                            
                            
                    <div className="question4">
                        <input type="checkbox" value="check" id="check"/>
                            <p>HYFR</p>
                    </div>
        
                </div>
            </section>
          </div>
        </main>
    </div>
  );
}

  