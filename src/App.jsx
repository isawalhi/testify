import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import 'antd/dist/antd.css';
import Layout from 'antd/es/layout';

import styles from './App.module.css';

import routes from './routes';
import Header from './layout/components/Header';
import SideBar from './layout/components/SideBar';

const { Content } = Layout;

const App = () => (
  <BrowserRouter>
    <Layout className={styles.layout}>
      <SideBar />
      <Layout>
        <Header />
        <Content className={styles.content}>
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
        </Content>
      </Layout>
    </Layout>
  </BrowserRouter>
);

export default App;
