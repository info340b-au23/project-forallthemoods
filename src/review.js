import { Carousel } from "react-bootstrap";
import React, { useState } from 'react';
export function ReviewPage() {
    return (
      <div>
          <main>
            <div className="review-container">
    
              <section className="image-container">
                <span className="left material-icons">chevron_left</span>
                <img className="drake-album" src="/img/nothingwasthesame.avif" alt="Nothing Was The Same Album Cover" />
                <span className="right material-icons">chevron_right</span>
              </section>
              <p className="img-caption">Nothing Was The Same</p>
    
              <div className="review-input">
                <section className="review">
                  <h1>WRITE A REVIEW:</h1>
                  <div className="review-inputfield">
                    <textarea id="review-text" name="review" rows="4" cols="75"></textarea>
                  </div>
                  <input className="submit-review" type="submit" aria-label="submit button" value="submit" />
                </section>
              </div>
    
              <div className="rate-input">
                <section className="rate">
                  <h1>LEAVE A RATING:</h1>
                  <span className="star filled material-icons">star</span>
                  <span className="star filled material-icons">star</span>
                  <span className="star filled material-icons">star</span>
                  <span className="star filled material-icons">star</span>
                  <span className="star outlined material-icons">star</span>
                </section>
              </div>
            </div>
          </main>
      </div>
    );
  }