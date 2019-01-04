/**
 *
 * AuthPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { replace } from 'lodash';
import { Link } from 'react-router-dom';
import {
  Checkbox,
  // Icon,
  Button,
  Form,
  Input,
} from 'antd';

// import Button from 'components/Button';
// import Input from 'components/Input';
import Logo from 'images/logo_strapi.png';

// Utils
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import { onChange, setForm, submit } from './actions';
// import form from './form.json';
import makeSelectAuthPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import { FORM_ITEMS } from './constants';
import './styles.scss';

const FormItem = Form.Item;

export class AuthPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      currentChecked: false,
    };
  }

  componentDidMount() {
    this.setForm(this.props);
  }

  componentWillUpdate(nextProps) {
    // Update the form depending on the URL's params
    if (nextProps.match.params.authType !== this.props.match.params.authType) {
      this.setForm(nextProps);
    }
  }

  /**
   * Create the form depending on the URL
   * @param {Object} props
   */
  setForm = (props) => {
    const params = props.location.search ? replace(props.location.search, '?code=', '') : props.match.params.id;
    this.props.setForm(props.match.params.authType, params);
  }

  renderFormItem = (name) => ( // eslint-disable-line
    <FormItem
      {...FORM_ITEMS[name].rules}
    >
      <Input
        size="large"
        name={name}
        onChange={this.props.onChange}
        {...FORM_ITEMS[name].props}
      />
    </FormItem>
    )
  renderUserHelper = () => { // eslint-disable-line
    const { currentChecked } = this.state;
    return (
      <div>
        <Checkbox
          checked={currentChecked}
          onChange={({ target }) => {
            const rememberMe = target.checked;
            this.setState({ currentChecked: rememberMe });
            this.props.onChange({ target: { name: 'rememberMe', value: rememberMe } });
          }}
        >
        Automatic Login
      </Checkbox>
        <Link style={{ float: 'right' }} to="/auth/forgot-password">
          Forgot Password
      </Link>
      </div>
    );
  }
  renderOtherLoginMethod = () => ( // eslint-disable-line
    <div className="other">
      {/* // TODO: 不确认第三方登录情况 */}
      {/* 其他登录方式
      <Icon className="icon" type="alipay-circle" onClick={() => this.renderModalPrompt('第三方登录')} />
      <Icon className="icon" type="taobao-circle" onClick={() => this.renderModalPrompt('第三方登录')} />
      <Icon className="icon" type="weibo-circle" onClick={() => this.renderModalPrompt('第三方登录')} /> */}
      <Link className="register" to="/auth/register">
          Register
      </Link>
    </div>
  )
  renderLoginForm = () => ( // eslint-disable-line
    <Form
      className="login_form"
      onSubmit={(e) => {
        e.preventDefault();
        this.props.submit();
      }}
    >
      { this.renderFormItem('identifier') }
      { this.renderFormItem('password') }
      { this.renderUserHelper() }
      <FormItem>
        <Button
          size="large"
          type="primary"
          htmlType="submit"
          className="submit"
        >Login</Button>
      </FormItem>

      { this.renderOtherLoginMethod() }
    </Form>
  )
  renderForgotPasswordForm = () => ( // eslint-disable-line
    <Form
      className="login_form"
      onSubmit={(e) => {
        e.preventDefault();
        this.props.submit();
      }}
    >
      { this.renderFormItem('email') }
      <FormItem>
        <Button
          size="large"
          type="primary"
          htmlType="submit"
          className="submit"
        >Submit</Button>
      </FormItem>
    </Form>
    )
  renderRegisterForm = () => ( // eslint-disable-line
    <Form
      className="login_form"
      onSubmit={(e) => {
        e.preventDefault();
        this.props.submit();
      }}
    >
      { this.renderFormItem('userName') }
      { this.renderFormItem('password') }
      { this.renderFormItem('confirmPassword') }
      { this.renderFormItem('email') }
      <FormItem>
        <Button
          size="large"
          type="primary"
          htmlType="submit"
          className="register_submit"
        >Submit</Button>
        <Link className="login" to="/auth/login">
              使用已有账户登录
        </Link>
      </FormItem>
    </Form>
    )
  renderLoginContent = (formType) => { // eslint-disable-line
    switch (formType) {
      case 'login':
        return this.renderLoginForm();
      case 'forgot-password':
        return this.renderForgotPasswordForm();
      case 'register':
        return this.renderRegisterForm();
      default:
        return this.renderLoginForm();
    }
  }

  render() {
    // const divStyle = this.props.match.params.authType === 'register' ? { marginTop: '3.2rem' } : { marginTop: '.9rem' };
    // const providers = ['discord', 'facebook', 'github', 'google', 'microsoft', 'twitch', 'twitter']; // To remove a provider from the list just delete it from this array...
    const { formType } = this.props;
    // const login = {};
    return (
      <div className="auth_page">
        <div className="header_container">
          {formType === 'register' ? (
            <h1>Welcome !</h1>
            ) : (
              <div className="header_image_content">
                <img src={Logo} alt="logo" className="header_image" />
              </div>
            )}
          {formType === 'register' ? (
            <p>Please register to access the app.</p>
            ) : ''}
        </div>
        {/* {
              (login.status === 'error' &&
              login.type === 'account' &&
              !login.submitting) &&
                  this.renderMessage('账户或密码错误')
            } */}
        { this.renderLoginContent(formType) }
      </div>
    );
  }
}

AuthPage.propTypes = {
  formType: PropTypes.string.isRequired,
  // history: PropTypes.object.isRequired,
  // location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  setForm: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
};

const mapStateToProps = makeSelectAuthPage();

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      onChange,
      setForm,
      submit,
    },
    dispatch
  );
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'authPage', reducer });
const withSaga = injectSaga({ key: 'authPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(AuthPage);
