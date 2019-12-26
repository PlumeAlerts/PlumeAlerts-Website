import API, {Data} from './API';
import {AxiosResponse} from 'axios';
import Vue from 'vue';

export interface User {
  id: string;
  login: string;
  displayName: string;
  beta: boolean;
  broadcasterType: string;
}

export const NotificationType: Record<string, string> = {
  follow: 'ComponentNotificationFollow',
};

export interface Notification {
  id: number;
  type: string;
  hide: boolean;
  userId: string;
  createdAt: number;
}

export interface NotificationHide {
  id: number;
  hide: boolean;
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
    return API.get('/user/me',
      {headers: {Authorization: 'Bearer ' + Vue.$cookies.get('accessToken')}},
    );
  },
  getDashboard(): Promise<AxiosResponse<Data<DashboardData[]>>> {
    return API.get('/user/me/dashboard',
      {headers: {Authorization: 'Bearer ' + Vue.$cookies.get('accessToken')}},
    );
  },
  putDashboard(data: DashboardData): Promise<AxiosResponse<Data<DashboardData>>> {
    return API.put('/user/me/dashboard', {data},
      {headers: {Authorization: 'Bearer ' + Vue.$cookies.get('accessToken')}},
    );
  },
  getNotifications(): Promise<AxiosResponse<Data<Notification[]>>> {
    return API.get('/user/me/notifications',
      {headers: {Authorization: 'Bearer ' + Vue.$cookies.get('accessToken')}},
    );
  },
  putNotifications(data: NotificationHide): Promise<AxiosResponse<Data<NotificationHide>>> {
    return API.put('/user/me/notifications', {data},
      {headers: {Authorization: 'Bearer ' + Vue.$cookies.get('accessToken')}},
    );
  },
};
