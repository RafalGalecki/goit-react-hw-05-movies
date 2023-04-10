import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/api';
import ReviewsElement from './ReviewsElement';
import { Container } from './SharedLayout.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();
  //const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getReviews = async () => {
      //setIsLoading(true);
      const response = await getMovieReviews(id);
      if (response !== null) {
        setReviews(response);
        console.log('REVIEWS', response);
      } else {
        setReviews([]);
      }
      //setIsLoading(false);
    };
    getReviews();
  }, [id]);

  return (
    <Container>
      
        <ul>
          {reviews.map(element => {
            return (
              <ReviewsElement
                key={element.id}
                author={element.author}
                content={element.content}
              />
            );
          })}
        </ul>
     
    </Container>
  );
};

export default Reviews;
