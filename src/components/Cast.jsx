import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { getMovieCast } from 'services/api';
import CastElement from 'components/CastElement';
import { Container } from './SharedLayout.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getCast = async () => {
      setIsLoading(true);
      const response = await getMovieCast(id);
      if (response !== null) {
        setCast([...response]);
        console.log('CAST', response);
      } else {
        setCast([]);
      }
      setIsLoading(false);
    };
    getCast();
  }, [id]);

  return (
    <Container>
      {!!isLoading ? (
        <div>Loading...</div>
      ) : cast.length > 0 ? (
        <ul>
          {cast.map(element => {
            return (
              <CastElement
                key={element.id + nanoid()}
                srcImg={element.srcImg}
                name={element.name}
                character={element.character}
              />
            );
          })}
        </ul>
      ) : (
        <div>Cast not found</div>
      )}
      
    </Container>
  );
};

export default Cast;