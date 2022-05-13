import requests from "./request";

// 获取轮播图数据
export const _getBanner = () => requests.get("/banner");
