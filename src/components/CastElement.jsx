import React from 'react';

const CastElement = ({ srcImg, name, character }) => {
  return (
    <li>
      <img src={srcImg} alt={`${name}'s portrait`} />
      <p>{name}</p>
      <p>Character: {character}</p>
    </li>
  );
};
export default CastElement;
