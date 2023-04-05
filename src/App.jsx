import { Navigate, Route, Routes } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout';
import { lazy } from 'react';

const Home = lazy(() => import('./pages/Home'));
const Movies = lazy(() => import('./pages/Movies'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />}/>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
