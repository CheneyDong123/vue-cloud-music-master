import requests from "./request";

export const _getPlaylistCatlist = () => requests.get(`/playlist/catlist`);
