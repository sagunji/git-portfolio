import axios from 'axios';

export function get(url) {
  return axios({
    method: 'GET',
    url: url
  });
}
