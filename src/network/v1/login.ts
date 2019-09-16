import API from './api';
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
  getTwitchAuth(): Promise<AxiosResponse<TwitchLogin>> {
    return API.get('/auth/twitch/login');
  },
  getTwitchResponse(code: string, state: string): Promise<AxiosResponse<TwitchLoginResponse>> {
    return API.get('/auth/twitch/response', {params: {code, state}});
  },
};
