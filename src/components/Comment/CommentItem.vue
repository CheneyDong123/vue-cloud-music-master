<script setup lang="ts">
import { useGetTime } from "@/hooks/index";
const { comments } = defineProps(["comments"]);
</script>

<template>
  <ul>
    <li class="commentItem" v-for="(comment, index) in comments" :key="index">
      <div class="itemContent">
        <img :src="comment.user.avatarUrl" alt="" />
        <div class="right">
          <span>{{ comment.user.nickname }}</span
          >: {{ comment.content }}
          <ul>
            <li v-show="false"></li>
            <li>
              <div class="sendTime">{{ useGetTime(comment.time) }}</div>
              <div class="likedCount">
                <el-icon v-if="comment.liked"><StarFilled /></el-icon>
                <el-icon v-else><Star /></el-icon>
                {{ comment.likedCount }}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </li>
  </ul>
</template>

<style scoped lang='less'>
.commentItem {
  height: max-content;
  display: flex;
  align-items: center;
  &:not(:last-child) {
    border-bottom: 1px solid rgb(242, 242, 242);
  }
  .itemContent {
    width: 100%;
    display: flex;
    margin: 20px 0;
    img {
      width: 35px;
      height: 35px;
      border-radius: 50%;
    }
    .right {
      width: 100%;
      margin-left: 15px;
      color: rgb(55, 55, 55);
      span {
        color: rgb(80, 125, 175);
      }
      li {
        margin-top: 5px;
        height: 20px;
        overflow: hidden;
        .sendTime {
          color: rgb(159, 159, 159);
          float: left;
        }
        .likedCount {
          color: rgb(103, 103, 103);
          float: right;
        }
      }
    }
  }
}
</style>