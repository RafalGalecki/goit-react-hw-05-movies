import React from "react";
//import Header from "./Header/Header";
//import { Routes, Route } from 'react-router-dom';
import Home from "./Home/Home";

//import NotFound from 'path/to/pages/NotFound';

export const App = () => {

  return (
    <div
    >
      <Home />
      {/* <Header /> */}
      {/* <Routes>
        <Route path="/" element={<Home />} /> */}
        {/* <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="/movies/:movieId/cast" element={<Cast />} />
        <Route path="/movies/:movieId/reviews" element={<Reviews />} />
         <Route path="*" element={<NotFound />} /> */}
      {/* </Routes> */}
    </div>
  );
};
