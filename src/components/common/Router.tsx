import { createBrowserRouter } from 'react-router-dom';

import Landing from '@/pages/landing';
import Booking, { Loader as bookingLoader } from '@/pages/booking';
import Waiting from '@/pages/waiting';
import Cancel from '@/pages/cancel';
import Finish from '@/pages/finish';
import NoTaxi from '@/pages/noTaxi';

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
    path: 'notaxi',
    element: <NoTaxi />,
  },
  {
    path: 'finish',
    element: <Finish />,
  },
]);

export default Router;
