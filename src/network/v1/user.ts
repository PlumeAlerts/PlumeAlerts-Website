import API from './api';
import {AxiosResponse} from 'axios';

export interface User {
  id: string;
  login: string;
  displayName: string;
  beta: boolean;
  broadcasterType: string;
}

export default {
  getUser(token: string): Promise<AxiosResponse<User>> {
    return API.get('/user', {headers: {Authorization: 'Bearer ' + token}});
  },
};
