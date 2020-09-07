<template>
  <div :class="$style.page" class="popup-page">
    <div :class="$style.vb" class="vb vb-invisible" style="position: relative; overflow: hidden;">
      <div
        id="nav-popup"
        :class="$style.content" class="vb-content"
        style="display: block; overflow: hidden scroll; height: 100%; width: calc(100% + 17px);"
      >
        <!---->
        <div :class="$style.placeholder" class="popup-page-panel-ph" style="display: none;"></div>

        <slot></slot>
      </div>
      <div class="vb-dragger" style="position: absolute; height: 0px; top: 0px;">
        <div class="vb-dragger-styler"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style module>
.page {
  display: block;
  position: fixed;
  width: 100%;
  min-height: 100vh;
  left: 0;
  top: 0;
  background-color: #fff;
  z-index: 12;
}
.close_1zhXJ {
  position: absolute;
  right: 40px;
  top: 20px;
  font-size: 24px;
  z-index: 1;
}
.content {
  position: relative;
  overflow-y: scroll;
  max-height: 100vh;
}
.placeholder {
  width: 100%;
  height: 116px;
}
.vb:after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  right: 3px;
  background-color: rgba(0, 0, 0, 0.03);
  height: 100%;
  width: 6px;
  border-radius: 4px;
}
.vb.vb-invisible:after {
  display: none;
}
.vb > .vb-dragger {
  z-index: 4;
  width: 6px;
  border-radius: 4px;
  top: 2px;
  right: 3px;
  cursor: pointer;
}
.vb > .vb-dragger > .vb-dragger-styler {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transform: rotate3d(0, 0, 0, 0);
  transform: rotate3d(0, 0, 0, 0);
  -webkit-transition: background-color 0.2s ease-out, margin 0.2s ease-out,
    height 0.2s ease-out;
  transition: background-color 0.2s ease-out, margin 0.2s ease-out,
    height 0.2s ease-out;
  background-color: hsla(0, 0%, 71.8%, 0.5);
  border-radius: 20px;
  display: block;
  height: 100%;
}
.vb.vb-dragging > .vb-dragger > .vb-dragger-styler,
.vb.vb-scrolling-phantom > .vb-dragger > .vb-dragger-styler,
.vb > .vb-dragger:hover > .vb-dragger-styler {
  background-color: hsla(0, 0%, 71.8%, 0.8);
}
.cssscrollbar .vb > .vb-content {
  width: 100% !important;
}
.cssscrollbar .vb > .vb-content::-webkit-scrollbar {
  display: none;
}
.dir--rtl .content {
  margin-right: -20px;
}
</style>