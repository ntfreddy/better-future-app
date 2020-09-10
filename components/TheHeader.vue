<template>
  <div
    id="section-header"
    :class="{[$style.header]:true, [$style.showReminder] : showReminder}"
  >
    <div :class="[$style.inner, $style.ready]">
      <TopPanel
        :showNav="showNav"
        v-on:update:show-nav="showNav = $event"
        v-on:update:show-reminder="showReminder = $event"
        :hideReminder="hideReminder"
        :showReminder="showReminder"
      />
        <Welcome class="d-lg-none d-flex" />
      <div :class="$style.introBox">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12" :class="$style.content">
              <div :class="$style.intro" v-show="episode && episode.id">
                <About
                  :class="$style.left"
                  :episode="episode"
                  v-on:watch="watch"
                  v-on:listen="listen"
                />
                <div
                  :class="$style.right"
                  :style="'background-image:url(https://storage.googleapis.com/bible.awr.org/episodes/' + episode.id + '.jpg);'"
                ></div>
                <div
                  :class="$style.cami"
                  :style="'background-image:url(https://storage.googleapis.com/bible.awr.org/cami/' + episode.id + '.png);'"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TimeLine :episodes="episodes" :class="$style.line" />
      <div id="section-episode-video" :class="$style.videoContainer">
        <div class="container" :class="$style.container">
          <div class="row justify-content-center">
            <div class="col-12">
              <Youtube :youtubeId="episode.youtubeId" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";

import TopPanel from "./TopPanel";
import Welcome from "./Welcome";
import TimeLine from "./TimeLine";
import About from "./About";
import Youtube from "./Youtube";

export default {
  name: "TheHeader",
  components: {
    TopPanel,
    Welcome,
    TimeLine,
    About,
    Youtube,
  },
  props: [],
  data: function () {
    return {
      ready: false,
      showNav: false,
      showReminder: true,
      playerVars: {
        rel: 0,
        showinfo: 0,
      },
    };
  },
  computed: {
    ...mapState({
      episode: (state) => state.episodes.episode,
      activeIndex: (state) => state.episodes.activeIndex,
    }),
    hideReminder: function () {
      let v =
        this.$session !== undefined &&
        this.$session.get("hideReminder") != undefined &&
        this.$session.get("hideReminder");

      console.log("hideReminder : ", v);
      return v;
    },
    isRegistred: function () {
      console.log(
        "$session.exists : ",
        this.$session !== undefined &&
          this.$session.exists != undefined &&
          this.$session.exists()
      );
      return (
        this.$session !== undefined &&
        this.$session.exists != undefined &&
        this.$session.exists()
      );
    },
    ...mapGetters({
      episodes: "episodes/episodes",
    }),
  },
  mounted: function () {
    window.addEventListener("resize", this.onResize);
    this.ready = true;
    this.showReminder = !this.hideReminder && !this.isRegistred;
    console.log("showReminder : ", this.showReminder);
  },
  methods: {
    ...mapMutations({
      SetTime: "episodes/SET_TIME",
      SetStartTime: "episodes/SET_START_TIME",
      SetEpisode: "episodes/SET_EPISODE",
    }),
    watch: function () {
      this.$scrollTo(
        document.getElementById("section-episode-video"),
        -50,
        500
      );
    },
    listen: function () {
      this.$scrollTo(document.getElementById("section-soundcloud"), -50, 500);
    },
    onResize: function () {
      this.showNav = false;
    },
    getImage: function (t) {
      return t.youtubeId
        ? "https://img.youtube.com/vi/".concat(t.youtubeId, "/sddefault.jpg")
        : "../assets/earth.jpg";
    },
  },
};
</script>

<style module>
.header {
  background: url(../assets/earth.jpg) #000 no-repeat top;
  width: 100%;
  padding: 0;
}

@media (max-width: 991.98px) {
  .header {
    padding-top: 70px;
  }
  .header.showReminder {
    padding-top: 170px;
  }
}
.inner {
  min-height: 1065px;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.inner.ready {
  opacity: 1;
}
@media (max-width: 991.98px) {
  .inner {
    min-height: unset;
  }
}

.line {
  padding-bottom: 40px;
}

.introBox {
  padding-top: 26px;
}
@media (max-width: 991.98px) {
  .introBox {
    padding-top: 0;
  }
}

.intro {
  display: flex;
  margin-bottom: 32px;
  position: relative;
}
@media (max-width: 991.98px) {
  .intro {
    flex-direction: column;
    margin-bottom: 0;
  }
}

.right {
  width: 110%;
  height: 638px;
  background: url(../assets/earth.jpg);
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 570px;
  border-radius: 32px;
}
@media (max-width: 991.98px) {
  .right {
    position: relative;
    top: auto;
    left: auto;
    margin-top: -35px;
    width: 100%;
    height: 100%;
    min-height: 474px;
    border-radius: 16px;
    margin-bottom: 30px;
  }
}
@media (min-width: 576px) and (max-width: 767.98px) {
  .right {
    min-height: 313px;
  }
}
@media (max-width: 575.98px) {
  .right {
    min-height: 235px;
  }
}
.cami {
  width: 557px;
  height: 672px;
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  bottom: 0;
  left: 634px;
  z-index: 10;
}
@media (max-width: 991.98px) {
  .cami {
    width: 424px;
    height: 511px;
    bottom: 30px;
    left: 50%;
    transform: translateX(-65%);
  }
}
@media (max-width: 767.98px) {
  .cami {
    width: 278px;
    height: 335px;
  }
}
@media (max-width: 575.98px) {
  .cami {
    width: 213px;
    height: 257px;
  }
}
@media (min-width: 992px) and (max-width: 1199.98px) {
  .cami {
    left: 460px;
  }
}

.left {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 693px;
  height: 638px;
}
@media (max-width: 991.98px) {
  .left {
    width: 100%;
    height: 100%;
    min-height: 100px;
  }
}

.content {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}
</style>