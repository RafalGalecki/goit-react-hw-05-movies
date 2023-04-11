import React from 'react';
import Markdown from 'marked-react';

const ReviewsElement = ({ author, content }) => {
  return (
    <li>
      <h4>Author: {author}</h4>
      <Markdown>{content}</Markdown>
    </li>
  );
};

export default ReviewsElement;
