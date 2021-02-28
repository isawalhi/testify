import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import filter from 'lodash/filter';
import uniqueId from 'lodash/uniqueId';
import capitalize from 'lodash/capitalize';
import intersection from 'lodash/intersection';

import Tag from 'antd/es/tag';
import Table from 'antd/es/table';
import Select from 'antd/es/select';

import { getAllLabels } from '../utils';
import { getAllSuites } from '../actions';
import { selector as suiteSelector } from '../reducer';

import { STATUSES } from '../../common/constants';

import styles from './Suites.module.css';

const Suites = () => {
  const dispatch = useDispatch();
  const { all: suites, loading } = useSelector(suiteSelector);
  const [displayableSuites, setDisplayableSuites] = useState(undefined);

  useEffect(() => {
    if (suites?.length <= 0) {
      dispatch(getAllSuites());
    }
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
          <b>{capitalize(text)}</b>
        </Link>
      ),
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      responsive: ['md'],
    },
    {
      title: 'Labels',
      dataIndex: 'labels',
      key: 'labels',
      filtered: true,
      responsive: ['md'],
      render: (labels = []) => labels.map((lab) => (
        <Tag key={uniqueId(lab)} color="blue">
          {lab}
        </Tag>
      )),
    },
    {
      dataIndex: 'status',
      key: 'status',
      width: 300,
      render: (data) => {
        const { passed, failed, unknown } = STATUSES;
        return (
          <>
            <Tag color={passed.color}>
              {data.passing}
              {' '}
              {passed.value}
            </Tag>
            <Tag color={failed.color}>
              {data.failing}
              {' '}
              {failed.value}
            </Tag>
            <Tag color={unknown.color}>
              {data.unknown}
              {' '}
              {unknown.value}
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
