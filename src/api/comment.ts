import requests from "./request";
import { LocationQueryValue } from "vue-router";

// 获取歌单评论
interface id {
  id: LocationQueryValue | LocationQueryValue[];
  type?: number;
}
export const _getPlaylistComment = (id: id) =>
  requests.get(`/comment/playlist?id=${id}&limit=60`);

// 获取歌曲评论
export const _getSongComment = (id: id) =>
  requests.get(`/comment/music?id=${id}`);

// 获取热门评论
// 0：歌曲
// 1: mv
// 2: 歌单
// 3: 专辑
// 4: 电台
// 5: 视频
export const _getHotComment = ({ id, type }: id) =>
  requests.get(`/comment/hot?id=${id}&type=${type}`);
