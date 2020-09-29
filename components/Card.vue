<template>
  <div :class="[$style.card, $style['item-' + index]]">
    <Icon name="arrow-right" :viewBox="viewBox" :class="$style.arror" />
    <div :class="$style.left">
      <div :class="$style.circle"></div>
      <Icon :name="icon" :viewBox="viewBox" :class="$style.image" />
    </div>
    <div>
      <div :class="$style.title">{{title}}</div>
      <div :class="$style.desc">{{desc}}</div>
    </div>
  </div>
</template>

<script>
import Icon from "./Icon";

export default {
  components: {
    Icon,
  },
  props: ["title", "icon", "desc", "index", "viewBox"],
};
</script>

<style module>
.card {
  width: 100%;
  min-height: 138px;
  border: 2px solid rgba(36, 105, 199, 0.6);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 16px;
  position: relative;
  padding: 20px 35px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  cursor: pointer;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  -ms-flex-negative: 1;
  flex-shrink: 1;
  -ms-flex-preferred-size: 0;
  flex-basis: 0;
  -webkit-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
}
.card:hover {
  border-color: #2469c7;
  background: #2469c7;
}
.card:hover .title {
  color: #fff;
}
.card:hover .desc {
  color: hsla(0, 0%, 100%, 0.6);
}
.card:hover .arror {
  color: hsla(0, 0%, 100%, 0.4);
}
.card:hover .circle {
  width: 80px;
  height: 80px;
  top: -17px;
  left: -13px;
}
.arror {
  position: absolute;
  top: 50%;
  right: 15px;
  font-size: 13px;
  color: rgba(36, 105, 199, 0.2);
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  -webkit-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
}
.arror:hover {
  color: rgba(36, 105, 199, 0.8);
}
.item-0 .circle {
  top: -33%;
  left: 7%;
}
.item-1 .circle {
  top: 8%;
  left: -30%;
}
.item-2 .circle {
  top: 38%;
  left: 47%;
}
.item-3 .circle {
  top: 51%;
  left: 11%;
}
.left {
  margin-right: 37px;
}
.image,
.left {
  position: relative;
}
.image {
  font-size: 52px;
  color: #2469c7;
}
.circle {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: #f7f0e7;
  position: absolute;
  top: 0;
  left: 0;
  -webkit-transition: all 0.3s ease-in;
  transition: all 0.3s ease-in;
}
.title {
  font-weight: 700;
  font-size: 19px;
  line-height: 22px;
  margin-bottom: 8px;
  color: #000;
}
.desc,
.title {
  -webkit-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
  text-align: left;
}
.desc {
  font-size: 14px;
  line-height: 21px;
  color: rgba(0, 0, 0, 0.6);
}
@media (prefers-color-scheme: dark) {
  .circle {
    background-color: #2469c7;
  }
  .image,
  .title {
    color: #fff;
  }
  .desc {
    color: hsla(0, 0%, 100%, 0.6);
  }
}
</style>