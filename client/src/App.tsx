import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TodoPage from './components/pages/TodoPage';
import CounterPage from './components/pages/CounterPage';
import Layout from './components/Layout';

function App(): JSX.Element {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [ 
        {
          path: '/',
          element: <TodoPage />,
        },
        {
          path: '/counter',
          element: <CounterPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
