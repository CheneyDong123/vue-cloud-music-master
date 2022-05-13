import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { ElMessage, MessageParamsTyped } from "element-plus";

const errorHandle = (status: number, others: string) => {
  switch (status) {
    case 301:
      break;

    case 400:
      break;

    case 401:
      break;

    case 403:
      break;

    case 404:
      break;

    default:
      ElMessage.error(others);
      break;
  }
};

const requests = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 1000,
});

requests.interceptors.request.use((config: AxiosRequestConfig) => {
  return config;
});

requests.interceptors.response.use(
  (res: AxiosResponse) => {
    console.log("22222", res);

    return Promise.resolve(res);
  },
  (error) => {
    ElMessage(error);
    const { response } = error;
    if (response) {
      errorHandle(response.status, response.data);
      return Promise.reject(response);
    }
    ElMessage("请求失败");
    return true;
  }
);

export default requests;
