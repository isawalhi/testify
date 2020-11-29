import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import Avatar from 'antd/es/avatar';
import PageHeader from 'antd/es/page-header';
import UserOutlined from '@ant-design/icons/UserOutlined';

import styles from './Header.module.css';

const Header = () => {
  const history = useHistory();

  const onBackHandler = useCallback(() => {
    history.goBack();
  }, [history]);

  return (
    <PageHeader
      title="Testify"
      onBack={onBackHandler}
      className={styles.pageHeader}
      extra={<Avatar icon={<UserOutlined />} />}
    />
  );
};

export default Header;
