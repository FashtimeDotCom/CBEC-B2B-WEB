import { stringify } from 'qs';
import request from '../utils/request';

const apiUrl = process.env.NODE_ENV === 'development' ? '' : 'http://api.llwell.net';

export function getCurrentUrl(oriUrl) {
  return `${apiUrl}${oriUrl}`;
}

export async function queryProjectNotice() {
  return request('/api/project/notice');
}

export async function queryActivities() {
  return request('/api/activities');
}

export async function queryRule(params) {
  return request(`/api/rule?${stringify(params)}`);
}

export async function removeRule(params) {
  return request('/api/rule', {
    method: 'POST',
    body: {
      ...params,
      method: 'delete',
    },
  });
}

export async function addRule(params) {
  return request('/api/rule', {
    method: 'POST',
    body: {
      ...params,
      method: 'post',
    },
  });
}

export async function fakeSubmitForm(params) {
  return request('/api/forms', {
    method: 'POST',
    body: params,
  });
}

export async function fakeChartData() {
  return request('/api/fake_chart_data');
}

export async function queryTags() {
  return request('/api/tags');
}

export async function queryBasicProfile() {
  return request('/api/profile/basic');
}

export async function queryAdvancedProfile() {
  return request('/api/profile/advanced');
}

export async function queryFakeList(params) {
  return request(`/api/fake_list?${stringify(params)}`);
}

export async function fakeRegister(params) {
  return request('/api/register', {
    method: 'POST',
    body: params,
  });
}

export async function queryNotices() {
  return request('/api/notices');
}

export async function getNotices() {
  return request(`${apiUrl}/llback/user/message/list`, {
    method: 'POST',
  });
}

export async function getMenu() {
  return request(`${apiUrl}/llback/user/menu`, {
    method: 'POST',
  });
}

export async function realAccountLogin(params) {
  return request(`${apiUrl}/llback/user/validate`, {
    method: 'POST',
    body: params,
  });
}

export async function realRegisterCdoe(params) {
  return request(`${apiUrl}/llback/user/register/code`, {
    method: 'POST',
    body: params,
  });
}

export async function realRegisterSubmit(params) {
  return request(`${apiUrl}/llback/user/register/submit`, {
    method: 'POST',
    body: params,
  });
}

export async function realRegisterUpload(params) {
  return request(`${apiUrl}/llback/user/register/upload`, {
    method: 'POST',
    body: params,
  });
}

export async function realRegisterStatus() {
  return request(`${apiUrl}/llback/user/register/status`, {
    method: 'POST',
  });
}

export async function realRegisterCheck(params) {
    return request(`${apiUrl}/llback/user/register/check`, {
      method: 'POST',
      body: params,
    });
}

export async function getRegisterCheckUsers(params) {
  return request(`${apiUrl}/llback/user/pagelist`, {
    method: 'POST',
    body: params,
  });
}
