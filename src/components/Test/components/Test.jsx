import React from 'react';
import PropTypes from 'prop-types';
import Step from './Step';

import { MODES } from '../../../constants';

const Test = ({ mode }) => {
  switch (mode) {
    case MODES.VIEW:
      return <div>View Test</div>;
    case MODES.EDIT:
      return <Step>Edit Test</Step>;
    case MODES.NEW:
    default:
      return <div>New Test</div>;
  }
};

Test.propTypes = {
  mode: PropTypes.string.isRequired,
};

export default Test;
