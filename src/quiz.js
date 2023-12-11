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
    ['Come Thru','All Me', 'From Time', 'Pound Cake / Paris Morton Music 2', 'Started From The Bottom'],
    ['Rich Baby Daddy', 'Another Late Night', 'Bahamas Promises', '8am In Charlotte', 'IDGAF'],
    ['Spin Bout U', 'On BS', 'Hours In Silence', 'Broke Boys', 'Rich Flex'],
    ['Passionfruit', 'Portland', 'Teenage Fever', 'Gyalchester', 'Fake Love'],
    ['After Dark', 'Mob Ties', 'Jaded', 'Emotionless', 'Nonstop'],
    ['Take Care', 'HYFR', 'Doing it Wrong', 'The Motto', 'Headlines'],
    ['Feel No Ways', 'Child\'s Play', 'Redemption', 'Weston Road Flows', 'One Dance'],
  ];

  const bblDrakeSongs = [
    'Come Thru',
    'Rich Baby Daddy',
    'Spin Bout U',
    'Passionfruit',
    'After Dark',
    'Take Care',
    'Feel No Ways',
  ];

  const ttimeDrakeSongs = [
    'All Me',
    'Another Late Night',
    'On BS',
    'Portland',
    'Mob Ties',
    'HYFR',
    'Child\'s Play',
  ];

  const heartbrokenDrakeSongs = [
    'From Time',
    'Bahamas Promises',
    'Hours In Silence',
    'Teenage Fever',
    'Jaded',
    'Doing It Wrong',
    'Redemption',
  ];

  const oldheadDrakeSongs = [
    'Pound Cake / Paris Morton Music 2',
    '8am In Charlotte',
    'Broke Boys',
    'Gyalchester',
    'Emotionless',
    'The Motto',
    'Weston Road Flows',
  ];

  const champaignepapiDrakeSongs = [
    'Started From The Bottom',
    'IDGAF',
    'Rich Flex',
    'Fake Love',
    'Nonstop',
    'Headlines',
    'One Dance',
  ];

  const playlists = [
    { name: 'BBL Drake', songs: bblDrakeSongs },
    { name: 'T-Time Drake', songs: ttimeDrakeSongs },
    { name: 'Heartbroken Drake', songs: heartbrokenDrakeSongs },
    { name: 'Old-Head Drake', songs: oldheadDrakeSongs },
    { name: 'Champaigne Papi Drake', songs: champaignepapiDrakeSongs },
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
    const isFirstPage = currentImageIndex === 0;
    const isLastPage = currentImageIndex === images.length - 1;
  
    return (
      <div>
        <h1 className="quiz-title">WHICH DRAKE PERSONA ARE YOU?</h1>
        <h1 className="question-number">{`Question ${currentImageIndex + 1}/7`}</h1>
  
        <section className="image-container">
          <span
            className={`left material-icons ${isFirstPage ? 'disabled' : ''}`}
            onClick={handlePrevClick}
          >
            chevron_left
          </span>
  
          <img
            className={`drake-album ${isFirstPage || isLastPage ? 'centered' : ''}`}
            src={images[currentImageIndex]}
            alt="Album Cover"
          />
  
          <span
            className={`right material-icons ${isLastPage ? 'disabled' : ''}`}
            onClick={handleNextClick}
          >
            chevron_right
          </span>
        </section>
  
        <p className="quiz-caption">
          Choose Your Favorite Song From Each Album To See Which Persona Is For You
        </p>
  
        <section className="quiz-container">
          <div className="flex-container-quiz">
            {renderOptions(currentImageIndex)}
          </div>
        </section>
  
        {isLastPage && !submitted ? (
          <button className="submit-quiz-button" onClick={handleSubmit} disabled={userSelections.includes(null)}>
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
    let playlistDescription = '';
  
    if (playlistResult === 'BBL Drake') {
      resultImage = '/img/drake_results/BBL-Drake.jpeg';
      playlistDescription = 'You\'re THE friend to be around, consistently funny and the life of the party. You probably FaceTime your friends while partying and definitely have hit the duck lips as many times as Drake does.';
    } else if (playlistResult === 'T-Time Drake') {
      resultImage = '/img/drake_results/T-TIME-Drake.jpeg';
      playlistDescription = 'You\'re on some madness and badness. You are a driven, confident and assertive person with many friends. And you don\'t mind going bar for bar with your friends on a fire Drake verse.';
    } else if (playlistResult === 'Heartbroken Drake') {
      resultImage = '/img/drake_results/Heartbroken-Drake.jpeg';
      playlistDescription = 'How many times are you going to listen to \'Doing It Wrong?\' You\'re probably an introvert and love spending most of your time indoors listening to music.. Maybe text your friends back, they\'re worried about you homie.';
    } else if (playlistResult === 'Old-Head Drake') {
      resultImage = '/img/drake_results/Old-Head-Drake.jpeg';
      playlistDescription = 'You probably say the phrases “Drake sings too much” or “I miss the old Drake” way too often. You\'re either 35+ years old or 20 and simply love his old music for nostalgia. You have an old soul and simply love the classics.';
    } else if (playlistResult === 'Champaigne Papi Drake') {
      resultImage = '/img/drake_results/Champaigne-Papi-Drake.jpeg';
      playlistDescription = 'You definitely call Drake “The Boy” and love his radio hits. You\'re a confident but probably emotional person. You will ride for Drake no matter what song he makes and you might only bump him in the car.';
    }

    return (
      <div>
        <h1 className="quiz-title">YOUR DRAKE PERSONA:</h1>
        <img
          className="result-image"
          src={resultImage}
          alt="Result of Persona"
        />
        <h2 className="playlist-result">{playlistResult}</h2>
        <p className="result-description">{playlistDescription}</p>
        <button className="redo-quiz-button" onClick={handleResetQuiz}>
          Redo Quiz
        </button>
      </div>
    );
  }

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