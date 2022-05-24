import axios from 'axios';

const baseUrl = '/api';

export default axios.create({
  baseURL: baseUrl,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  }
});
