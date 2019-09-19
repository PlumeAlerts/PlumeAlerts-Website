import axios from 'axios';

const baseURL = process.env.VUE_APP_API_BASE_URL + '/v1';

export default axios.create({
  baseURL,
});
