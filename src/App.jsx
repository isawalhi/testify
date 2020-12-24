import React from 'react';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'regenerator-runtime/runtime';

import 'antd/dist/antd.css';

import sagas from './sagas';
import routes from './routes';
import reducers from './reducers';
import Layout from './Layout';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(sagas);

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Layout>
        <Switch>
          {Object.keys(routes).map((routeKey) => {
            const route = routes[routeKey];
            const Component = route.component;
            return (
              <Route exact={route.exact} path={route.path} key={route.id}>
                {Component}
              </Route>
            );
          })}
        </Switch>
      </Layout>
    </BrowserRouter>
  </Provider>
);

export default App;
