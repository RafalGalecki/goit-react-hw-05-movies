import { Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import { Container, Header, Nav, Link } from './SharedLayout.styled';

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
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
