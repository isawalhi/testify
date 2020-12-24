import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import filter from 'lodash/filter';
import startCase from 'lodash/startCase';
import intersection from 'lodash/intersection';

import Tag from 'antd/es/tag';
import Table from 'antd/es/table';
import Select from 'antd/es/select';

import { getAllLabels } from '../utils';
import { getAllSuites } from '../actions';
import { selector as suiteSelector } from '../reducer';

import styles from './Suites.module.css';

const Suites = () => {
  const dispatch = useDispatch();
  const { all: suites, loading } = useSelector(suiteSelector);
  const [displayableSuites, setDisplayableSuites] = useState(undefined);

  useEffect(() => {
    if (suites?.length <= 0) { dispatch(getAllSuites()); }
  }, [suites, dispatch]);

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
      width: 200,
      key: 'name',
      render: (text, data) => (
        <Link to={`/suite/${data.id}`}>
          <b>{startCase(text)}</b>
        </Link>
      ),
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      width: 360,
    },
    {
      title: 'Labels',
      dataIndex: 'labels',
      key: 'labels',
      filtered: true,
      width: 240,
      render: (labels = []) => labels.map((lab) => <Tag color="blue">{lab}</Tag>),
    },
    {
      dataIndex: 'status',
      key: 'status',
      width: 300,
      fixed: true,
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
      <Table loading={loading} dataSource={displayableSuites || suites} columns={columns} />
    </>
  );
};

export default Suites;
