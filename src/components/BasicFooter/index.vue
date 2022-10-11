<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useSongListStore } from '@/store/index'
const songListStore = useSongListStore()
const songList = computed(() => songListStore.songList)
const audio = ref()
const currentPlayImgUrl = ref()
const currentPlayUrl = ref()

function play() {
  audio.value.play()
}

function pause() {
  audio.value.pause()
}

function getDuration() {
  return audio.value.duration
}

function timeupdate() {
  return audio.value.currentTime
}

function continuePlay() {
  if (audio.value.paused) {
    play()
  } else {
    pause()
  }
}

onMounted(() => {
  currentPlayUrl.value = songList.value[0].url
  currentPlayImgUrl.value = songList.value[0].imgUrl
})
</script>

<template>
  <div id="footer-container">
    <audio ref="audio" :src="currentPlayUrl" @canplay="getDuration" @pause="pause" @timeupdate="timeupdate"
      @play="play" />
    <div class="footer-info">
      <img :src="currentPlayImgUrl" alt="图片">
      <div class="info-name">
        <p>你的答案</p>
        <p>huohuo</p>
      </div>
    </div>
    <div class="footer-controller">
      <button>上一首</button>
      <button @click="continuePlay">继续</button>
      <button>下一首</button>
    </div>
    <div class="footer-toolsBox">
      toolBox
    </div>
  </div>
</template>

<style scoped lang='less'>
#footer-container {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .footer-info {
    width: 30%;
    height: 30%;
    margin-left: 15px;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    img {
      width: 60px;
      height: 60px;
      border-radius: 5px;
    }

    .info-name {
      margin-left: 10px;

      p {
        margin: 0;
      }
    }
  }

  .footer-controller {
    width: 30%;
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .footer-toolsBox {
    width: 30%;
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}
</style>