/**
 *
 * DetailPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Table, Tag } from 'antd';

// import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import request from 'utils/request';

// import messages from './messages';
import './styles.scss';

const columns = [{
  title: 'UserName',
  dataIndex: 'userName',
  key: 'userName',
  onFilter: (value, record) => record.userName.indexOf(value) === 0,
  sorter: (a, b) => a.userName.length - b.userName.length,
}, {
  title: 'Game',
  dataIndex: 'game',
  key: 'game',
}, {
  title: 'DrawDate',
  dataIndex: 'drawDate',
  key: 'drawDate',
}, {
  title: 'Amount',
  dataIndex: 'amount',
  key: 'amount',
}, {
  title: 'Winning',
  dataIndex: 'winning',
  key: 'winning',
}, {
  title: 'Bet',
  key: 'bet',
  dataIndex: 'bet',
  render: (bet) => (
    <span>
      {Object.values(bet).map((number) => <Tag color="blue" key={number}>{number}</Tag>)}
    </span>
  ),
}];

export class DetailPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    const requestURL = '/bets';
    request(requestURL).then((data) => {
      console.log(data);
      this.setState({ data });
    });
  }

  render() {
    return (
      <div className="detail_page">
        <Table columns={columns} dataSource={this.state.data} />
      </div>
    );
  }
}


DetailPage.propTypes = {
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
)(DetailPage);
