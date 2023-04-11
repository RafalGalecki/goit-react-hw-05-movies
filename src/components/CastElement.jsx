import React from 'react';


const CastElement = ({ id, srcImg, name, character }) => {
  return (
    <li>
      {!srcImg.includes(null) ? (
        <img src={srcImg} alt={`${name}'s portrait`} />
      ) : (
        <p>No image yet.</p>
      )}
      <p>{name}</p>
      <p>Character: {character}</p>
    </li>
  );
};
export default CastElement;
