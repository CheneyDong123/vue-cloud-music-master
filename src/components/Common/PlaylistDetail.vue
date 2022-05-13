<script setup lang="ts">
</script>

<template>
  <div>
    <div class="playlist-header">
      <div class="coverImg">
        <img
          src="https://p2.music.126.net/g2_Gv0dtAicJ3ChTYu28_g==/1393081239628722.jpg"
          alt="cover"
        />
      </div>
      <div class="description">
        <div class="description-title">
          <p class="title">深度睡眠 |重度失眠者专用歌单</p>
          <div class="creator">
            <img
              src="http://p1.music.126.net/V8vWlV3FiclTlZX6yJhOXA==/109951167291316182.jpg"
              alt="avatarImg"
            />
            <span>音旧-</span>
            <span>1460007339812创建</span>
          </div>
          <div class="utils">
            <el-button color="rgb(253,84,78)" round>播放全部</el-button>
            <el-button round>收藏</el-button>
            <el-button round>分享</el-button>
            <el-button round>下载全部</el-button>
          </div>
        </div>
        <div class="description-detial">
          <p>标签： 轻音乐/夜晚/安静"</p>
          <p>歌曲: 10 播放: 60296744</p>
          <p>
            简介：
            好希望这里可以成为大家的一个庇护所↵在深夜安安静静不吵不闹↵事或沉默↵大家都彼此默契↵等待天明
          </p>
        </div>
      </div>
    </div>
    <div class="playlist-body">
      <div class="songList">songList</div>
    </div>
  </div>
</template>

<style scoped lang='less'>
.playlist-header {
  display: flex;
  margin: 30px;
  .coverImg {
    height: 200px;
    width: 200px;
    img {
      width: 100%;
      border-radius: 8px;
    }
  }
  .description {
    margin-left: 20px;
    .description-title {
      .title {
        font-size: 24px;
        font-weight: bold;
        color: rgb(55, 55, 55);
      }
      .creator {
        margin-top: 10px;
        display: flex;
        align-items: center;
        img {
          width: 25px;
          height: 25px;
          border-radius: 50%;
        }
        span {
          font-size: smaller;
          margin-left: 10px;
        }
      }
      .utils {
        margin-top: 12px;
      }
    }
    .description-detial {
      color: rgb(55, 55, 55);
      font-size: small;
      margin-top: 15px;
      p {
        margin-top: 5px;
      }
    }
  }
}
</style>