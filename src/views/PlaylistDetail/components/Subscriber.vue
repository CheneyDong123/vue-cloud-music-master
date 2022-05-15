<script setup lang="ts">
const { playlistDetail } = defineProps(["playlistDetail"]);
console.log(playlistDetail);

const { subscribers } = playlistDetail;
</script>

<template>
  <div class="container">
    <div class="item" v-for="(subscriber, index) in subscribers" :key="index">
      <img class="avatarImg" :src="subscriber.avatarUrl" alt="" />
      <div class="avartarDetail">
        <p>
          {{ subscriber.nickname }}
          <el-icon v-if="subscriber.gender == 1"><Male /></el-icon>
          <el-icon v-if="subscriber.gender == 2"><Female /></el-icon>
        </p>
        <span>{{ subscriber.signature }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang='less'>
.container {
  display: flex;
  flex-wrap: wrap;

  width: 100%;
  margin: 40px;
  .item {
    margin-bottom: 25px;
    width: 33%;
    display: flex;
    align-items: center;
    // flex-wrap: wrap;
    .avatarImg {
      width: 90px;
      height: 90px;
      border-radius: 50%;
    }
    .avartarDetail {
      margin-left: 10px;
      font-size: 14px;
      color: rgb(55, 55, 55);
      p {
        margin-bottom: 7px;
      }
      span {
        font-size: 8px;
      }
    }
  }
}
</style>