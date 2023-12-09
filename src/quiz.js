import React, { useState } from 'react';

export function QuizPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [userSelections, setUserSelections] = useState(Array(9).fill(null));
  const [submitted, setSubmitted] = useState(false);

  const images = [
    '/img/nothingwasthesame.avif',
    '/img/For_All_The_Dogs.jpg',
    '/img/her-loss.jpg',
    '/img/more-life.jpg',
    '/img/scorpion.jpg',
    '/img/Take-Care.jpeg',
    '/img/Thank-Me-Later.jpg',
    '/img/views.jpg',
    '/img/clb.jpg',
  ];

  const albums = [
    'Nothing Was the Same',
    'For All The Dogs',
    'Her Loss',
    'More Life',
    'Scorpion',
    'Take Care',
    'Thank Me Later',
    'Views',
    'Certified Lover Boy (CLB)',
  ];

  const questions = [
    ['From Time', 'Wu-Tang Forever', 'Hold On, We\'re Going Home', 'Pound Cake / Paris Morton Music 2'],
    ['IDGAF', 'Slime You Out', 'Rich Baby Daddy', 'Another Late Night'],
    ['Rich Flex', 'Hours In Silence', 'BackOutsideBoyz', 'Treacherous Twin'],
    ['Teenage Fever', 'Do Not Disturb', 'Passionfruit', 'Madiba Riddim'],
    ['Nonstop', 'Jaded', 'Nice For What', 'After Dark'],
    ['Marvins Room', 'The Motto', 'HYFR', 'Shot For Me'],
    ['Fireworks', 'Find Your Love', 'Miss Me', 'Show Me A Good Time'],
    ['Feel No Ways', 'Child\'s Play', 'One Dance', 'Controlla'],
    ['Race My Mind', 'Knife Talk', 'Fountains', 'IMY2'],
  ];

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handleOptionSelect = (albumIndex, songIndex) => {
    const updatedSelections = [...userSelections];
    updatedSelections[albumIndex] = songIndex;
    setUserSelections(updatedSelections);
  };

  const handleSubmit = () => {
    // Handle the submitted data, for example, you can console.log it for now
    console.log('User selections:', userSelections);
    setSubmitted(true);
  };

  const renderOptions = (albumIndex) => {
    return questions[albumIndex].map((song, index) => (
      <div key={index} className={`question${albumIndex + 1}`}>
        <input
          type="radio"
          value={index}
          id={`option${index}`}
          checked={userSelections[albumIndex] === index}
          onChange={() => handleOptionSelect(albumIndex, index)}
        />
        <label htmlFor={`option${index}`}>
          <p>{song}</p>
        </label>
      </div>
    ));
  };

  const isLastPage = currentImageIndex === images.length - 1;

  return (
    <div>
      <main>
        <div className="review-container">
          <h1 className="quiz-title">WHICH DRAKE PLAYLIST IS FOR YOU?</h1>
          <h1 className="question-number">{`Question ${currentImageIndex + 1}/9`}</h1>

          <section className="image-container">
            <span className="left material-icons" onClick={handlePrevClick}>
              chevron_left
            </span>
            <img
              className="drake-album"
              src={images[currentImageIndex]}
              alt="Album Cover"
            />
            <span className="right material-icons" onClick={handleNextClick}>
              chevron_right
            </span>
          </section>
          <p className="quiz-caption">
            Choose Your Favorite Song From Each Album To See Which Curated Playlist Is For You
          </p>

          <section className="quiz-container">
            <div className="flex-container-quiz">
              {renderOptions(currentImageIndex)}
            </div>
          </section>

          {isLastPage && !submitted ? (
            <button className="submit-button" onClick={handleSubmit}>
              Submit
            </button>
          ) : (
            submitted && <p>Quiz Submitted!</p>
          )}
        </div>
      </main>
    </div>
  );
}