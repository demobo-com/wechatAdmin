/*
 *
 * AuthPage constants
 *
 */
 import React from 'react';
 import {
   Icon,
 } from 'antd';

 export const ON_CHANGE = 'app/AuthPage/ON_CHANGE';
 export const SET_FORM = 'app/AuthPage/SET_FORM';
 export const SUBMIT = 'app/AuthPage/SUBMIT';

 export const FORM_ITEMS = {
   identifier: {
     props: {
       size: 'large',
       prefix: <Icon type="user" />,
       placeholder: '用户名',
     },
     rules: [
       {
         required: true,
         message: '请输入用户名',
       },
     ],
   },
   userName: {
     props: {
       size: 'large',
       prefix: <Icon type="user" />,
       placeholder: '用户名',
     },
     rules: [
       {
         required: true,
         message: '请输入用户名',
       },
     ],
   },
   password: {
     props: {
       size: 'large',
       prefix: <Icon type="lock" />,
       type: 'password',
       placeholder: '密码',
     },
     rules: [
       {
         required: true,
         message: '请输入密码',
       },
     ],
   },
   confirmPassword: {
     props: {
       size: 'large',
       prefix: <Icon type="lock" />,
       type: 'password',
       placeholder: '确认密码',
     },
     rules: [
       {
         required: true,
         message: '请输入密码',
       },
     ],
   },
   email: {
     props: {
       size: 'large',
       prefix: <Icon type="mail" />,
       type: 'email',
       placeholder: 'johndoe@gmail.com',
     },
     rules: [
       {
         required: true,
         message: '请输入邮箱',
       },
     ],
   },
 };
