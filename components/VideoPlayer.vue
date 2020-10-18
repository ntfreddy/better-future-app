<template>
  <div ref="videoPlayer" :class="[$style.videoPlayer, $style.videoBlock]">
    <iframe v-if="isYoutube"
      :class="$style.player"
      frameborder="0"
      allowfullscreen="1"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      title="YouTube video player"
      width="640"
      height="360"
      :src="'https://www.youtube.com/embed/' + videoPlayerId + '?rel=0&amp;showinfo=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fbible.awr.org&amp;widgetid=1'"
      id="widgetYoutube"
    ></iframe>
    <iframe v-if="isFacebook"
      :class="$style.player"
      frameborder="0"
      allowfullscreen="1"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      title="Facebook video player"
      width="640"
      height="360"
      :src="'https://www.facebook.com/plugins/video.php?show_text=false&href=https://www.facebook.com/Pensezlavenir/videos/' + videoPlayerId + ''"
      id="widgetFacebook"
    ></iframe>
  </div>
</template>

<script>
export default {
  props: ["videoPlayerId", "isYoutube", "isFacebook"],
};
</script>

<style module>
.videoPlayer {
  position: relative;
  padding-top: 56.25%;
}
.player,
.videoPlayer {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
.player {
  position: absolute;
  top: 0;
  left: 0;
  border: 0;
}

@media (max-width: 575.98px) {
  .videoBlock {
    width: 100vw;
    height: 211px;
  }
}
</style>