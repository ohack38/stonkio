import axios from "axios";

const baseUrl = "http://127.0.0.1:8000/api";

const instanceHeaders = axios.create();
const instanceEmpty = axios.create();
//request interceptor to add the auth token header to requests
instanceHeaders.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem("access");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);//response interceptor to refresh token on receiving token expired error
instanceHeaders.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
        console.log(JSON.stringify(error));
        const originalRequest = error.config;
        let refreshToken = localStorage.getItem("refresh");
        console.log(JSON.stringify(refreshToken));
          if (error.response.status === 401 && !originalRequest._retry) {
                console.log(error)
                originalRequest._retry = true;
                const res = instanceHeaders
                        .post(`${baseUrl}/auth/token/refresh/`, refreshToken );

                    if (res.status === 200) {
                      localStorage.setItem("access", res.data.access);
                      console.log("Access token refreshed!");
                      return instanceHeaders(originalRequest);
                    }else{
                      localStorage.removeItem('user');
                      localStorage.removeItem('access');
                      localStorage.removeItem('refresh');
                      console.log('user deleted from localStorage');
                    }
            }
        
        

        return Promise.reject(error);
  }
);//functions to make api callsconst 
const API = {
  register: (body) => {
    return instanceHeaders.post(`${baseUrl}/auth/register`, body);
  },
  login: (body) => {
    return instanceHeaders.post(`${baseUrl}/auth/login`, body);
  },
  refreshToken: (body) => {
    return instanceHeaders.post(`${baseUrl}/auth/token/refresh/`, body);
  },
  logout: (body) => {
    return instanceHeaders.post(`${baseUrl}/auth/logout/`, body);
  },
  getWatchlist: () => {
    return instanceHeaders.get(`${baseUrl}/watchlist`);
  },
  getPrices: () => {
    return instanceEmpty.get(`${baseUrl}/live`)
  }
  
};

export default API;
