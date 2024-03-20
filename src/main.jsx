import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import RootLayout from './routes/RootLayout';
import Home from './routes/Home.jsx';
import Project from './routes/Project.jsx';
import About from './routes/About.jsx';
import Contact from './routes/Contact.jsx';

const root = createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {path: '/', element: <Home />},
      {path: '/project', element: <Project />},
      {path: '/about', element: <About />},
      {path: '/contact', element: <Contact />}
    ]
  }
]);

root.render(
  <RouterProvider router={router} />
);