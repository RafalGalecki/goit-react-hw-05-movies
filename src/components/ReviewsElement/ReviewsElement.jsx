import React from 'react';
import Markdown from 'marked-react';
import { ReviewLi } from './ReviewsElement.styled';

const ReviewsElement = ({ author, content }) => {
  return (
    <ReviewLi>
      <h4>Author: {author}</h4>
      <Markdown>{content}</Markdown>
    </ReviewLi>
  );
};

export default ReviewsElement;
