import { Outlet, useLocation } from 'react-router-dom';
import { createContext, useState } from 'react';
import { Suspense } from 'react';
import {
  Container,
  Header,
  Nav,
  Link,
  SwitchLabel,
} from './SharedLayout.styled';
import Loader from '../Loader/Loader';
import ScrollButton from '../ScrollButton/ScrollButton';
import Switch from 'react-switch';

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
          <SwitchLabel>
            {theme === 'light' ? <span>&#9789;</span> : <span>&#9728;</span>}
            <Switch
              onChange={toggleTheme}
              checked={theme === 'dark'}
              onColor="#ffa500"
              height={16}
              width={30}
            />
          </SwitchLabel>
        </Header>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <ScrollButton />
      </Container>
    </ThemeContext.Provider>
  );
};
