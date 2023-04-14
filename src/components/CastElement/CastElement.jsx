import React from 'react';
import {
  Portrait,
  Role,
  CastGridItem,
  Placeholder,
} from './CastElement.styled';

const CastElement = ({ id, srcImg, name, character }) => {
  return (
    <CastGridItem>
      {!srcImg.includes(null) ? (
        <Portrait>
          <img src={srcImg} alt={`${name}'s portrait`} />
        </Portrait>
      ) : (
        <Placeholder>
          <p>No image yet.</p>
        </Placeholder>
      )}
      <Role>
        <p>{name}</p>
        <p>as:</p>
        <p>{character}</p>
      </Role>
    </CastGridItem>
  );
};
export default CastElement;
