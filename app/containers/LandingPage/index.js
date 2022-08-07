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
// import openSocket from 'socket.io-client';
import QRCode from 'qrcode';
import _ from 'lodash';

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
import './styles.scss';

export class LandingPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      nextPath: '',
      selectedKeys: ['home'],
      qrCodeUrl: '',
      data: {},
    };
    const base = [
      { key: 0, weight: 9 }, { key: 1, weight: 9 },
      { key: 2, weight: 6 }, { key: 3, weight: 7 },
      { key: 4, weight: 8 }, { key: 5, weight: 9 },
      { key: 6, weight: 8 }, { key: 7, weight: 7 },
      { key: 8, weight: 6 }, { key: 9, weight: 9 },
    ];
    this.onKeyEvent = (k) => {
      // console.log(k.key, this.state.data);
      let data = [];
      if (Number(k.key) >= 0) {
        data = _.cloneDeep(this.state.data);
        data[Number(k.key)] = { count: _.get(data, `${k.key}.count`, 0) + 1, key: Number(k.key), weight: _.get(base, `${k.key}.weight`, 0) };
        this.setState({ data });
      } else if (k.key === '*') {
        data = [];
        this.setState({ data });
      }
      const ress = _.sortBy(this.state.data, ['count', 'weight']).reverse();
      const res = ress.map((r) => r.key);
      this.setState({ res });
    };
  }
  componentWillMount() {
    const token = auth.getToken();
    if (token) {
      const user = auth.getUserInfo();
      this.setState({ loggedIn: true, user });
      document.addEventListener('keydown', this.onKeyEvent);
      // this.socket = openSocket(STRAPI_BASE, {
      //   query: { token },
      // });
      // this.socket.on('connect', (d) => console.log('socket connected', d));
      // this.socket.on(`users/${user.id}`, (newUser) => {
      //   user = { ...user, ...newUser };
      //   auth.setUserInfo(user);
      //   this.setState({ user });
      //   if (user.qrcode) {
      //     QRCode.toDataURL(user.qrcode)
      //     .then((qrCodeUrl) => {
      //       if (qrCodeUrl) this.setState({ qrCodeUrl });
      //     });
      //   }
      // });
      if (user.qrcode) {
        QRCode.toDataURL(user.qrcode)
        .then((qrCodeUrl) => {
          if (qrCodeUrl) this.setState({ qrCodeUrl });
        });
      }
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyEvent);
  }

  render() {
    const { qrcode, username, id, weChatName, state } = this.state.user;
    // const qrcodeImageSrc = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrcode)}`;
    const qrcodeImageSrc = this.state.qrCodeUrl;
    return (
      <div className="landing_page">
        <div>
          <p>{JSON.stringify(this.state.res)}</p>
        </div>
        <div>
          <img src={qrcodeImageSrc} alt="" />
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
