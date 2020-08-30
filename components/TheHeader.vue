<template>
  <div id="section-header" class="header_1NV2O" v-bind:class="{showReminder_Z0Cxe : !hideReminder}">
    <div class="inner_LVYhi ready_2aiKi">
      <TopPanel :showNav="showNav" v-on:update:show-nav="showNav = $event" :hideReminder="hideReminder">
        <Welcome class="d-lg-none d-flex" :nbr="1"/>
      </TopPanel>
      <div class="introBox_1smWl">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12 content_243WD">
              <div class="intro_2QiF3">
              <About />
                <div
                  class="right_3zKwM"
                  style="background-image:url(https://storage.googleapis.com/bible.awr.org/episodes/the-counterfeit.jpg);"
                ></div>
                <div
                  class="cami_1izp3"
                  style="background-image:url(https://storage.googleapis.com/bible.awr.org/cami/the-counterfeit.png);"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TimeLine :slides="data.slides" />
      <div id="section-episode-video" class="videoContainer_5zja3">
        <div class="container container_olEqQ">
          <div class="row justify-content-center">
            <div class="col-12">
              <Youtube />
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
    Youtube
  },
  props: ["data", "locomotiveScroll"],
  data: function () {
    return {
      ready: false,
      showNav: false,
      playerVars: {
        rel: 0,
        showinfo: 0,
      },
    };
  },
  computed: {
    ...mapState({
      episode: "episode",
      activeIndex: "activeIndex",
    }),
    hideReminder: function () {
      let v = (this.$session !== undefined && this.$session.get("hideReminder"));

      console.log("hideReminder : ", v)
      return v;
    },
    ...mapGetters({
      episodes: "episodes/episodes",
    }),
  },
  mounted: function () {
    window.addEventListener("resize", this.onResize);
    this.ready = true;
  },
  methods: {
    ...mapMutations({
      SetTime: "episodes/SET_TIME",
      SetStartTime: "episodes/SET_START_TIME",
      SetEpisode: "episodes/SET_EPISODE",
    }),
    onUpdateShowNav(event){
      this.showNav = event;
      
      console.log("event : ", event);
      console.log("showNav Header : ", this.showNav);
    },
    watch: function () {
      this.$scroll.scrollTo(
        document.getElementById("section-episode-video"),
        500,
        {
          offset: -50,
        }
      );
    },
    listen: function () {
      this.$scroll.scrollTo(
        document.getElementById("section-soundcloud"),
        500,
        {
          offset: -50,
        }
      );
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

<style>
.header_1NV2O {
  background: url(../assets/earth.jpg) #000 no-repeat top;
  width: 100%;
  padding: 0;
}
@media (max-width: 991.98px) {
  .header_1NV2O {
    padding-top: 70px;
  }
  .header_1NV2O .showReminder_Z0Cxe {
    padding-top: 170px;
  }
}
.inner_LVYhi {
  min-height: 1065px;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.inner_LVYhi.ready_2aiKi {
  opacity: 1;
}
@media (max-width: 991.98px) {
  .inner_LVYhi {
    min-height: unset;
  }
}

.burgerBox_iKUlt.movedBurger_1bfus {
  top: 137px;
}
.burger_1odGg {
  font-size: 24px;
  cursor: pointer;
  display: none !important;
}
@media (min-width: 992px) {
  .burger_1odGg {
    display: block !important;
  }
}
.container_1LqMP {
  padding-top: 22px;
}
@media (max-width: 767.98px) {
  .container_1LqMP {
    padding: 0;
  }
}
.column_3i0lk {
  display: flex;
}
@media (max-width: 991.98px) {
  .column_3i0lk {
    display: none;
  }
}
.logoInContainer_1vXT0 {
  background: url(../assets/unlocking-logo.svg);
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  width: 202px;
  height: 98px;
  margin-left: -35px;
  flex-shrink: 0;
}
@media (max-width: 991.98px) {
  .logoInContainer_1vXT0 {
    display: none;
  }
}
@media (min-width: 992px) and (max-width: 1199.98px) {
  .logoInContainer_1vXT0 {
    width: 180px;
    margin-left: -30px;
  }
}
.content_2tSnN {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}
@media (min-width: 992px) {
  .content_2tSnN {
    width: 100%;
    min-height: 98px;
    justify-content: flex-end;
  }
}
@media (min-width: 992px) and (max-width: 1199.98px) {
  .content_2tSnN {
    padding: 0 25px;
  }
}
.list_2E554 {
  display: flex;
  justify-content: flex-end;
}
@media (max-width: 991.98px) {
  .list_2E554 {
    display: none;
  }
}
.link_3vmMC {
  display: flex;
  align-items: center;
  cursor: pointer;
  min-width: 40px;
  position: relative;
}
.link_3vmMC:not(:last-child) {
  margin-right: 31px;
}
@media (min-width: 992px) and (max-width: 1199.98px) {
  .link_3vmMC:not(:last-child) {
    margin-right: 15px;
  }
}
.link_3vmMC:hover .title_26Zvz {
  color: #2469c7;
}
.link_3vmMC:hover .number_T0JEA {
  display: none;
}
.link_3vmMC:hover .line_394cs {
  display: block;
  height: 1px;
  background: #2469c7;
  -webkit-animation: increase_1jG6U 0.3s ease-in;
  animation: increase_1jG6U 0.3s ease-in;
}
.line_394cs {
  display: none;
  padding-top: 2px;
  margin-bottom: 6px;
  margin-top: 4px;
  width: 40px;
  position: absolute;
  bottom: 30px;
}
.title_26Zvz {
  font-size: 16px;
  line-height: 24px;
  color: #fff;
  font-weight: 500;
  transition: all 0.3s ease-in;
}
.title_26Zvz:active,
.title_26Zvz:focus,
.title_26Zvz:hover {
  color: #2469c7;
}
.register_1_S6s {
  padding: 7px 50px;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #fff;
  border-radius: 40px;
  border: 2px solid #2469c7;
  margin-left: 30px;
  cursor: pointer;
  flex-shrink: 0;
  display: flex;
}
@media (max-width: 991.98px) {
  .register_1_S6s {
    display: none;
  }
}
@media (min-width: 992px) and (max-width: 1199.98px) {
  .register_1_S6s {
    margin-left: 15px;
    padding: 7px 30px;
  }
}

.register_3JMeQ,
.text_TQX0T {
  font-size: 16px;
}
.dots_3GUsn {
  margin-left: 8px;
  transition: all 0.2s ease-in;
}
.dots_3GUsn,
.text_TQX0T {
  font-size: 16px;
  color: #fff;
}
.text_TQX0T {
  width: 100%;
  font-weight: 700;
  line-height: 24px;
  margin: 0;
  text-align: right;
}
.text_TQX0T .highlight_3OswU {
  color: #2469c7;
}
@media (max-width: 991.98px) {
  .text_TQX0T {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
  }
}
@media (max-width: 991.98px) {
  .desc_3_jRW {
    display: none;
  }
}
.register_3JMeQ {
  padding: 7px 50px;
  font-weight: 700;
  font-size: 19px;
  line-height: 24px;
  color: #fff;
  border-radius: 40px;
  border: 2px solid #2469c7;
  margin-left: 30px;
  cursor: pointer;
  flex-shrink: 0;
  display: flex;
}
@media (max-width: 767.98px) {
  .register_3JMeQ {
    margin-left: 0;
  }
}
@media (max-width: 575.98px) {
  .register_3JMeQ {
    padding: 7px 30px;
  }
}
@media (max-width: 991.98px) {
  .register_3JMeQ {
    display: none;
  }
}
.toogle_n8_Tr {
  border: 2px solid #2469c7;
  box-sizing: border-box;
  border-radius: 40px;
  padding: 8px 21px;
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 21px;
  color: #fff;
  background: #2469c7;
  cursor: pointer;
  flex-shrink: 0;
  z-index: 5;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  margin-left: 20px;
  transition: all 0.2s ease-in;
}
.toogle_n8_Tr:hover {
  color: hsla(0, 0%, 100%, 0.8);
}
.toogle_n8_Tr:hover .dots_3GUsn {
  opacity: 0.8;
}
.mobilePanel_20GTo {
  display: none;
}
@media (max-width: 991.98px) {
  .mobilePanel_20GTo {
    display: flex;
  }
}
.row_19wGU {
  width: 100%;
  margin: 0;
}
.mobileColumn_1-A27 {
  width: 100%;
  padding: 0;
}
.content_2tSnN {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}
@media (min-width: 992px) {
  .content_2tSnN {
    width: 100%;
    min-height: 98px;
    justify-content: flex-end;
  }
}
@media (min-width: 992px) and (max-width: 1199.98px) {
  .content_2tSnN {
    padding: 0 25px;
  }
}
.logo_2EgrG {
  background: url(../assets/unlocking-logo.svg);
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  width: 210px;
  height: 113px;
  margin-left: -34px;
}
@media (max-width: 991.98px) {
  .logo_2EgrG {
    width: 137px;
    height: 70px;
    margin-left: -24px;
  }
}
@media (min-width: 992px) {
  .logo_2EgrG {
    position: absolute;
    top: 30px;
    left: -5px;
    width: 145px;
    height: 77px;
    margin: 0;
  }
}
@media (min-width: 992px) and (max-width: 1199.98px) {
  .logo_2EgrG {
    left: 25px;
  }
}
@media (min-width: 1600px) {
  .logo_2EgrG {
    top: 5px;
    left: 5px;
    width: 250px;
    height: 125px;
  }
}
.mobileBurgerBox_2Rs8u {
  width: 140px;
  height: 70px;
}
.mobileBurger_3fe6R {
  font-size: 24px;
  cursor: pointer;
  display: block;
  position: absolute;
  top: 23px;
  right: 5px;
}
.introBox_1smWl {
  padding-top: 26px;
}
@media (max-width: 991.98px) {
  .introBox_1smWl {
    padding-top: 0;
  }
}
.content_243WD {
  display: flex;
  flex-direction: column;
}
.intro_2QiF3 {
  display: flex;
  margin-bottom: 32px;
  position: relative;
}
@media (max-width: 991.98px) {
  .intro_2QiF3 {
    flex-direction: column;
    margin-bottom: 0;
  }
}

.left_A-koV {
  box-sizing: border-box;
  width: 693px;
  height: 638px;
}
@media (max-width: 991.98px) {
  .left_A-koV {
    width: 100%;
    height: 100%;
    min-height: 100px;
  }
}

.right_3zKwM {
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
  .right_3zKwM {
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
  .right_3zKwM {
    min-height: 313px;
  }
}
@media (max-width: 575.98px) {
  .right_3zKwM {
    min-height: 235px;
  }
}
.cami_1izp3 {
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
  .cami_1izp3 {
    width: 424px;
    height: 511px;
    bottom: 30px;
    left: 50%;
    transform: translateX(-65%);
  }
}
@media (max-width: 767.98px) {
  .cami_1izp3 {
    width: 278px;
    height: 335px;
  }
}
@media (max-width: 575.98px) {
  .cami_1izp3 {
    width: 213px;
    height: 257px;
  }
}
@media (min-width: 992px) and (max-width: 1199.98px) {
  .cami_1izp3 {
    left: 460px;
  }
}
</style>