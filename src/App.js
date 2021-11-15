import { ThemeProvider } from 'styled-components';
import { useTheme } from './hooks/useTheme';

import { GlobalStyles } from './styles/GlobalStyles';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <main>
        <h1>Hello World</h1>
        <button onClick={toggleTheme}>Toggle mode</button>
      </main>
    </ThemeProvider>
  );
}

export default App;
