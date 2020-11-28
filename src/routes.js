/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Test from './components/Test';

const routes = {
  HOME: {
    path: '/',
    component: () => <div>/</div>,
  },
  TEST: {
    path: '/test/:id',
    component: () => <Test type="view" />,
  },
  TEST_EDIT: {
    path: '/test/:id/edit',
    component: () => <Test type="edit" />,
  },
  SUITE: {
    path: '/suite/:id',
    component: () => <div>Suite</div>,
  },
  SUITE_EDIT: {
    path: '/suite/:id/edit',
    component: () => <div>Edit Suite</div>,
  },
};

export default routes;
