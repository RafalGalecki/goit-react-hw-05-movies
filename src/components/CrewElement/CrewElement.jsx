import React from 'react';
import {
  Portrait,
  Role,
  CastGridItem,
  Placeholder,
} from '../CastElement/CastElement.styled';

const CrewElement = ({ id, srcImg, name, department, job }) => {
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
        <p>{job}</p>
        <p>
          <b>{department}</b>
        </p>
      </Role>
    </CastGridItem>
  );
};
export default CrewElement;
