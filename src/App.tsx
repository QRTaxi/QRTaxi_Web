import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'src/styles/globalStyles';
import { theme } from 'src/styles/theme';
import { RouterProvider } from 'react-router-dom';
import Router from './components/common/Router';
import { RecoilRoot } from 'recoil';
import { Suspense } from 'react';

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RecoilRoot>
          <Suspense>
            <RouterProvider router={Router} />
          </Suspense>
        </RecoilRoot>
      </ThemeProvider>
    </>
  );
}
