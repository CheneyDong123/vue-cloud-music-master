<script setup lang="ts">
import { computed, defineProps } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const props = defineProps(["highQuality", "currentCat"]);
const firstItem = computed(() => props.highQuality[0]);
const goHigh = (cat: any) => {
  router.push({ name: "highplaylist", query: { cat: cat } });
};
</script>

<template>
  <div v-if="firstItem == null">加载中</div>
  <div class="container" v-else>
    <div
      class="backImg"
      :style="{ backgroundImage: `url(${firstItem.coverImgUrl})` }"
    >
      <div class="content">
        <img :src="firstItem.coverImgUrl" alt="" />
        <div>
          <span @click="goHigh(currentCat)">
            <el-icon><Medal /></el-icon>
            精品歌单
          </span>
          <p>{{ firstItem.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang='less'>
.container {
  width: 100%;
  height: 100%;
  border-radius: 5px;
  position: relative;
  .backImg {
    box-sizing: border-box;
    border-radius: 5px;
    position: absolute;
    width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    .content {
      border-radius: 5px;
      display: flex;
      align-items: center;
      position: absolute;
      height: 100%;
      width: 100%;
      backdrop-filter: blur(35px);
      -webkit-backdrop-filter: blur(10px);
      background-color: rgba(48, 47, 47, 0.4);
      img {
        border-radius: 5px;
        width: fit-content;
        height: 85%;
        display: flex;
        align-items: center;
        margin: 13px;
      }
      div {
        span {
          font-size: smaller;
          color: rgb(231, 170, 90);
          display: block;
          padding: 5px 10px;
          width: fit-content;
          border: 1px solid rgb(231, 170, 90);
          border-radius: 20px;
          margin-bottom: 10px;
        }
        p {
          margin-top: 10px;
          color: white;
        }
      }
    }
  }
}
</style>