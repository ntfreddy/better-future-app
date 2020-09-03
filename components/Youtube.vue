<template>
  <div ref="youtube" :class="[$style.youtube, $style.videoBlock]">
    <iframe
      :class="$style.player"
      frameborder="0"
      allowfullscreen="1"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      title="YouTube video player"
      width="640"
      height="360"
      :src="'https://www.youtube.com/embed/' + youtubeId + '?rel=0&amp;showinfo=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fbible.awr.org&amp;widgetid=1'"
      id="widget2"
    ></iframe>
  </div>
</template>

<script>
export default {
  props: ["youtubeId"],
};
</script>

<style module>
.youtube {
  position: relative;
  padding-top: 56.25%;
}
.player,
.youtube {
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