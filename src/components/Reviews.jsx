import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/api';
import ReviewsElement from './ReviewsElement';
import { Container } from './SharedLayout.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();
  

  useEffect(() => {
    const getReviews = async () => {
      
      const response = await getMovieReviews(id);
      if (response !== null) {
        setReviews(response);
      } else {
        setReviews([]);
      }
      
    };
    getReviews();
  }, [id]);

  return (
    <Container>
      {reviews.length > 0 ?
        (<ul>
          {reviews.map(element => {
            return (
            
              <ReviewsElement
                key={element.id}
                author={element.author}
                content={element.content}
              />
              
            );
          })}
        </ul>) : (<p>We don't have any reviews for this movie.</p>)
      }
    </Container>
  );
};

export default Reviews;
