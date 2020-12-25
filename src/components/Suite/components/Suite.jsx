import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

import uniqueId from 'lodash/uniqueId';
import capitalize from 'lodash/capitalize';

import Tag from 'antd/es/tag';
import Table from 'antd/es/table';
import PageHeader from 'antd/es/page-header';

import { getSuite } from '../actions';
import { suiteSelector } from '../reducer';

const Suite = () => {
  const dispatch = useDispatch();
  const { id: suiteId } = useParams();
  const {
    name, description, tests, labels: suiteLabels,
  } = useSelector(suiteSelector);

  useEffect(() => {
    dispatch(getSuite(suiteId));
  }, [suiteId, dispatch]);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      width: 200,
      key: 'name',
      render: (text, data) => (
        <Link to={`/test/${data.id}`}>
          <b>{capitalize(text)}</b>
        </Link>
      ),
    },
    {
      title: 'Labels',
      dataIndex: 'labels',
      key: 'labels',
      filtered: true,
      width: 240,
      render: (labels = []) => labels.map((lab) => (
        <Tag key={uniqueId(lab)} color="blue">
          {lab}
        </Tag>
      )),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      width: 300,
      render: (status) => {
        let color;
        switch (status) {
          case 'passed':
            color = 'green';
            break;
          case 'failed':
            color = 'red';
            break;
          default:
            color = 'grey';
        }
        return <Tag color={color}>{status}</Tag>;
      },
    },
  ];

  return (
    <>
      <PageHeader
        title={capitalize(name)}
        subTitle={description}
        tags={suiteLabels?.map((label) => (
          <Tag>{label}</Tag>
        ))}
      />
      <Table dataSource={tests} columns={columns} />
    </>
  );
};

export default Suite;
