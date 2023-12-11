import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

export function ReviewPage(prop) {
  let [currentImageIndex, setCurrentImageIndex] = useState(0);
  let [reviewText, setReviewText] = useState('');
  let [userRating, setUserRating] = useState(0);
  let [submissionMessage, setSubmissionMessage] = useState('');
  let [reviews, setReviews] = useState([]);
  let [showOtherReviews, setShowOtherReviews] = useState(false);

  let images = [
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

  let captions = [
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

  let handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );

    setShowOtherReviews(false);
  };

  let handleNextClick = () => {
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

  let handleRatingClick = (rating) => {
    setUserRating(rating);
  };

  let handleReviewSubmit = () => {
    if (!reviewText || userRating === 0) {
      setSubmissionMessage('PLEASE FILL OUT BOTH THE REVIEW AND RATING.');
      return;
    }

    let newReview = {
      imageIndex: currentImageIndex,
      caption: captions[currentImageIndex],
      reviewText,
      userRating,
    };

    setReviews((prevReviews) => [...prevReviews, newReview]);

    setSubmissionMessage('REVIEW AND RATE SUBMITTED!');
    resetReviewAndRating();
    setReviewText('');
    setUserRating(0);
    setShowOtherReviews(true);

    setTimeout(() => {
      setSubmissionMessage('');
    }, 7000);
  };

  let resetReviewAndRating = () => {
    setReviewText('');
    setUserRating(0);
  };

  let currentImageReviews = reviews.filter(
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
              <Button  className="submit-review" variant="primary" onClick={handleReviewSubmit}>
                Submit
              </Button>
              {submissionMessage && (
                <p className={`submission-message ${submissionMessage.trim() && 'error'}`}>
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