import { RouteObject } from 'react-router-dom';
import { Home } from '../pages/Home/index';
import React from 'react';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: React.createElement(Home),
  },
];
    