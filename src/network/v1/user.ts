import API from './api';
import {AxiosResponse} from 'axios';
import Vue from 'vue';

export interface User {
  id: string;
  login: string;
  displayName: string;
  beta: boolean;
  broadcasterType: string;
}

export default {
  getUser(): Promise<AxiosResponse<User>> {
    return API.get('/user', {headers: {Authorization: 'Bearer ' + Vue.cookies.get('accessToken')}});
  },
};
