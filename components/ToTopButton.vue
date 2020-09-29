<template>
  <div ref="topBtn" :class="$style.wrapper" v-show="visible" v-on:click="backToTop">
    <div :class="$style.btn">
      <Icon name="to-top" viewBox="0 0 23 32" :class="$style.arrows" />
    </div>
  </div>
</template>

<script>
import Icon from "./Icon";

export default {
  name: "BackToTop",
  components:{
    Icon
  },
  props: {
    visibleoffset: {
      type: [String, Number],
      default: 600,
    },
    right: {
      type: String,
      default: "30px",
    },
    bottom: {
      type: String,
      default: "40px",
    },
  },
  data: function () {
    return {
      visible: false,
    };
  },
  mounted: function () {
    var e = this;
    window.addEventListener("scroll", function () {
      window.pageYOffset > 20
        ? e.visible || (e.visible = true)
        : e.visible && (e.visible = false);
    });
  },
  methods: {
    backToTop: function () {
      this.$scrollTo(document.getElementById("top"));
    },
  },
};
</script>

<style module>
.wrapper {
  border-radius: 50%;
  position: fixed;
  z-index: 100;
  cursor: pointer;
  right: 90px;
  bottom: 16px;
}
.wrapper .btn {
  padding: 0;
  width: 60px;
  height: 60px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 50%;
  line-height: 0;
  background: #2469c7;
  -webkit-box-shadow: 0 6px 10px rgba(36, 105, 199, 0.4);
  box-shadow: 0 6px 10px rgba(36, 105, 199, 0.4);
}
.wrapper .btn:before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #000;
  opacity: 0;
  -webkit-transition: opacity 0.2s ease-in-out;
  transition: opacity 0.2s ease-in-out;
  overflow: hidden;
  border-radius: 50%;
}
.wrapper.active .btn:before,
.wrapper:focus .btn:before,
.wrapper:hover .btn:before {
  opacity: 0.08;
}
@media (max-width: 767.98px) {
  .wrapper {
    right: 83px;
  }
}
.arrows {
  font-size: 25px;
  z-index: 3;
}
</style>