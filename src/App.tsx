import GlobalStyle from 'src/styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { RouterProvider } from 'react-router-dom';
import { theme } from 'src/styles/theme';
import { Suspense } from 'react';
import { RecoilRoot } from 'recoil';
import Router from './components/common/Router';
import Layout from './components/common/Layout';

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          <GlobalStyle />
          <Layout>
            <Suspense>
              <RouterProvider router={Router} />
            </Suspense>
          </Layout>
        </RecoilRoot>
      </ThemeProvider>
    </>
  );
}
