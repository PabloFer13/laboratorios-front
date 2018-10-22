import axios from 'axios';

axios.defaults.baseURL = 'https://laboratorios-api.herokuapp.com';

const auth = token => {
  axios.defaults.params = { token };
};

export default {
  auth,
  login: (loginParams) => axios.post('/login', loginParams),
  users: {
    create: params => axios.post('/usuarios', params)
  }
}