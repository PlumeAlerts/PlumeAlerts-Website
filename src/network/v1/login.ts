import API, {Data} from './api';
import {AxiosResponse} from 'axios';

export interface TwitchLogin {
  url: string;
}

export interface TwitchLoginResponse {
  accessToken: string;
  refreshToken: string;
  expiredAt: number;
  refreshExpiredAt: number;
}

export default {
  getTwitchAuth(): Promise<AxiosResponse<Data<TwitchLogin>>> {
    return API.get('/auth/twitch/login');
  },
  getTwitchResponse(code: string, state: string): Promise<AxiosResponse<Data<TwitchLoginResponse>>> {
    return API.get('/auth/twitch/response', {params: {code, state}});
  },
  postValidate(token: string): Promise<AxiosResponse> {
    return API.post('/auth/validate', undefined, {headers: {Authorization: 'Bearer ' + token}});
  },
};
