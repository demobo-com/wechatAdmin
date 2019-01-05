/**
 *
 * AdminPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Table, Tag } from 'antd';
import request from 'utils/request';

import './styles.scss';

const columns = [{
  title: 'UserName',
  dataIndex: 'userName',
  key: 'userName',
  onFilter: (value, record) => record.userName.indexOf(value) === 0,
  sorter: (a, b) => a.userName.length - b.userName.length,
}, {
  title: 'Bet',
  dataIndex: 'bet',
  key: 'bet',
}, {
  title: 'Winning',
  dataIndex: 'winning',
  key: 'winning',
}, {
  title: 'Collected',
  dataIndex: 'collected',
  key: 'collected',
}, {
  title: 'Paid',
  dataIndex: 'paid',
  key: 'paid',
}, {
  title: 'Balance',
  key: 'balance',
  dataIndex: 'balance',
  render: (balance) => {
    const color = balance < 0 ? 'red' : 'green';
    return (<span>
      <Tag color={color}>{balance}</Tag>
    </span>);
  },
}];

export class AdminPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    const requestURL = '/balances';
    request(requestURL).then((data) => {
      const newData = data.map((d) => ({
        ...d,
        balance: (d.winning + d.paid) - d.bet - d.collected,
      }));
      this.setState({ data: newData });
    });
  }

  render() {
    return (
      <div className="admin_page">
        <Table columns={columns} dataSource={this.state.data} />
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
