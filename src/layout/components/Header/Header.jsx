import React from 'react';
import PageHeader from 'antd/es/page-header';
import Avatar from 'antd/es/avatar';
import UserOutlined from '@ant-design/icons/UserOutlined';

const Header = () => (
  <PageHeader
    style={{ background: '#fff' }}
    title='Testify'
    extra={<Avatar icon={<UserOutlined />} />}
  />
);

export default Header;
