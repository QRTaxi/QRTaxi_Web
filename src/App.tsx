import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'src/styles/globalStyles';
import { theme } from 'src/styles/theme';
import { RouterProvider } from 'react-router-dom';
import Router from './components/common/Router';
import { RecoilRoot } from 'recoil';
import { Suspense } from 'react';
import Layout from './components/common/Layout';

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RecoilRoot>
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
