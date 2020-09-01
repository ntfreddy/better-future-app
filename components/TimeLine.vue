<template>
  <div class="d-lg-flex d-none" :class="[$style.timeLine, $style.ready]">
    <div class="container">
      <div
        v-swiper:gallery="swiperOption"
        class="swiper-container swiper-container-horizontal" :class="$style.swiperContainer"
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
              <div :class="{[$style.label]:true, [$style.active]: (activeIndex == index), [$style.today]: (episode.state == 'today'),[$style.closed]: (episode.state === 'closed'),[$style.finished]: (episode.state === 'finished'),}">
                <div :class="$style.checked" v-show="(episode.state === 'finished')">
                  <svg viewBox="0 0 14 10" class="icon icon--checked" :class="[$style.icon, $style.check]">
                    <use xlink:href="#checked" >
                      <svg fill="none" viewBox="0 0 14 10" id="checked" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.5 4l4.75 4 6.25-6.5" stroke="#fff" stroke-width="2">
                        </path>
                        </svg>
                      </use>
                  </svg>
                </div>
                <span style="display: none;">trailer</span>
                <span>{{$t('timeLine-episode') + " " + index}}</span>
              </div>
              <div :class="$style.line"></div>
            </div>
            <div :class="$style.bottom">
              <img :src="'https://storage.googleapis.com/bible.awr.org/episodes/' + episode.id + '-small.jpg'" :class="$style.image" />
              <div :class="$style.clockBox" v-show="episode.state === 'today'">
                <svg viewBox="0 0 24 24" class="icon icon--clock" :class="[$style.icon, $style.clock]">
                  <use xlink:href="#clock">
                    <svg
                      fill="none"
                      viewBox="0 0 24 24"
                      id="clock"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.487 4.631a.934.934 0 00.6-.217L5.632 2.29a.938.938 0 00-1.2-1.44L1.886 2.974a.938.938 0 00.6 1.657zM18.366 2.29l2.546 2.124a.934.934 0 001.32-.12.937.937 0 00-.12-1.32L19.568.85a.937.937 0 10-1.2 1.44zM19.822 5.115a10.98 10.98 0 00-6.931-3.204V.937a.937.937 0 10-1.875 0v.982a10.979 10.979 0 00-6.838 3.196 10.99 10.99 0 00-3.24 7.822 10.99 10.99 0 003.24 7.823c.193.193.393.38.598.557l-.753 1.266a.938.938 0 001.61.959l.667-1.119A10.993 10.993 0 0012 24c2.032 0 3.983-.543 5.7-1.579l.666 1.12a.937.937 0 101.611-.958l-1.172-1.969a.937.937 0 00-1.361-.275A9.113 9.113 0 0112 22.125c-5.066 0-9.188-4.122-9.188-9.188C2.813 7.871 6.934 3.75 12 3.75c5.066 0 9.187 4.121 9.187 9.188a9.194 9.194 0 01-1.132 4.422.937.937 0 101.643.904 11.075 11.075 0 001.364-5.327 10.99 10.99 0 00-3.24-7.822z"
                        fill="#fff"
                      />
                      <path
                        d="M11.953 6.047a.937.937 0 00-.937.937v5.953c0 .25.098.488.274.663l2.652 2.652a.935.935 0 001.326 0 .938.938 0 000-1.326L12.89 12.55V6.984a.937.937 0 00-.938-.937z"
                        fill="#fff"
                      />
                    </svg>
                  </use>
                </svg>
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
        class="swiper-button-prev" :class="$style.prev"
        tabindex="0"
        role="button"
        aria-label="Previous slide"
        aria-disabled="false"
        style
        ref="btnPrev"
      >
        <svg viewBox="0 0 32 32" class="icon icon--next-slide" :class="[$style.icon, $style.iconBtm]">
          <use xlink:href="#next-slide">
            <svg
              fill="none"
              viewBox="0 0 32 32"
              id="next-slide"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13 22l7-6.5L13 9" stroke="#2469C7" stroke-width="2" />
              <circle cx="16" cy="16" r="15" stroke="#2469C7" stroke-width="2" />
            </svg>
          </use>
        </svg>
      </div>
      <div
        class="swiper-button-next" :class="$style.next"
        tabindex="0"
        role="button"
        aria-label="Next slide"
        aria-disabled="false"
        ref="btnNext"
      >
        <svg viewBox="0 0 32 32" class="icon icon--next-slide" :class="[$style.icon, $style.iconBtm]">
          <use xlink:href="#next-slide">
            <svg
              fill="none"
              viewBox="0 0 32 32"
              id="next-slide"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13 22l7-6.5L13 9" stroke="#2469C7" stroke-width="2" />
              <circle cx="16" cy="16" r="15" stroke="#2469C7" stroke-width="2" />
            </svg>
          </use>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
      return this.$store.state.episodes.activeIndex
    },
  },
  mounted() {
    var slider = this.gallery;
    //this.gallery.on('click', this.clickOnSlide);
    this.gallery.on("transitionEnd", (function() {
        slider.activeSwiperIndex = slider.realIndex
    }))

    console.log("Current Swiper instance object", this.gallery);
    //this.gallery.slideTo(2, 1000, false);
  },
  methods: {
   /* clickOnSlide: function(event){
      this.goToSlide(this.gallery.clickedIndex);
    },*/
    goToSlide: function (index) {      
      
      console.log("index", index);
     var episode = this.episodes[index];
     this.$store.commit("episodes/SET_EPISODE", episode);
    },
    getImage: function (t) {
      return t.youtubeId
        ? "https://img.youtube.com/vi/".concat(t.youtubeId, "/sddefault.jpg")
        : "../assets/earth.jpg";
    },
  },
};
</script>

<style>
.swiper-button-prev:after, .swiper-button-next:after {
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

.icon.stroked_1yLoG use {
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