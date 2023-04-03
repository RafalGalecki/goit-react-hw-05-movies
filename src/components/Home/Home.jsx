import React from "react";

const Home = () => {
    let movieTitle = 'Example'
    let movieId = 1;
    return (
      <>
        <h2>Trending today</h2>
        <ul>
          <li id={movieId}>{movieTitle}</li>
        </ul>
      </>
    );
}
export default Home;