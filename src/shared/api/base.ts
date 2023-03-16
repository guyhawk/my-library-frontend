import axios from 'axios'

export const apiInstance= axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    Accept: 'application/json',
  },

});
