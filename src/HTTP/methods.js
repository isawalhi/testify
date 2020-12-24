import axios from 'axios';

export const doPost = ({
  url, payload, headers = {}, options = {}, baseUrl,
}) => axios.post(url, payload, {
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
    ...headers,
  },
  ...options,
});

export const doGet = ({
  url, headers = {}, options = {}, baseUrl,
}) => axios(url, {
  baseURL: baseUrl,
  method: 'get',
  headers: {
    'Content-Type': 'application/json',
    ...headers,
  },
  data: {},
  ...options,
});
