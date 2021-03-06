import { realRegisterCdoe, realRegisterSubmit } from '../services/api';
import { setAuthority } from '../utils/authority';
import { reloadAuthorized } from '../utils/Authorized';
import { notification } from 'antd'
import { routerRedux } from 'dva/router';

export default {
  namespace: 'register',

  state: {},

  effects: {
    *submit({payload, callback}, { call, put }) {
      const response = yield call(realRegisterSubmit,payload);
      if (response === undefined) {

      } else {
        const msg = response.msg;
        if (response.type ==="0") {
          callback(response);
        }else {
          notification.success({
            message: "提示",
            description: msg,
          });
          yield put(routerRedux.push('/user/login'));
        }
      }
    },
    *getCode({payload, callback},{call}) {
      const response = yield call(realRegisterCdoe, payload);
      if (response === undefined) {

      } else {
        callback(response);
      }
    }
  },

  reducers: {
  },
};
