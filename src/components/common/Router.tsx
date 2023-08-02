import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

const Landing = lazy(() => import('src/pages/landing'));
const Booking = lazy(() => import('src/pages/booking'));
const Finish = lazy(() => import('src/pages/finish'));
const Waiting = lazy(() => import('src/pages/waiting'));

const Router = () => (
  <BrowserRouter>
    <RecoilRoot>
      <Suspense>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/waiting" element={<Waiting />} />
          <Route path="/finish" element={<Finish />} />
        </Routes>
      </Suspense>
    </RecoilRoot>
  </BrowserRouter>
);

export default Router;
