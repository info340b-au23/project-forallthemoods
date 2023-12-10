import React, { useState } from 'react';

export function QuizPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [userSelections, setUserSelections] = useState(Array(7).fill(null));
  const [submitted, setSubmitted] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [playlistResult, setPlaylistResult] = useState('');

  const images = [
    '/img/nothingwasthesame.avif',
    '/img/For_All_The_Dogs.jpg',
    '/img/her-loss.jpg',
    '/img/more-life.jpg',
    '/img/scorpion.jpg',
    '/img/Take-Care.jpeg',
    '/img/views.jpg',
  ];

  const questions = [
    ['From Time', 'Wu-Tang Forever', 'Hold On, We\'re Going Home', 'Pound Cake / Paris Morton Music 2'],
    ['IDGAF', 'Slime You Out', 'Rich Baby Daddy', 'Another Late Night'],
    ['Rich Flex', 'Hours In Silence', 'BackOutsideBoyz', 'Treacherous Twin'],
    ['Teenage Fever', 'Do Not Disturb', 'Passionfruit', 'Madiba Riddim'],
    ['Nonstop', 'Jaded', 'Nice For What', 'After Dark'],
    ['Marvins Room', 'The Motto', 'HYFR', 'Shot For Me'],
    ['Fireworks', 'Find Your Love', 'Miss Me', 'Show Me A Good Time'],
  ];

  const partyDrakeSongs = [
    'Wu-Tang Forever',
    'Slime You Out',
    'Hours In Silence',
    'Do Not Disturb',
    'Jaded',
    'The Motto',
    'Find Your Love',
  ];

  const nostalgicDrakeSongs = [
    'From Time',
    'IDGAF',
    'Rich Flex',
    'Teenage Fever',
    'Nonstop',
    'Marvins Room',
    'Fireworks',
  ];

  const heartbreakDrakeSongs = [
    'Hold On, We\'re Going Home',
    'Rich Baby Daddy',
    'BackOutsideBoyz',
    'Passionfruit',
    'Nice For What',
    'HYFR',
    'Miss Me',
  ];

  const hittheclubDrakeSongs = [
    'Pound Cake / Paris Morton Music 2',
    'Another Late Night',
    'Treacherous Twin',
    'Madiba Riddim',
    'After Dark',
    'Shot For Me',
    'Show Me A Good Time',
  ];

  const hypedDrakeSongs = [
    'Hold On, We\'re Going Home',
    'Rich Baby Daddy',
    'BackOutsideBoyz',
    'Teenage Fever',
    'Nonstop',
    'HYFR',
    'Show Me A Good Time',
  ];

  const playlists = [
    { name: 'partyDrake', songs: partyDrakeSongs },
    { name: 'nostalgicDrake', songs: nostalgicDrakeSongs },
    { name: 'heartbreakDrake', songs: heartbreakDrakeSongs },
    { name: 'hittheclubDrake', songs: hittheclubDrakeSongs },
    { name: 'hypedDrake', songs: hypedDrakeSongs },
  ];

  const calculateScore = (selectedSongs, playlist) => {
    return selectedSongs.reduce((score, song, index) => {
      if (playlist.includes(song)) {
        score += 1;
      }
      return score;
    }, 0);
  };

  const calculatePlaylistResult = (selectedSongs) => {
    let maxScore = 0;
    let result = '';

    playlists.forEach((playlist) => {
      const score = calculateScore(selectedSongs, playlist.songs);
      if (score > maxScore) {
        maxScore = score;
        result = playlist.name;
      }
    });

    return result;
  };

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
    setSubmitted(true);

    const selectedSongs = userSelections.map((selection, index) => questions[index][selection]);
    const playlistResult = calculatePlaylistResult(selectedSongs);

    setShowResult(true);
    setPlaylistResult(playlistResult);
  };

  const handleResetQuiz = () => {
    setUserSelections(Array(7).fill(null));
    setSubmitted(false);
    setShowResult(false);
    setCurrentImageIndex(0);
    setPlaylistResult('');
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

  const renderQuiz = () => {
    const isLastPage = currentImageIndex === images.length - 1;

    return (
      <div>
        <h1 className="quiz-title">WHICH DRAKE PLAYLIST IS FOR YOU?</h1>
        <h1 className="question-number">{`Question ${currentImageIndex + 1}/7`}</h1>

        <section className="image-container">
          {currentImageIndex !== 0 && (
            <span className="left material-icons" onClick={handlePrevClick}>
              chevron_left
            </span>
          )}
          <img
            className="drake-album"
            src={images[currentImageIndex]}
            alt="Album Cover"
          />
          {currentImageIndex !== images.length - 1 && (
            <span className="right material-icons" onClick={handleNextClick}>
              chevron_right
            </span>
          )}
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
          submitted && !showResult ? (
            <p>Quiz Submitted!</p>
          ) : null
        )}
      </div>
    );
  }; 
        
  const renderResult = () => {
    let resultImage = '/img/defaultImage.png';

    if (playlistResult === 'partyDrake') {
      resultImage = '/img/For_All_The_Dogs.jpg';
    } else if (playlistResult === 'nostalgicDrake') {
      resultImage = '/img/nothingwasthesame.avif';
    } else if (playlistResult === 'heartbreakDrake') {
      resultImage = '/img/Take-Care.jpeg';
    } else if (playlistResult === 'hittheclubDrake') {
      resultImage = '/img/views.jpg';
    } else if (playlistResult === 'hypedDrake') {
      resultImage = '/img/her-loss.jpg';
    }

    return (
      <div>
        <h1>Your Drake Playlist:</h1>
        <img
          className="result-image"
          src={resultImage}
          alt="Result Album Cover"
        />
        <p>{playlistResult}</p>
        <button className="redo-quiz-button" onClick={handleResetQuiz}>
          Redo Quiz
        </button>
      </div>
    );
  };

  return (
    <div>
      <main>
        <div className="review-container">
          {showResult ? renderResult() : renderQuiz()}
        </div>
      </main>
    </div>
  );
}

