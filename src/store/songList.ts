import { defineStore } from "pinia";
import { ref } from 'vue'

export const useSongListStore = defineStore("songList" ,() => {
  const songList = ref([
    {
      url:"https://music.163.com/song/media/outer/url?id=33894312.mp3",
      imgUrl:"http://p1.music.126.net/g7JVZ54-fQYHfW0hIQYoLg==/109951167954541650.jpg"
    }
  ])
  function getSongList() {
    return songList.value
  }

  return {
    songList
  }
})