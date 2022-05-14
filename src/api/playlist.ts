import { LocationQueryValue } from "vue-router";
import requests from "./request";

// 获取推荐歌单
export const _getPlaylist = () => requests.get("/personalized?limit=10");

export const _getPlaylistDetail = (
  id: LocationQueryValue | LocationQueryValue[]
) => requests.get(`/playlist/detail?id=${id}`);
