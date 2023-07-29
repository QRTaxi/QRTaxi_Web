import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'src/styles/globalStyles';
import { theme } from 'src/styles/theme';
import Router from './components/common/Router';

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </>
  );
}
