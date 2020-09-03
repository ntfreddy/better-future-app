<template>
  <svg :viewBox="viewBox" :class="['icon icon--'+ id, $style.icon]">
    <use :xlink:href="'#' + id">
      <svg :fill="fill" :viewBox="viewBox" :id="id" xmlns="http://www.w3.org/2000/svg">
        <slot></slot>
      </svg>
    </use>
  </svg>
</template>

<script>
export default {
  props: ["id", "viewBox", "fill"],
};
</script>

<style module>
.icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  line-height: 1em;
  vertical-align: middle;
}
.icon use {
  color: inherit;
  fill: currentColor;
}
.icon.stroked use {
  stroke: currentColor;
}
.icon.hover-fill use,
.icon.nofill use {
  fill: none;
}
.icon.hover-fill use:hover {
  fill: currentColor;
}
.icon.active-fill use {
  fill: none;
}
.icon.active-fill.is-active use {
  fill: currentColor;
}
.icon.big {
  width: 2em;
  height: 2em;
}
.icon.large {
  width: 3em;
  height: 3em;
}
</style>