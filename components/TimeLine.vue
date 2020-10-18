<template>
  <div class="d-lg-flex d-none" :class="[$style.timeLine, $style.ready]">
    <div class="container">
      <div
        v-swiper:gallery="swiperOption"
        class="swiper-container swiper-container-horizontal"
        :class="$style.swiperContainer"
      >
        <div
          class="swiper-wrapper"
          style="transition-duration: 0ms; transform: translate3d(-1560px, 0px, 0px);"
        >
          <div
            ref="slide"
            v-for="(episode, index) in episodes"
            :key="episode.id"
            class="swiper-slide"
            :class="{[$style.slide]: true ,[$style.disableSlide]: ('closed' === episode.state)}"
            style="margin-right: 20px;"
            v-on:click="goToSlide(index)"
          >
            <div :class="$style.top">
              <div
                :class="{[$style.label]:true, [$style.active]: (activeIndex === index), [$style.today]: (episode.state == 'today'),[$style.closed]: (episode.state === 'closed'),[$style.finished]: (episode.state === 'finished'),}"
              >
                <div :class="$style.checked" v-show="(episode.state === 'finished')">
                  <Icon name="checked" viewBox="0 0 14 10" :class="$style.check" />
                </div>
                <span v-if="episode.id === 'intro'">{{$t('timeLine-trailer')}}</span>
                <span v-else-if="episode.id === 'sortir-de-l-endettement'">{{$t('timeLine-webinar')}}</span>
                <span v-else>{{$t('timeLine-episode') + " " + (index - 0)}}</span>
              </div>
              <div :class="$style.line"></div>
            </div>
            <div :class="$style.bottom">
              <img
                :src="'https://raw.githubusercontent.com/ntfreddy/think-future-app/master/assets/episodes/' + episode.id + '-small.jpg'"
                :class="$style.image"
              />
              <div :class="$style.clockBox" v-show="episode.state === 'today'">
                <Icon name="clock" viewBox="0 0 24 24" :class="$style.clock" />
              </div>
              <div :class="$style.content">
                <div :class="$style.date" v-show="episode.id !== 'intro'">{{episode.date}}</div>
                <div :class="$style.title">{{episode.title}}</div>
              </div>
            </div>
          </div>
          <div class="swiper-slide" :class="$style.empty" style="margin-right: 20px;"></div>
        </div>
        <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
      </div>
      <div
        class="swiper-button-prev"
        :class="$style.prev"
        tabindex="0"
        role="button"
        aria-label="Previous slide"
        aria-disabled="false"
        style
        ref="btnPrev"
      >
        <Icon name="prev-slide" viewBox="0 0 32 32" :class="$style.iconBtm" />
      </div>
      <div
        class="swiper-button-next"
        :class="$style.next"
        tabindex="0"
        role="button"
        aria-label="Next slide"
        aria-disabled="false"
        ref="btnNext"
      >
        <Icon name="next-slide" viewBox="0 0 32 32" :class="$style.iconBtm" />
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "./Icon";

