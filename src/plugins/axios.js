/*
 * @Author: luoyang 
 * @Date: 2019-06-28 09:59:48 
 * @Last Modified by: luoyang
 * @Last Modified time: 2019-07-07 16:13:22
 */
"use strict";

import Vue from 'vue';
import axios from "axios";
import { Notify } from 'vant';

let config = {
  baseURL: "http://localhost:8080",
  timeout: 60 * 1000,
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

_axios.interceptors.response.use(
  response => {
    if (response.data.code === 0) {
      return response.data.data
    } else {
      Notify(response.data.msg)
    }
  },
  error => {
    const status = error.response.status
    switch (status) {
      case 400:
        window.console.log("请求参数错误")
        break;
      default:
        window.console.log(status)
        break;
    }
    const message = error.response.data.msg || "未知错误"
    Notify(message)
  }
);

Plugin.install = function(Vue) {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      }
    },
    $axios: {
      get() {
        return _axios;
      }
    },
  });
};

Vue.use(Plugin)

export default Plugin;
