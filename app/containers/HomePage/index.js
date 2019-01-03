/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Link } from 'react-router-dom';

// Design
import Button from 'components/Button';

// Utils
import auth from 'utils/auth';
import {
  STRAPI_BASE,
} from 'utils/constants';
import openSocket from 'socket.io-client';

import './styles.scss';

export default class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    loggedIn: false,
    user: {},
  }

  componentDidMount() {
    const token = auth.getToken();
    if (token) {
      console.log(auth);
      let user = auth.getUserInfo();
      this.setState({ loggedIn: true, user });
      this.socket = openSocket(STRAPI_BASE, {
        query: { token },
      });
      this.socket.on('connect', (d) => console.log('socket connected'));
      this.socket.on(`users/${user.id}`, (newUser) => {
        console.log('updated', newUser);
        user = { ...user, ...newUser };
        auth.setUserInfo(user);
        this.setState({ user });
      });
    }
  }

  logout = (e) => {
    e.preventDefault();
    auth.clearAppStorage();
    this.setState({ loggedIn: false });
  }

  render() {
    const { qrcode, username, id, weChatName, state } = this.state.user;
    const qrcodeImageSrc = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrcode)}`;
    return (
      <div className="container">
        <div>
          {
            this.state.loggedIn && (
              <div>
                <Button primary onClick={this.logout} type="button">Logout</Button>
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
            )
          }
          {
            !this.state.loggedIn && (
            <div>
              <p>
                <Link to={`/${Math.random}`}>Login</Link>
              </p>
            </div>
            )
          }
        </div>
      </div>
    );
  }
}
