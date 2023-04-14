import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { getMovieCrew } from 'services/api';
import CrewElement from 'components/CrewElement/CrewElement';
import { Container } from '../SharedLayout/SharedLayout.styled';
import { CastGrid } from '../Cast/Cast.styled';

const Crew = () => {
  const [crew, setCrew] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getCrew = async () => {
      const response = await getMovieCrew(id);
      if (response !== null) {
        setCrew([...response]);
      } else {
        setCrew([]);
      }
    };
    getCrew();
  }, [id]);

  return (
    <Container>
      {crew.length > 0 ? (
        <CastGrid>
          {crew.map(element => {
            return (
              <CrewElement
                key={element.id + nanoid()}
                srcImg={element.srcImg}
                name={element.name}
                department={element.department}
                job={element.job}
              />
            );
          })}
        </CastGrid>
      ) : (
        <div>Crew not found</div>
      )}
    </Container>
  );
};

export default Crew;
