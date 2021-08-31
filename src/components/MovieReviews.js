import React from 'react';

const Review = ({ headline, byline, display_title }) => {
  return (
    <div key={headline} className="review">
      <h2>{headline}</h2>
      <h3>{byline}</h3>
      <h4>{display_title}</h4>
    </div>
  )
};

const MovieReviews = ({reviews}) => (
  <div className="review-list">
    {reviews.map(Review)}
  </div>
);

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;