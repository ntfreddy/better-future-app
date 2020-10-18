<template>
  <div :class="$style.about">
    <div :class="$style.blur">
      <div :class="$style.blurBackground"></div>
    </div>
    <div :class="{ [$style.content]: true, [$style.active]: !locked }">
      <div
        :class="$style.label"
        v-show="episode.id !== 'intro'"
        v-on:click="onTimeout()"
      >
        {{ $t("about-label") }}
      </div>
      <p :class="$style.title">{{ episode.title }}</p>
      <div :class="$style.bottom">
        <div>
          <QuillContent
            :ops="episode.announce.ops"
            mini="false"
            ref="content"
            :class="$style.text"
            v-show="episode.announce"
          />
        </div>
        <div :class="$style.buttons" v-show="!locked">
          <div :class="[$style.btn, $style.watchBtn]" v-on:click="watch">
            {{
              $t("about-watch") +
              ("intro" === episode.id
                ? $t("about-trailer")
                : $t("about-episode"))
            }}
            <Icon name="play" viewBox="0 0 13 17" :class="$style.play" />
          </div>
          <div
            :class="[$style.btn, $style.listenBtn]"
            v-show="episode.soundcloud"
          >
            {{ $t("about-listen") }}
          </div>
        </div>
        <client-only>
          <countdown
            :time="episode.distance > 0 ? episode.distance : 0"
            :transform="transform"
            @end="onTimeout()"
            v-show="episode.distance > 0 && locked"
          >
            <template slot-scope="props">
              <div :class="$style.start">
                <div :class="$style.startTitle">
                  {{ $t("about-startTitle") }}
                </div>
                <div :class="$style.time">
                  <div :class="$style.box">
                    <div :class="$style.number">{{ props.days.digits }}</div>
                    <div :class="$style.timeLabel">
                      {{ $t(props.days.word) }}
                    </div>
                  </div>
                  <div :class="$style.box">
                    <div :class="$style.number">{{ props.hours.digits }}</div>
                    <div :class="$style.timeLabel">
                      {{ $t(props.hours.word) }}
                    </div>
                  </div>
                  <div :class="$style.box">
                    <div :class="$style.number">{{ props.minutes.digits }}</div>
                    <div :class="$style.timeLabel">
                      {{ $t(props.minutes.word) }}
                    </div>
                  </div>
                  <div :class="$style.box">
                    <div :class="$style.number">{{ props.seconds.digits }}</div>
                    <div :class="$style.timeLabel">
                      {{ $t(props.seconds.word) }}
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </countdown>
        </client-only>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

import QuillContent from "./QuillContent";
import Icon from "./Icon";

export default {
  name: "About",
  props: ["episode"],
  components: {
    QuillContent,
    Icon,
  },
  data() {
    return {
      /* content: {
        ops: [
          {
            insert:
              "Throughout this series, you will learn that Jesus’ love for you can be found at the heart of Revelation, and that its prophecies reveal hope for your future.\\n",
          },
        ],
      },*/
      config: {
        readOnly: false,
        placeholder: "Compose an epic...",
      },
    };
  },
  computed: {
    text: function () {
      return this.episode && this.episode.announce
        ? this.episode.announce
        : this.episode && this.episode.description
        ? this.episode.description
        : null;
    },
    locked: function () {
      if (!this.episode) {
        return true;
      }

      var episode = this.episode;
      var state = episode.state;
      var distance = episode.distance;
      return "closed" === state || ("today" === state && distance > 0);
    },
  },
  methods: {
    ...mapActions({
      UnlockEpisode: "episodes/UNLOCK_EPISODE",
    }),
    onTimeout: function () {
      this.UnlockEpisode(this.episode);      
      this.$emit("update-show-player", this.episode);
    },
    watch: function () {
      this.$emit("watch");
    },
    listen: function () {
      this.$emit("listen");
    },
    transform(props) {
      Object.entries(props).forEach(([key, value]) => {
        // Adds leading zero
        const digits = value < 10 ? "0".concat(value) : value;

        // uses singular form when the value is less than 2
        const word = value < 2 ? key.replace(/s$/, "") : key;

        props[key] = {
          number: value,
          digits: digits,
          word: word,
        };
      });

      return props;
    },
  },
  mounted: function () {
    //console.log("announce : ", this.episode.announce);
  },
};
</script>

