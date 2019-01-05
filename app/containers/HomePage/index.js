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
import { Switch, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import DrawerMenu from 'rc-drawer-menu';
import pathToRegexp from 'path-to-regexp';
import {
  Layout,
  // message,
  Menu,
  Icon,
  Spin,
  // Tag,
  Dropdown,
  Avatar,
  // Divider,
} from 'antd';

// import 'rc-drawer-menu/assets/index.css';
// Utils
import auth from 'utils/auth';
import {
  STRAPI_BASE,
  USER_MENU_DATA,
} from 'utils/constants';
import openSocket from 'socket.io-client';

import NotFoundPage from 'containers/NotFoundPage/Loadable';
import LandingPage from 'containers/LandingPage/Loadable';
import DetailPage from 'containers/DetailPage/Loadable';
import AdminPage from 'containers/AdminPage/Loadable';
import avatarImage from 'assets/avatar.png';

import './styles.scss';

const { Content, Header, Sider } = Layout;
const { SubMenu } = Menu;

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      user: null,
      nextPath: '',
      openKeys: ['user'],
      selectedKeys: ['home'],
      collapsed: false,
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

  logout = () => { // eslint-disable-line
    const { history } = this.props;
    auth.clearAppStorage();
    this.setState({ loggedIn: false });
    history.replace('/auth/login');
  }
  onMenuClick = ({ key }) => { // eslint-disable-line
    if (key === 'logout') {
      this.logout();
    }
  }

  isMainMenu = (key) => { // eslint-disable-line
    const { user } = this.state;
    const menuData = USER_MENU_DATA.filter((item) => item.authority === user.role.name);
    return menuData.some((item) => key && (item.key === key || item.path === key));
  }
  handleOpenChange = (openKeys) => { // eslint-disable-line
    const lastOpenKey = openKeys[openKeys.length - 1];
    const moreThanOne = openKeys.filter((openKey) => this.isMainMenu(openKey)).length > 1;

    this.setState({
      openKeys: moreThanOne ? [lastOpenKey] : [...openKeys],
    });
  };

  urlToList = (url) => { // eslint-disable-line
    const urllist = url.split('/').filter((i) => i);
    return urllist.map((urlItem, index) => `/${urllist.slice(0, index + 1).join('/')}`);
  }
  getMeunMatchKeys = (flatMenuKeys, paths) => paths // eslint-disable-line
    .reduce((matchKeys, path) => (
      matchKeys.concat(
        flatMenuKeys.filter((item) => pathToRegexp(item).test(path))
    )), [])
  getSelectedMenuKeys = () => { // eslint-disable-line
    const { location: { pathname } } = this.props;
    return this.getMeunMatchKeys(this.flatMenuKeys, this.urlToList(pathname));
  };
  getFlatChildrenKeys = (parentPath, childrenMenu) => childrenMenu // eslint-disable-line
    .reduce((keys, item) => {
      keys.push(`${parentPath}/${item.path}`);
      return keys;
    }, [])
  getFlatMenuKeys = (menu) => menu // eslint-disable-line
    .reduce((keys, item) => {
      const itemPath = `/${item.path}`;
      keys.push(itemPath);
      if (item.children) {
        return keys.concat(this.getFlatChildrenKeys(itemPath, item.children));
      }
      return keys;
    }, [])

  renderSiderMenu = () => { // eslint-disable-line
    const { history } = this.props;
    const { user, collapsed, openKeys } = this.state;
    if (!user) return null;
    const menuData = USER_MENU_DATA.filter((item) => item.authority === user.role.name);
    this.flatMenuKeys = this.getFlatMenuKeys(menuData);
    let selectedKeys = this.getSelectedMenuKeys();
    selectedKeys = selectedKeys[selectedKeys.length - 1].split('/').slice(1);
    if (!selectedKeys.length) {
      selectedKeys = [openKeys[openKeys.length - 1]];
    }
    const menuProps = collapsed
      ? {}
      : {
        openKeys,
      };
    return (
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        breakpoint="lg"
        // onCollapse
        width={256}
        className="sider"
      >
        <div className="logo" key="logo">
          <Link to="/user/home" className="logo_line">
            <img src={avatarImage} alt="logo" className="logo_image" />
            <h1>新项目</h1>
          </Link>
        </div>
        <Menu
          key="Menu"
          theme="dark"
          mode="inline"
          {...menuProps}
          onOpenChange={this.handleOpenChange}
          onClick={(e) => {
            let nextPath = '';
            e.keyPath.reverse().forEach((item) => {
              nextPath = `${nextPath}/${item}`;
            });
            history.push(nextPath, { params: { user } });
            this.setState({
              selectedKeys: [e.key],
              nextPath,
            });
          }}
          selectedKeys={selectedKeys}
          style={{ padding: '16px 0', width: '100%' }}
        >
          {menuData.map((menuDataItem) => (
            <SubMenu
              key={menuDataItem.path}
              title={
                <span>
                  <Icon type="home" />
                  <span>{menuDataItem.name}</span>
                </span>
              }
            >
              {menuDataItem.children.map((menuItem) =>
                <Menu.Item key={menuItem.path}>{menuItem.name}</Menu.Item>
              )}
            </SubMenu>
          ))
        }
        </Menu>
      </Sider>
    );
  }
  renderHeader = () => { // eslint-disable-line
    const { user, collapsed } = this.state;

    const menu = (
      <Menu className="menu" selectedKeys={[]} onClick={this.onMenuClick}>
        <Menu.Item disabled>
          <Icon type="user" />个人中心
        </Menu.Item>
        <Menu.Item disabled>
          <Icon type="setting" />设置
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="logout">
          <Icon type="logout" />退出登录
        </Menu.Item>
      </Menu>
    );
    return (
      <div className="header">
        <Icon
          className="trigger"
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.toggle}
        />
        <div className="right">
          {user ? (
            <Dropdown overlay={menu}>
              <span className="avatar_line">
                <Avatar size="small" className="avatar" src={avatarImage} />
                <span className="name">{user.weChatName}</span>
              </span>
            </Dropdown>
          ) : (
            <Spin size="small" style={{ marginLeft: 8 }} />
          )}
        </div>
      </div>
    );
  }
  toggle = () => { // eslint-disable-line
    const { collapsed } = this.state;
    this.setState({ collapsed: !collapsed });
  }

  render() {
    return (
      <Layout className="home_page">
        { this.renderSiderMenu() }
        <Layout className="basic_layout">
          <Header style={{ padding: 0 }}>
            { this.renderHeader() }
          </Header>
          <Content className="basic_content">
            <Switch>
              <Route exact path="/user/home" component={LandingPage} />
              <Route path="/user/activities" component={DetailPage} />
              <Route path="/user/balances" component={AdminPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

HomePage.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};
