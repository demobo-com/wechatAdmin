/**
 *
 * AdminPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import './styles.scss';

export class AdminPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="admin_page">
        Admin
      </div>
    );
  }
}

AdminPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(
  withConnect,
)(AdminPage);
