import { Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import { Container, Header, Nav, Link } from './SharedLayout.styled';
import Loader from './Loader/Loader';
import ScrollButton from './ScrollButton';

export const SharedLayout = () => {
  const location = useLocation();
  return (
    <Container>
      <Header>
        <Nav>
          <Link active={location.pathname === '/' ? 'on' : 'off'} to="/" end>
            Home
          </Link>
          <Link
            active={location.pathname.startsWith('/movies') ? 'on' : 'off'}
            to="/movies"
          >
            Movies
          </Link>
        </Nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <ScrollButton />
    </Container>
  );
};
