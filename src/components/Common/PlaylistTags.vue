<script setup lang="ts">
import { defineEmits } from "vue";
const emit = defineEmits(["changeCat"]);
function changeCats(cat: any) {
  emit("changeCat", cat);
}
const props = defineProps(["sum", "isShow", "currentCat"]);
</script>

<template>
  <div class="playlist-tag" v-show="isShow">
    <div class="all" @click="changeCats('全部歌单')">
      <p :class="{ active: currentCat === '全部歌单' }">全部歌单</p>
    </div>
    <div class="cat">
      <dl v-for="(category, key, index) in sum" :key="index">
        <dt>{{ key }}</dt>
        <div>
          <dd
            v-for="cat in category"
            :key="cat.name"
            @click="changeCats(cat.name)"
          >
            <p :class="{ active: cat.name === currentCat }">
              {{ cat.name }}
            </p>
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<style scoped lang='less'>
.playlist-tag {
  position: absolute;
  top: 0;
  height: fit-content;
  width: 600px;
  border-radius: 5px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 0 3px 1px rgb(241, 239, 239);
  .all {
    padding: 20px;
    width: 100%;
    height: 100%;
    font-size: smaller;
    border-bottom: 1px solid rgb(241, 239, 239);
    p {
      display: flex;
      width: 80px;
      height: 30px;
      align-items: center;
      justify-content: center;
      &:hover {
        color: rgb(253, 84, 78);
      }
    }
  }
  .cat {
    padding: 20px;
    font-size: smaller;
    dl {
      margin-bottom: 10px;
      // display: flex;
      dt {
        color: rgb(207, 207, 207);
        display: block;
        width: 80px;
      }
      div {
        display: flex;
        flex-wrap: wrap;

        dd {
          margin: 10px 0;
          width: 100px;
          &:hover {
            color: rgb(253, 84, 78);
          }
          p {
            width: fit-content;
            padding: 5px 10px;
          }
        }
      }
    }
  }
}
</style>