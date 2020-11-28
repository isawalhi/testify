import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "antd/dist/antd.css";
import Layout from "antd/es/layout";

import styles from "./App.module.css";

import routes from "./routes";
import Header from "./layout/components/Header";
import SideBar from "./layout/components/SideBar";

const { Content } = Layout;

const App = () => (
  <Layout className={styles.layout}>
    <SideBar />
    <Layout>
      <Header />
      <Content className={styles.content}>
        <BrowserRouter>
          <Switch>
            {Object.keys(routes).map((routeKey) => {
              const route = routes[routeKey];
              return (
                <Route exact path={route.path}>
                  {route.component()}
                </Route>
              );
            })}
          </Switch>
        </BrowserRouter>
      </Content>
    </Layout>
  </Layout>
);

export default App;
