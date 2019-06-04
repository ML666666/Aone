<template>
 <div class="TheVideoPlayerWrapper">
   <videoPlayer
     class="video-player TheVideoPlayerWrapper"
     ref="videoPlayer"
     :options="playerOptions"
     :playsinline="true"
   ></videoPlayer>
 </div>
</template>

<script>
  import gob  from '../../../../store/config.js';
  import { videoPlayer } from 'vue-video-player'
    export default {
        name: "video-wrapper",
      props:["url"],
      watch:{
        url:function(val) {
          this.playerOptions.sources[0].src = gob.apiUrl+ this.url;
          console.log(this.playerOptions.sources[0].src)
        }
      },
      data () {
        return {
          playerOptions:{
            sources: [{
              type: "video/mp4",//视频类型
              src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm",//视频地址
              playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
              autoplay: false, //如果true,浏览器准备好时开始回放。
              muted: false, // 默认情况下将会消除任何音频。
              loop: false, // 导致视频一结束就重新开始。
              preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
              language: 'zh-CN',
              aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
            }],
            poster: "", //你的封面地址
            notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
            controlBar: {
              timeDivider: true,
              durationDisplay: true,
              remainingTimeDisplay: false,
              fullscreenToggle: true  //全屏按钮
            }
          }
        }
      },
      components: {
        videoPlayer
      }
    }
</script>

<style scoped>
.TheVideoPlayerWrapper {
  width: 26.785rem !important;
  height: 14.928rem !important;
  margin: 0 auto;
}
.TheVideoPlayerWrapper >>>.video-js{
  width: 26.785rem !important;
  height: 14.928rem !important;
}
.TheVideoPlayerWrapper >>> .vjs_video_3-dimensions{
  width: 26.785rem !important;
  height: 14.928rem !important;
}
.TheVideoPlayerWrapper >>> .vjs-big-play-button{
  left: 50%;
  top:50%;
  transform: translate(-50%,-50%);
}
</style>
