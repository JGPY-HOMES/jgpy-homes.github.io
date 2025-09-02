import { RouteObject } from 'react-router-dom';
import { Home } from '../pages/Home/index';
import { Services } from '../pages/Services/index';
import { Contact } from '../pages/Contact/index';
import { About } from '../pages/About/index';
import React from 'react';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: React.createElement(Home),
  },
  {
    path: '/services',
    element: React.createElement(Services),
  },
  {
    path: '/about',
    element: React.createElement(About),
  },
  {
    path: '/contact',
    element: React.createElement(Contact),
  },
];
    