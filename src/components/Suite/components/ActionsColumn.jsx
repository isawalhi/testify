import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from 'antd/es/button';
import EditOutlined from '@ant-design/icons/EditOutlined';
import SettingOutlined from '@ant-design/icons/SettingOutlined';
import PlayCircleOutlined from '@ant-design/icons/PlayCircleOutlined';

const playClickHandler = (testKey) => {
  // eslint-disable-next-line no-console
  console.log('playClickHandler', testKey);
};

const ActionsColumn = ({ testKey }) => (
  <>
    <Button
      type="link"
      shape="circle"
      icon={<PlayCircleOutlined />}
      onClick={() => playClickHandler(testKey)}
    />
    <Link to={`/test/${testKey}/settings`}>
      <Button type="link" shape="circle" icon={<SettingOutlined />} />
    </Link>
    <Link to={`/test/${testKey}/edit`}>
      <Button type="link" shape="circle" icon={<EditOutlined />} />
    </Link>
  </>
);

ActionsColumn.propTypes = {
  testKey: PropTypes.string.isRequired,
};

export default ActionsColumn;
