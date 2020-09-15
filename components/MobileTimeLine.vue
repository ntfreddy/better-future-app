<template>
  <div :class="$style.timeline">
    <div :class="$style.message">
      {{$t('mobile-time-line-message-1')}}
      <strong>{{$t('mobile-time-line-message-2')}}</strong>
    </div>
    <div
      v-for="(episode, index) in episodes"
      :key="episode.id"
      :class="{[$style.episode]:true, [$style.disableSlide]: episode.state === 'closed'}"
      v-on:click="changeEpisode(index)"
    >
      <div :class="$style.left">
        <div :class="$style.line"></div>
        <div
          :class="{[$style.label]:true, [$style.active]: (activeIndex == index), [$style.today]: (episode.state == 'today'),[$style.closed]: (episode.state === 'closed'),[$style.finished]: (episode.state === 'finished'),}"
        >
          <div :class="$style.checked" v-show="(episode.state === 'finished')">
            <Icon id="checked" fill="none" viewBox="0 0 14 10" :class="$style.check">
              <path d="M1.5 4l4.75 4 6.25-6.5" stroke="#fff" stroke-width="2"></path>
            </Icon>
          </div>
          <span v-if="index === 0">{{$t('timeLine-trailer')}}</span>
          <span v-else>{{$t('timeLine-episode') + " " + index}}</span>
        </div>
      </div>
      <div :class="$style.right">
        <img
          :src="'https://raw.githubusercontent.com/ntfreddy/think-future-app/master/assets/episodes/' + episode.id + '-small.jpg'"
          :class="$style.image"
        />
        <div :class="$style.clockBox" v-show="episode.state === 'today'">
          <Icon id="clock" fill="none" viewBox="0 0 24 24" :class="$style.clock">
            <path
              d="M2.487 4.631a.934.934 0 00.6-.217L5.632 2.29a.938.938 0 00-1.2-1.44L1.886 2.974a.938.938 0 00.6 1.657zM18.366 2.29l2.546 2.124a.934.934 0 001.32-.12.937.937 0 00-.12-1.32L19.568.85a.937.937 0 10-1.2 1.44zM19.822 5.115a10.98 10.98 0 00-6.931-3.204V.937a.937.937 0 10-1.875 0v.982a10.979 10.979 0 00-6.838 3.196 10.99 10.99 0 00-3.24 7.822 10.99 10.99 0 003.24 7.823c.193.193.393.38.598.557l-.753 1.266a.938.938 0 001.61.959l.667-1.119A10.993 10.993 0 0012 24c2.032 0 3.983-.543 5.7-1.579l.666 1.12a.937.937 0 101.611-.958l-1.172-1.969a.937.937 0 00-1.361-.275A9.113 9.113 0 0112 22.125c-5.066 0-9.188-4.122-9.188-9.188C2.813 7.871 6.934 3.75 12 3.75c5.066 0 9.187 4.121 9.187 9.188a9.194 9.194 0 01-1.132 4.422.937.937 0 101.643.904 11.075 11.075 0 001.364-5.327 10.99 10.99 0 00-3.24-7.822z"
              fill="#fff"
            />
            <path
              d="M11.953 6.047a.937.937 0 00-.937.937v5.953c0 .25.098.488.274.663l2.652 2.652a.935.935 0 001.326 0 .938.938 0 000-1.326L12.89 12.55V6.984a.937.937 0 00-.938-.937z"
              fill="#fff"
            />
          </Icon>
        </div>
        <div :class="$style.content">
          <div :class="$style.date" v-show="episode.id !== 'intro'">{{episode.date}}</div>
          <div :class="$style.title">{{episode.title}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    activeIndex: function () {
      return this.$store.state.episodes.activeIndex;
    },
    episodes: function () {
      return this.$store.state.episodes.episodes;
    },
  },
  methods: {
    changeEpisode: function (index) {
      this.$emit("close");
      var episode = this.episodes[index];
      this.$store.commit("episodes/SET_EPISODE", episode);
    },
    getImage: function (episode) {
      return episode.youtubeId
        ? "https://img.youtube.com/vi/".concat(
            episode.youtubeId,
            "/sddefault.jpg"
          )
        : "../assets/earth.jpg";
    },
  },
};
</script>

<style module>
.timeline {
  width: 100%;
}
.message {
  font-size: 14px;
  line-height: 21px;
  color: #fff;
  background: #2a2a2e;
  border-radius: 12px;
  padding: 9px 18px;
  margin-bottom: 30px;
}
.episode {
  padding-top: 44px;
  width: 100%;
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: end;
  -ms-flex-align: end;
  align-items: flex-end;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  cursor: pointer;
  margin-bottom: 15px;
}
.episode.disableSlide .image {
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  -o-filter: grayscale(100%);
  filter: grayscale(100%);
  -webkit-filter: grey;
  filter: gray;
}
.episode.disableSlide .title {
  color: hsla(0, 0%, 100%, 0.4);
}
.episode:last-child .left .line {
  height: 134%;
}
.left {
  position: absolute;
  top: 0;
  left: 15px;
  height: 100%;
  width: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
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
  margin-left: -18px;
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
  height: 110%;
  width: 2px;
  background-color: #303030;
  margin-top: 0;
  z-index: 4;
}
.right {
  width: 292px;
  height: 164px;
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
.right:after {
  content: "";
  display: block;
  left: 0;
  width: 100%;
  height: 100%;
  background: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(#000),
    color-stop(94.12%, transparent)
  );
  background: linear-gradient(0deg, #000, transparent 94.12%);
}
.clockBox,
.right:after {
  position: absolute;
  top: 0;
}
.clockBox {
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
  top: 0;
  left: 0;
}
</style>