import React, { useEffect, useState } from 'react';
import { Link, useLocation, matchPath } from 'react-router-dom';
import find from 'lodash/find';
import Layout from 'antd/es/layout';
import Menu from 'antd/es/menu';
import PlusCircleOutlined from '@ant-design/icons/PlusCircleOutlined';
import HomeOutlined from '@ant-design/icons/HomeOutlined';

import routes from '../../../routes';
import styles from './SideBar.module.css';

const { Sider } = Layout;
const SideBar = () => {
  const [activeMenu, setActiveMenu] = useState(routes.HOME.id);
  const menuSelectHandler = (event) => {
    // eslint-disable-next-line no-console
    console.log(event);
  };
  const location = useLocation();

  useEffect(() => {
    const matchRoute = find(Object.values(routes), (route) => {
      const match = matchPath(location.pathname, {
        path: route.path,
        exact: true,
        strict: true,
      });
      return match;
    });
    if (matchRoute) {
      setActiveMenu(matchRoute.id);
    }
  }, [location]);

  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <div className={styles.logo} />
      <Menu theme="dark" mode="inline" selectedKeys={[activeMenu]} onSelect={menuSelectHandler}>
        <Menu.Item key={routes.HOME.id} icon={<HomeOutlined />}>
          <Link to={routes.HOME.path}>Main</Link>
        </Menu.Item>
        <Menu.Item key={routes.TEST_NEW.id} icon={<PlusCircleOutlined />}>
          <Link to={routes.TEST_NEW.path}>New Test</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SideBar;
