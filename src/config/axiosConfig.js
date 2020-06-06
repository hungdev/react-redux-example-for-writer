import { create } from 'axios'
import { store } from '../App'

const api = create({
  baseURL: process.env.URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Cache: 'no-cache',
  },
  timeout: 30000,
});

// Add a request interceptor
api.interceptors.request.use((config) => {
  const state = store.getState();
  console.log('state', state)
  // return { ...config, headers: { ...config.headers, Authorization: `Bearer ${token}` } };
  return { ...config };
});

// Add a response interceptor
// api.axiosInstance.interceptors.response.use((response) => response, (error) => {
//   // Do something with response error
//   if (error.response.status === 401) {
//     window.alert('Something went wrong!. Please login again');  //eslint-disable-line
//     // window.location.reload();
//     store.dispatch(removeToken());
//     window.location.href = '/#/login';
//   }
//   return Promise.reject(error.response);
// });

export default api