export default {
  name: "TimeLine",
  components: {
    Icon,
  },
  props: ["episodes", "slides"],
  data: function () {
    return {
      activeSwiperIndex: this.activeIndex,
      clickedIndex: 0,
      lineVisible: false,
      ready: this.ready,
      swiperOption: {
        slidesPerView: "auto",
        spaceBetween: 20,
        threshold: 40,
        watchOverflow: false,
        initialSlide: this.activeIndex,
        pagination: false,
        animating: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  computed: {
    activeIndex: function () {
      return this.$store.state.episodes.activeIndex;
    },
  },
  mounted() {
    var slider = this.gallery;
    this.gallery.on("transitionEnd", function () {
      slider.activeSwiperIndex = slider.realIndex;
    });
  },
  methods: {
    goToSlide: function (index) {
      var episode = this.episodes[index];
      this.$store.commit("episodes/SET_EPISODE", episode);
      this.$store.commit("episodes/SET_ACTIVE_INDEX", index);
    },
  },
};
</script>

<style>
.swiper-button-prev:after,
.swiper-button-next:after {
  opacity: 0;
}
</style>
<style module>
.timeLine {
  position: relative;
  opacity: 0;
  -webkit-transition: opacity 0.3s ease;
  transition: opacity 0.3s ease;
}
.timeLine.ready {
  opacity: 1;
}
@media (max-width: 767.98px) {
  .timeLine {
    padding-top: 15px;
  }
}
.swiperContainer {
  overflow: visible;
  padding-top: 30px;
  width: calc(50vw + 50%);
}
.empty {
  width: 40px;
}
.slide {
  padding-top: 44px;
  width: 240px;
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  cursor: pointer;
}
.slide.disableSlide .image {
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  -o-filter: grayscale(100%);
  filter: grayscale(100%);
  -webkit-filter: grey;
  filter: gray;
}
.slide.disableSlide .title {
  color: hsla(0, 0%, 100%, 0.4);
}
.slide:nth-last-child(-n + 2) .line {
  width: 140%;
}
.top {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
}
.label {
  color: #fff;
  padding: 4px 15px 3px 14px;
  background: #2a2a2e;
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  text-align: center;
  letter-spacing: 2.6px;
  text-transform: uppercase;
  border-radius: 12px;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  border: 2px solid hsla(0, 0%, 100%, 0);
  position: relative;
  z-index: 4;
}
.label.active {
  border: 2px solid #2469c7;
  padding: 3px 12px 3px 13px;
}
.label.finished {
  padding: 4px 25px 3px 14px;
}
.label.today {
  padding: 4px 18px 2px 19px;
  background: #2469c7;
  color: #fff;
}
.label.closed {
  color: hsla(0, 0%, 100%, 0.4);
}
.checked {
  width: 25px;
  height: 25px;
  background: #2469c7;
  border-radius: 50%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  position: absolute;
  top: -2px;
  right: -7px;
}
.check {
  font-size: 13px;
  color: #fff;
}
.line {
  width: 110%;
  height: 2px;
  background-color: #303030;
  margin-top: -14px;
  z-index: 4;
}
.bottom {
  width: 240px;
  height: 135px;
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  cursor: pointer;
  overflow: hidden;
  border-radius: 12px;
}
.bottom:after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(#000),
    color-stop(94.12%, transparent)
  );
  background: linear-gradient(0deg, #000, transparent 94.12%);
}
.clockBox {
  position: absolute;
  top: 0;
  right: 0;
  padding: 6px 9px;
  background: #2469c7;
  border-radius: 0 12px;
}
.clock {
  font-size: 24px;
  color: #fff;
}
.content {
  position: relative;
  width: 240px;
  height: 135px;
  padding: 10px 17px;
  z-index: 3;
  width: 100%;
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}
.date {
  font-size: 14px;
  line-height: 21px;
  color: hsla(0, 0%, 100%, 0.4);
}
.title {
  font-weight: 700;
  font-size: 19px;
  line-height: 22px;
  color: #fff;
}
.image {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  position: absolute;
  border-radius: 12px;
  top: 0;
  left: 0;
}
.next,
.prev {
  content: "";
  bottom: 42px;
  width: 135px;
  height: 135px;
  z-index: 3;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  overflow: hidden;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  position: absolute;
  outline: 0;
  z-index: 10;
}
.next.swiper-button-disabled,
.prev.swiper-button-disabled {
  display: none;
}
.prev {
  left: 0;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#010406),
    to(rgba(2, 3, 5, 0))
  );
  background: linear-gradient(90deg, #010406 0, rgba(2, 3, 5, 0));
}
.prev .iconBtm {
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
  margin-left: 20px;
}
.next {
  right: 0;
  background: -webkit-gradient(
    linear,
    right top,
    left top,
    from(#010406),
    to(rgba(2, 3, 5, 0))
  );
  background: linear-gradient(270deg, #010406 0, rgba(2, 3, 5, 0));
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
}
.next .iconBtm {
  margin-right: 20px;
}
.iconBtm {
  font-size: 32px;
  cursor: pointer;
  color: #2469c7;
  -webkit-transition: all 0.3s ease-in;
  transition: all 0.3s ease-in;
  position: relative;
}
.iconBtm:hover {
  opacity: 0.8;
}

</style>