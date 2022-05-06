import axios from "axios";
import { ElMessage, MessageParamsTyped } from "element-plus";

const requests = axios.create({
  baseURL: "/api",
  timeout: 1000,
});

requests.interceptors.request.use((config) => {
  return config;
});

const errorHandle = (status: number, others: MessageParamsTyped | undefined) => {
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
      ElMessage.error(others)
      break;
  }
};

requests.interceptors.response.use(
  (res) => {
    if (res.status && res.status == 200) {
      return res.data;
    }

    return Promise.reject(res);
  },
  (error) => {
    console.log(error.message);
  }
);

export default requests;
