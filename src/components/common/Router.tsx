import { createBrowserRouter } from 'react-router-dom';

import Landing from '@/pages/landing';
import Booking, { Loader as bookingLoader } from '@/pages/booking';
import Waiting from '@/pages/waiting';
import Cancel from '@/pages/cancel';
import Finish from '@/pages/finish';
import Failed from '@/pages/failed';
import Success from '@/pages/success';
import Riding from '@/pages/riding';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: 'booking/:qrID',
    element: <Booking />,
    loader: bookingLoader,
  },
  {
    path: 'waiting',
    element: <Waiting />,
  },
  {
    path: 'cancel',
    element: <Cancel />,
  },
  {
    path: 'failed',
    element: <Failed />,
  },
  {
    path: 'finish',
    element: <Finish />,
  },
  {
    path: 'success',
    element: <Success />,
  },
  {
    path: 'riding',
    element: <Riding />,
  },
]);

export default Router;
