import React from 'react';
import PropTypes from 'prop-types';
// import PageHeader from 'antd/es/page-header';
import { StartUrl } from './Step';

const Test = ({ type }) => (type === 'view' ? (
  <div>View Test</div>
) : (
  <>
    <StartUrl />
  </>
));

Test.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Test;
