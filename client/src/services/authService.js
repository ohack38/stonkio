import axios from "axios";

const API = 'http://127.0.0.1:8000/api/auth/';

export const register = (username, email, password) => {
  return axios.post(API + 'register/', {
    email,
    username,
    password,
  });
};

export const login = (email, password) => {
  return axios.post(API + 'login/', {
      email,
      password,
    })
    .then((response) => {
      console.log(response.data);
      if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }

      return response.data;
    });
};
export const getTokens = (email, password) => {
  return axios.post(API + 'token/', {
    email,
    password,
  })
  .then((response) => {
    console.log(response.data);
    if (response.data) {
      localStorage.setItem('refresh', response.data.refresh);
      localStorage.setItem('access', response.data.access);
    }

    return response.data;
  });
};


export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

// { login, register } from file