<style module>
.about {
  border-radius: 32px;
  overflow: hidden;
  position: relative;
}
@media (max-width: 767.98px) {
  .about {
    border-radius: 16px;
    min-height: 200px;
  }
}
.blur,
.blurBackground {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.blurBackground {
  background: url(../assets/earth.jpg) #000 no-repeat top fixed;
  -webkit-filter: blur(18px);
  filter: blur(18px);
  -webkit-transform: scale(1.13);
  transform: scale(1.13);
}
.content {
  width: 100%;
  height: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 65px 184px 65px 65px;
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  background: rgba(36, 105, 199, 0.3);
}
.content.active {
  background: rgba(0, 0, 0, 0.4);
}
@media (min-width: 576px) and (max-width: 767.98px) {
  .content {
    padding: 30px 26px 91px;
  }
}
@media (max-width: 575.98px) {
  .content {
    padding: 30px 14px 91px;
  }
}
@media (min-width: 768px) and (max-width: 991.98px) {
  .content {
    padding: 50px 30px 91px;
  }
}
.bottom {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  height: 100%;
}
.label {
  font-size: 14px;
  line-height: 145.4%;
  letter-spacing: 1.85px;
  font-weight: 700;
  text-transform: uppercase;
  color: #fff;
  margin-bottom: 19px;
}
@media (max-width: 767.98px) {
  .label {
    margin-bottom: 14px;
  }
}
.title {
  font-family: Bebas Neue;
  font-size: 77px;
  line-height: 76px;
  color: #fff;
  letter-spacing: 1.1px;
  margin: 0 0 32px;
}
@media (max-width: 767.98px) {
  .title {
    font-size: 48px;
    line-height: 45px;
    margin-bottom: 17px;
  }
}
.text {
  font-size: 16px;
  line-height: 24px;
  color: hsla(0, 0%, 100%, 0.6);
  margin-bottom: 15px;
}
@media (max-width: 991.98px) {
  .start {
    margin-bottom: 50px;
  }
}
@media (max-width: 767.98px) {
  .start {
    margin-top: 30px;
    margin-bottom: 30px;
  }
}
.startTitle {
  font-weight: 700;
  font-size: 14px;
  line-height: 22px;
  color: #fff;
  margin-bottom: 22px;
  text-transform: uppercase;
  letter-spacing: 1.8px;
}
@media (max-width: 767.98px) {
  .startTitle {
    margin-bottom: 28px;
  }
}
.box,
.time {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.box {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  text-transform: lowecase;
  position: relative;
}
.box:not(:last-child) {
  margin-right: 45px;
}
.box:not(:last-child):after {
  content: "";
  position: absolute;
  top: 34px;
  right: -28px;
  width: 12px;
  height: 12px;
  border: 2px solid hsla(0, 0%, 100%, 0.4);
  border-radius: 50%;
}
@media (max-width: 767.98px) {
  .box:not(:last-child):after {
    top: 24px;
    right: -23px;
  }
}
@media (max-width: 575.98px) {
  .box:not(:last-child) {
    margin-right: 33px;
  }
}
.number {
  font-family: Bebas Neue;
  font-size: 94px;
  line-height: 85px;
  margin-bottom: 9px;
  color: #fff;
  letter-spacing: 1px;
}
@media (max-width: 767.98px) {
  .number {
    font-size: 86px;
    line-height: 65px;
    margin-bottom: 12px;
  }
}
@media (max-width: 575.98px) {
  .number {
    font-size: 60px;
  }
}
.timeLabel {
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  font-weight: 400;
  color: hsla(0, 0%, 100%, 0.6);
}
.buttons {
  -webkit-box-align: end;
  -ms-flex-align: end;
  align-items: flex-end;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
.btn,
.buttons {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.btn {
  color: #fff;
  border-radius: 40px;
  padding: 19px 42px 19px 51px;
  font-weight: 700;
  font-size: 19px;
  letter-spacing: 0;
  line-height: 22px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.3s ease-in;
  transition: all 0.3s ease-in;
  outline: 0;
  margin-top: 60px;
  border: 2px solid #2469c7;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  cursor: pointer;
}
@media (max-width: 767.98px) {
  .btn {
    margin-top: 20px;
  }
}
.btn .play {
  color: #fff;
  margin-left: 21px;
  font-size: 15px;
}
.btn.watchBtn {
  margin-right: 20px;
}
.btn.listenBtn {
  padding: 13px 34px;
  font-size: 13px;
}
.btn:hover,
.btn:hover .play {
  color: hsla(0, 0%, 100%, 0.9);
}
</style>