import { Outlet, useLocation } from 'react-router-dom';
import { createContext, useState } from 'react';
import { Suspense } from 'react';
import {
  Container,
  Header,
  Nav,
  Link,
  ToggleThemeButton,
} from './SharedLayout.styled';
import Loader from '../Loader/Loader';
import ScrollButton from '../ScrollButton/ScrollButton';

export const ThemeContext = createContext(null);

export const SharedLayout = () => {
  const location = useLocation();
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(current => (current === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Container id={theme}>
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
          
          <ToggleThemeButton type="button" onClick={toggleTheme}>
            {theme === 'light' ? <span>&#9789;</span> : <span>&#9728;</span>}
          </ToggleThemeButton>
          
        </Header>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <ScrollButton />
      </Container>
    </ThemeContext.Provider>
  );
};
