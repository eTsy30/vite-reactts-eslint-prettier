import { createBrowserRouter, Navigate } from 'react-router-dom';

import { Layout } from './Page/Layout/Layout';
import { Main } from './Page/Main/Main';
import { StepRegistration } from './Page/StepRegistration/StepRegistration';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,

    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: 'registration',
        element: <StepRegistration />,
      },
      {
        path: '*',
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);
