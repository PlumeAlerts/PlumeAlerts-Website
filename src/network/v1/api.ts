import axios from 'axios';

const baseURL = 'http://localhost:4567/v1'; // TODO move to env file

export default axios.create({
  baseURL,
});


