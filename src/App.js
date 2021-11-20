import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Header } from './components/Header';
import { useTheme } from './hooks/useTheme';
import { CountryDetails } from './pages/CountryDetails';
import { Home } from './pages/Home';

import { GlobalStyles } from './styles/GlobalStyles';

function App() {
  const { theme, toggleTheme, isDarkMode } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <main>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route
            exact
            path='/country-details/:code'
            element={<CountryDetails />}
          />
        </Routes>
      </main>
    </ThemeProvider>
  );
}

export default App;
