import { createBrowserRouter } from 'react-router-dom';

import Landing from '@/pages/landing';
import Booking, { Loader as bookingLoader } from '@/pages/booking';
import Waiting from '@/pages/waiting';
import Cancel from '@/pages/cancel';
import Finish from '@/pages/finish';
import Failed from '@/pages/failed';
import Success from '@/pages/success';
import Riding from '@/pages/riding';
import Error from '@/pages/error';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
    errorElement: <Error />,
  },
  {
    path: 'booking/:qrID',
    element: <Booking />,
    loader: bookingLoader,
    errorElement: <Error />,
  },
  {
    path: 'waiting',
    element: <Waiting />,
    errorElement: <Error />,
  },
  {
    path: 'cancel',
    element: <Cancel />,
    errorElement: <Error />,
  },
  {
    path: 'failed',
    element: <Failed />,
    errorElement: <Error />,
  },
  {
    path: 'finish',
    element: <Finish />,
    errorElement: <Error />,
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
