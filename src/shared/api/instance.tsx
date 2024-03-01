import axios from "axios";
import { API_URL } from "~/shared/config";
import { LOGIN_ROUTE } from "~/shared/router/routes";

const REFRESH_TOKEN_URL = `${API_URL}/api_admin/token/refresh/`;

export const apiInstance = axios.create({
  baseURL: API_URL,
});

export const refreshToken = (token: string) => {
  let payload = token.split(".")[1];
  let decodedPayload = atob(payload);
  let payloadObj = JSON.parse(decodedPayload);
  let expirationDate = new Date(payloadObj.exp * 1000);
  if (expirationDate.getTime() <= Date.now()) {
    apiInstance
      .post(REFRESH_TOKEN_URL, {
        refresh: localStorage.getItem("refresh_token"),
      })
      .then((response) => {
        localStorage.setItem("access_token", response.data.access);
        localStorage.setItem("refresh_token", response.data.refresh);
      })
      .catch((error) => {
        console.log(error);
        window.location.href = LOGIN_ROUTE;
      });
  }
};

apiInstance.interceptors.request.use((config) => {
  if (config.url !== REFRESH_TOKEN_URL) {
    let jwtToken = localStorage.getItem("access_token");
    if (jwtToken) {
      refreshToken(jwtToken);
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
