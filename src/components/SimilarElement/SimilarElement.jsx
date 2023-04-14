import React from 'react';
import {
  Portrait,
  Role,
  CastGridItem,
  Placeholder,
} from '../CastElement/CastElement.styled';

const SimilarElement = ({ id, srcImg, title, releaseDate }) => {
  return (
    <CastGridItem>
      {!srcImg.includes(null) ? (
        <Portrait>
          <img src={srcImg} alt={`${title} - this movie's poster`} />
        </Portrait>
      ) : (
        <Placeholder>
          <p>No poster yet.</p>
        </Placeholder>
      )}
      <Role>
        <p>
          <b>{title}</b>
        </p>
        <p>{releaseDate}</p>
      </Role>
    </CastGridItem>
  );
};
export default SimilarElement;
