import React from 'react';
import { Link } from 'react-router-dom';

import Tag from 'antd/es/tag';
import Table from 'antd/es/table';

import dataSource from './__Mocks__/dataSource';

const Suites = () => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text, data) => (
        <Link to={`/suite/${data.key}`}>
          <b>{text}</b>
        </Link>
      ),
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      dataIndex: 'status',
      key: 'status',
      render: (data) => {
        const { passing, failing, unknown } = data;
        return (
          <>
            <Tag color="green">
              {passing}
              {' '}
              Passing
            </Tag>
            <Tag color="red">
              {failing}
              {' '}
              Failing
            </Tag>
            <Tag color="grey">
              {unknown}
              {' '}
              Unknown
            </Tag>
          </>
        );
      },
    },
  ];
  return <Table dataSource={dataSource} columns={columns} />;
};

export default Suites;
