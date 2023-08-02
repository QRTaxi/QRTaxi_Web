import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

const Landing = lazy(() => import('src/pages/landing'));
const Booking = lazy(() => import('src/pages/booking'));

const Router = () => (
  <BrowserRouter>
    <RecoilRoot>
      <Suspense>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </Suspense>
    </RecoilRoot>
  </BrowserRouter>
);

export default Router;
