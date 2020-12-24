import React from 'react';
import PropTypes from 'prop-types';

import AntdLayout from 'antd/es/layout';

import Header from './Header';
import SideBar from './SideBar';

import styles from './Layout.module.css';

const { Content } = AntdLayout;

const Layout = ({ children }) => (
  <AntdLayout className={styles.layout}>
    <SideBar />
    <AntdLayout>
      <Header />
      <Content className={styles.content}>{children}</Content>
    </AntdLayout>
  </AntdLayout>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
