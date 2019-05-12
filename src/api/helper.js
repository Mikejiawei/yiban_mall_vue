import axios from 'axios'

const ERR_OK = 0

export function get(url) {
  return function(params = {}) {
    return axios.get(url, {
      params
    }).then((res) => {
      const { errno, data } = res.data
      if (errno === ERR_OK) {
        return data
      }
    }).catch((e) => {})
  }
}

export function post(url) {
  return function(data = {}) {
    return axios.post(url, data, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then((res) => {
      const { errno, data } = res.data
      if (errno === ERR_OK) {
        return data
      }
    }).catch(e => {})
  }
}