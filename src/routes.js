/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Test from './components/Test';
import Suites from './components/Suites';
import { MODES } from './constants';

const routes = {
  TEST_NEW: {
    id: 'test-new',
    exact: true,
    path: '/test/new',
    component: <Test mode={MODES.NEW} />,
  },
  TEST: {
    id: 'test-view',
    exact: true,
    path: '/test/:id',
    component: <Test mode={MODES.VIEW} />,
  },
  TEST_EDIT: {
    id: 'test-edit',
    exact: true,
    path: '/test/:id/edit',
    component: <Test mode={MODES.EDIT} />,
  },
  SUITE: {
    id: 'suite-view',
    exact: true,
    path: '/suite/:id',
    component: <div>Suite</div>,
  },
  SUITE_EDIT: {
    id: 'suite-edit',
    exact: true,
    path: '/suite/:id/edit',
    component: <div>Edit Suite</div>,
  },
  HOME: {
    path: '/',
    exact: true,
    id: 'home-page',
    component: <Suites />,
  },
};

export default routes;
