import requests from "./request";

export const _getPlaylist = () => requests.get("/top/playlist/highquality?limit=10");
