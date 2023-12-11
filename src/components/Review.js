import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

export function ReviewPage(prop) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [userRating, setUserRating] = useState(0);
  const [submissionMessage, setSubmissionMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState(true);
  const [reviews, setReviews] = useState([]);
  const [showOtherReviews, setShowOtherReviews] = useState(false);

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

    setShowOtherReviews(false);
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };

  useEffect(() => {
    resetReviewAndRating();
  }, [currentImageIndex]);

  useEffect(() => {
    setShowOtherReviews(false);
  }, [currentImageIndex]);

  const handleRatingClick = (rating) => {
    setUserRating(rating);
  };

  const handleReviewSubmit = () => {
    if (!reviewText || userRating === 0) {
      setErrorMessage('PLEASE FILL OUT BOTH THE REVIEW AND RATING.');
      setSubmissionMessage('');
      return;
    }

    const newReview = {
      imageIndex: currentImageIndex,
      caption: captions[currentImageIndex],
      reviewText,
      userRating,
    };

    setReviews((prevReviews) => [...prevReviews, newReview]);

    setSubmissionMessage('REVIEW AND RATE SUBMITTED!');
    setErrorMessage('');
    resetReviewAndRating();
    setReviewText('');
    setUserRating(0);
    setShowOtherReviews(true);

    setTimeout(() => {
      setSubmissionMessage('');
    }, 7000);
  };

  const resetReviewAndRating = () => {
    setReviewText('');
    setUserRating(0);
  };

  const currentImageReviews = reviews.filter(
    (review) => review.imageIndex === currentImageIndex
  );

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
                <Form.Control
                  as="textarea"
                  id="review-text"
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  rows="4"
                  placeholder="Write your review here..."
                />
              </div>
              <Button className="submit-review" variant="primary" onClick={handleReviewSubmit}>
                SUBMIT
              </Button>
              {errorMessage && (
                <p className="error-message">
                  {errorMessage}
                </p>
              )}
              {submissionMessage && (
                <p className="submission-message">
                  {submissionMessage}
                </p>
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

          {showOtherReviews && (
            <div className='other-reviews'>
              <h2>OTHER REVIEWS:</h2>
              <ul>
                {currentImageReviews.map((review, index) => (
                  <li key={index}>
                    <p className='review-albumname'>{review.caption}</p>
                    <p className='review-list'>{review.reviewText}</p>
                    <p className='review-list'>{`Rating: ${review.userRating}`}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}