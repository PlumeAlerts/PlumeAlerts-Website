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

export interface DashboardData {
  type: string;
  x: number;
  y: number;
  width: number;
  height: number;
  show: boolean;
}

export default {
  getUser(): Promise<AxiosResponse<Data<User>>> {
    return API.get('/user', {headers: {Authorization: 'Bearer ' + Vue.cookies.get('accessToken')}});
  },
  getDashboard(): Promise<AxiosResponse<Data<DashboardData[]>>> {
    return API.get('/user/dashboard', {headers: {Authorization: 'Bearer ' + Vue.cookies.get('accessToken')}});
  },
  putDashboard(data: DashboardData): Promise<AxiosResponse<Data<DashboardData[]>>> {
    return API.put('/user/dashboard', {data}, {headers: {Authorization: 'Bearer ' + Vue.cookies.get('accessToken')}});
  },
  getNotifications(): Promise<AxiosResponse<Data<Notification[]>>> {
    return API.get('/user/notifications', {headers: {Authorization: 'Bearer ' + Vue.cookies.get('accessToken')}});
  },
};
