import axios from "axios";
import { API_URL } from "~/shared/config";
import { LOGIN_ROUTE } from "~/shared/router/routes";

const REFRESH_TOKEN_URL = `${API_URL}/api_admin/token/refresh/`;

export const apiInstance = axios.create({
  baseURL: API_URL,
});

export const isTokenExpired = (token: string) => {
  let payload = token.split(".")[1];
  let decodedPayload = atob(payload);
  let payloadObj = JSON.parse(decodedPayload);
  let expirationDate = new Date(payloadObj.exp * 1000);
  return expirationDate.getTime() <= Date.now();
};

apiInstance.interceptors.request.use((config) => {
  if (config.url !== REFRESH_TOKEN_URL) {
    let jwtToken = localStorage.getItem("access_token");
    let refresh_token = localStorage.getItem("refresh_token");
    if (jwtToken && refresh_token) {
      if (isTokenExpired(jwtToken)) {
        if (isTokenExpired(refresh_token)) {
          localStorage.removeItem("access_token");
          localStorage.removeItem("refresh_token");
          window.location.href = LOGIN_ROUTE;
        } else {
          apiInstance
            .post(REFRESH_TOKEN_URL, {
              refresh: refresh_token,
            })
            .then((response) => {
              localStorage.setItem("access_token", response.data.access);
              localStorage.setItem("refresh_token", response.data.refresh);
            })
            .catch((error) => {
              if (![401, 403, 404].includes(error.response?.status)) {
                throw error;
              }
            });
        }
      }
      config.headers["Authorization"] = `Bearer ${jwtToken}`;
    }
  }
  return config;
});

const interceptor = apiInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

apiInstance.interceptors.response.eject(interceptor);
