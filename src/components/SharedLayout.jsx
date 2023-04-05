import { Outlet, useLocation } from 'react-router-dom';
import { Container, Header, Nav, Link } from './SharedLayout.styled';

export const SharedLayout = () => {
  const location = useLocation();
  return (
    <Container>
      <Header>
        <Nav>
          <Link
            active={
              location.pathname.startsWith('/') ? 'true' : 'false'
            }
            to="/"
            end
          >
            Home
          </Link>
          <Link
            active={location.pathname === '/movies' ? 'true' : 'false'}
            to="/movies"
          >
            Movies
          </Link>
        </Nav>
      </Header>

      <Outlet />
    </Container>
  );
};
