import axios from 'axios'
import { showNotify } from 'vant'

const instance = axios.create({
  baseURL: '/api'
})

instance.interceptors.response.use((response) => {
  console.log('33333', response)
  const { data: _data } = response
  const { data, code, msg } = _data
  if (code !== 0) {
    showNotify({
      type: 'danger',
      message: msg
    })
    return Promise.reject(msg)
  }
  return data
})

export default instance
