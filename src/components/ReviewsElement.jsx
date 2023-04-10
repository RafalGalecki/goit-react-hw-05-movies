import React from 'react';

const ReviewsElement = ({ author, content }) => {
  return (
    <li>
      <h4>Author: {author}</h4>
      <p>{content}</p>
    </li>
  );
};

export default ReviewsElement;
