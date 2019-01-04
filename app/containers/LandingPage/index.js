/**
 *
 * LandingPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import openSocket from 'socket.io-client';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import auth from 'utils/auth';
import {
  STRAPI_BASE,
} from 'utils/constants';

import makeSelectLandingPage from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';

export class LandingPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      nextPath: '',
      selectedKeys: ['home'],
    };
  }
  componentWillMount() {
    const token = auth.getToken();
    if (token) {
      let user = auth.getUserInfo();
      this.setState({ loggedIn: true, user });
      this.socket = openSocket(STRAPI_BASE, {
        query: { token },
      });
      this.socket.on('connect', (d) => console.log('socket connected', d));
      this.socket.on(`users/${user.id}`, (newUser) => {
        user = { ...user, ...newUser };
        auth.setUserInfo(user);
        this.setState({ user });
      });
    }
  }

  render() {
    const { qrcode, username, id, weChatName, state } = this.state.user;
    const qrcodeImageSrc = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrcode)}`;

    return (
      <div>
        <div>
          <p>{username}</p>
          <p>{id}</p>
          <p>{weChatName}</p>
          <p>{state}</p>
        </div>
        <div>
          <img src={qrcodeImageSrc} alt="" />
        </div>
        <div>
          {qrcode}
        </div>
      </div>
    );
  }
}

LandingPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  landingpage: makeSelectLandingPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'landingPage', reducer });
const withSaga = injectSaga({ key: 'landingPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(LandingPage);
