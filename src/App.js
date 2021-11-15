import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { useTheme } from './hooks/useTheme';
import { CountryDetails } from './pages/CountryDetails';
import { Home } from './pages/Home';

import { GlobalStyles } from './styles/GlobalStyles';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <main>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route
              exact
              path='/country-details/:id'
              element={<CountryDetails />}
            />
          </Routes>
          <button onClick={toggleTheme}>Toggle mode</button>
        </main>
      </ThemeProvider>
    </Router>
  );
}

export default App;
