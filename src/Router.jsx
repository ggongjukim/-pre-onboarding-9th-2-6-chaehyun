import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import { Main, Reservations } from './pages';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navigate to="main" />,
    },
    {
      path: 'main',
      element: <Main />,
    },
    {
      path: 'reservations',
      element: <Reservations />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
