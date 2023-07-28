import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/globalStyles';
import { theme } from './styles/theme';

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}
