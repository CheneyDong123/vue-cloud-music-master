import requests from "./request";

// 获取推荐歌单
export const _getPlaylist = () => requests.get("/personalized?limit=10");
