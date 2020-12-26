import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

import uniqueId from 'lodash/uniqueId';
import capitalize from 'lodash/capitalize';

import Tag from 'antd/es/tag';
import Table from 'antd/es/table';
import PageHeader from 'antd/es/page-header';

import ChromeFilled from '@ant-design/icons/ChromeFilled';
import CameraFilled from '@ant-design/icons/CameraFilled';

import { getSuite } from '../actions';
import { suiteSelector } from '../reducer';
import ActionsColumn from './ActionsColumn';
import { STATUSES } from '../../common/constants';

import styles from './Suite.module.scss';

const filters = [
  {
    text: 'Passed',
    value: 'passed',
  },
  {
    text: 'Failed',
    value: 'failed',
  },
  {
    text: 'Unknown',
    value: 'unknown',
  },
];

const Suite = () => {
  const dispatch = useDispatch();
  const { id: suiteId } = useParams();
  const { loading, [suiteId]: selectedSuite } = useSelector(suiteSelector);

  const {
    name, description, tests, labels: suiteLabels,
  } = selectedSuite || {};

  useEffect(() => {
    if (!selectedSuite) {
      dispatch(getSuite(suiteId));
    }
  }, [suiteId, dispatch, selectedSuite]);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      width: 400,
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
      width: 300,
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
      filters,
      onFilter: (value, record) => record.status.indexOf(value) === 0,
      width: 100,
      render: (status) => (
        <div className={styles.statusesIcons}>
          <ChromeFilled style={{ color: `${STATUSES[status]?.color}` }} />
        </div>
      ),
      align: 'center',
    },
    {
      title: 'Screenshot',
      dataIndex: 'screenshot',
      key: 'screenshot',
      filters,
      onFilter: (value, record) => record.screenshot.indexOf(value) === 0,
      width: 100,
      render: (_status, data) => (
        <div className={styles.statusesIcons}>
          <CameraFilled style={{ color: `${STATUSES[data.screenshot]?.color}` }} />
        </div>
      ),
      align: 'center',
    },
    {
      title: 'Actions',
      key: 'actions',
      align: 'center',
      render: (data) => <ActionsColumn testKey={data.key} />,
    },
  ];

  return (
    <>
      {!loading && (
        <PageHeader
          title={capitalize(name)}
          subTitle={description}
          tags={suiteLabels?.map((label) => (
            <Tag>{label}</Tag>
          ))}
        />
      )}
      <Table loading={loading} dataSource={tests} columns={columns} />
    </>
  );
};

export default Suite;
