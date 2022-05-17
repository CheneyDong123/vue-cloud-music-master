import { LocationQueryValue } from "vue-router";
import requests from "./request";

// 获取推荐歌单
export const _getPlaylist = () => requests.get("/personalized?limit=10");

export const _getPlaylistDetail = (
  id: LocationQueryValue | LocationQueryValue[]
) => requests.get(`/playlist/detail?id=${id}`);

// 获取网友精选碟歌单
export const _getTopPlaylist = (cat = "全部歌单", offect = 1, limit = 30) =>
  requests.get(`/top/playlist?cat=${cat}&limit=${limit}&offect=${offect}`);

// 获取热门歌单分类
export const _getHotCategory = () => requests.get("/playlist/hot");

// 获取热门歌单
export const _getHighQuality = (cat = "全部", limit = "30") =>
  requests.get(`/top/playlist/highquality?cat=${cat}&limit=${limit}`);
