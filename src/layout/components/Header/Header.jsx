import React from 'react';
import Avatar from 'antd/es/avatar';
import PageHeader from 'antd/es/page-header';
import UserOutlined from '@ant-design/icons/UserOutlined';

import styles from './Header.module.css';

const Header = () => (
  <PageHeader
    title="Testify"
    className={styles.pageHeader}
    extra={<Avatar icon={<UserOutlined />} />}
  />
);

export default Header;
