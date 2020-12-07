import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import filter from 'lodash/filter';
import intersection from 'lodash/intersection';

import Tag from 'antd/es/tag';
import Table from 'antd/es/table';
import Select from 'antd/es/select';

import styles from './Suites.module.css';
import suites from './__Mocks__/dataSource';
import { getAllLabels } from './utils';

const Suites = () => {
  const [displayableSuites, setDisplayableSuites] = useState(suites);

  const labelSelectHandler = (label) => {
    const filteredSuites = filter(suites, (suite) => {
      const { labels } = suite;
      return intersection(labels, label).length > 0;
    });
    if (filteredSuites.length > 0) {
      setDisplayableSuites(filteredSuites);
    } else {
      setDisplayableSuites(suites);
    }
  };

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
      title: 'Labels',
      dataIndex: 'labels',
      key: 'labels',
      filtered: true,
      render: (labels = []) => labels.map((lab) => <Tag color="blue">{lab}</Tag>),
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

  return (
    <>
      <Select
        autoFocus
        allowClear
        mode="tags"
        className={styles.select}
        placeholder="Select label/labels"
        options={getAllLabels(suites)}
        onChange={labelSelectHandler}
      />
      <Table dataSource={displayableSuites} columns={columns} />
    </>
  );
};

export default Suites;
