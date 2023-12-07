import React, { useState } from 'react';

export function ReviewPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [userRating, setUserRating] = useState(0);
  const [submissionMessage, setSubmissionMessage] = useState('');

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

  const captions = [
    'Nothing Was The Same',
    'For All The Dogs',
    'Her Loss',
    'More Life',
    'Scorpion',
    'Take Care',
    'Thank Me Later',
    'Views',
    'CLB',
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

  const handleRatingClick = (rating) => {
    setUserRating(rating);
  };

  const handleReviewSubmit = () => {
    if (!reviewText || userRating === 0) {
      setSubmissionMessage('PLEASE FILL OUT BOTH THE REVIEW AND RATING.');
      return;
    }
  
    setSubmissionMessage('REVIEW AND RATE SUBMITTED!');
    setReviewText('');
    setUserRating(0);
    setTimeout(() => {
      setSubmissionMessage('');
    }, 7000);
  };

  return (
    <div>
      <main>
        <div className="review-container">
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
          <p className="img-caption">{captions[currentImageIndex]}</p>

          <div className="review-input">
            <section className="review">
              <h1>WRITE A REVIEW:</h1>
              <div className="review-inputfield">
                <textarea
                  id="review-text"
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  rows="4"
                  cols="75"
                ></textarea>
              </div>
              <button className="submit-review" onClick={handleReviewSubmit}>
                Submit
              </button>
              {submissionMessage && (
                <p className='submission-message'>{submissionMessage}</p>
              )}
            </section>
          </div>

          <div className="rate-input">
            <section className="rate">
              <h1>LEAVE A RATING:</h1>
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`star ${
                    star <= userRating ? 'filled' : 'outlined'
                  } material-icons`}
                  onClick={() => handleRatingClick(star)}
                >
                  star
                </span>
              ))}
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}