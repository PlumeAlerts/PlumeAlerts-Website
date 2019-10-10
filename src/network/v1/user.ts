import API, {Data} from './api';
import {AxiosResponse} from 'axios';
import Vue from 'vue';

export interface User {
  id: string;
  login: string;
  displayName: string;
  beta: boolean;
  broadcasterType: string;
}

export enum NotificationType {
  follow = 'ComponentNotificationFollow',
}

export interface Notification {
  userId: string;
  createdAt: number;
  type: string;
}

export interface NotificationFollow extends Notification {
  username: string;
}

export default {
  getUser(): Promise<AxiosResponse<Data<User>>> {
    return API.get('/user', {headers: {Authorization: 'Bearer ' + Vue.cookies.get('accessToken')}});
  },
  getUserNotifications(): Promise<AxiosResponse<Data<Notification[]>>> {
    return API.get('/user/notifications', {headers: {Authorization: 'Bearer ' + Vue.cookies.get('accessToken')}});
  },
};
