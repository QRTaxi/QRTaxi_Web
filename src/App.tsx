import GlobalStyle from 'src/styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { RouterProvider } from 'react-router-dom';
import { theme } from 'src/styles/theme';
import { Suspense, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import Router from './components/common/Router';
import Layout from './components/common/Layout';

import { requestPermission } from './FirebaseConfig';
import { userStatus } from './utils/recoil/store';

export default function App() {
  const { id: assign_id } = useRecoilValue(userStatus);

  // Need this handle FCM token generation when a user manually blocks or allows notification
  useEffect(() => {
    if (window.Notification?.permission === 'granted' && assign_id) {
      requestPermission(assign_id).catch((error: Error) =>
        console.error(error),
      );
    }
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Suspense>
            <RouterProvider router={Router} />
          </Suspense>
        </Layout>
      </ThemeProvider>
    </>
  );
}
