<template>
  <div class="panel_3oR9C">
    <Reminder v-show="!hideReminder && !isRegistred" />

    <div class="burgerBox_iKUlt">
      <svg viewBox="0 0 24 11" class="icon icon--burger icon_2SKlE burger_1odGg">
        <use xlink:href="#burger">
          <svg fill="none" viewBox="0 0 24 11" id="burger" xmlns="http://www.w3.org/2000/svg">
            <path stroke="#fff" stroke-width="2" d="M24 1H0M24 10H12" />
          </svg>
        </use>
      </svg>
    </div>
    <div class="container container_1LqMP">
      <div class="row justify-content-center">
        <div class="col-lg-12 column_3i0lk">
          <div class="logoInContainer_1vXT0"></div>
          <div class="content_2tSnN" style="display: none;">
            <div class="list_2E554">
              <div class="link_3vmMC">
                <div class="line_394cs"></div>
                <div class="title_26Zvz">FAQ</div>
              </div>
              <div class="link_3vmMC">
                <div class="line_394cs"></div>
                <div class="title_26Zvz">Cami Oetman</div>
              </div>
              <div class="link_3vmMC">
                <div class="line_394cs"></div>
                <div class="title_26Zvz">Benefits</div>
              </div>
              <div class="link_3vmMC">
                <div class="line_394cs"></div>
                <div class="title_26Zvz">Audience</div>
              </div>
              <div class="link_3vmMC">
                <div class="line_394cs"></div>
                <div class="title_26Zvz">Advantages</div>
              </div>
              <div class="link_3vmMC">
                <div class="line_394cs"></div>
                <div class="title_26Zvz">Testimonials</div>
              </div>
            </div>
            <div class="register_1_S6s">Register</div>
          </div>
          <Welcome v-show="showNav" />
        </div>
      </div>
    </div>
    <div class="container mobilePanel_20GTo">
      <div class="row row_19wGU">
        <div class="col-12 mobileColumn_1-A27">
          <div class="content_2tSnN">
            <div class="logo_2EgrG"></div>
            <div class="mobileBurgerBox_2Rs8u">
              <svg viewBox="0 0 24 11" class="icon icon--burger icon_2SKlE mobileBurger_3fe6R">
                <use xlink:href="#burger" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

import Reminder from "./Reminder";
import Welcome from "./Welcome";

export default {
  name: "TopPanel",
  components: {
    Reminder,
    Welcome,
  },
  props: ["showNav", "hideReminder"],
  data: function () {
    return {};
  },
  computed: {
    ...mapState({
      totalQuestions: "total", // "total" same as "state => state.count"
    }),
    firstName: function () {
      return this.$session.firstName;
    },
    episode: function () {
      return this.$store.state.episodes.episode;
    },
    navigation: function () {
      return this.$store.state.navigation.list;
    },
    isRegistred: function () {
      //console.log("$session.exists : ", this.$session);
      return false;//this.$session.exists;
    },
  },
  watch: {
    "$store.state.episodes.episode": function () {
      this.setNavigation();
    },
    totalQuestions: function () {
      this.setNavigation();
    },
  },
  created: function () {
    this.setNavigation();
  },
  methods: {
    ...mapMutations({
      SetNavList: "navigation/SET_NAV_LIST",
    }),
    setNavigation: function () {
      var nav = [
        {
          id: "author",
          title: "Cami Oetman",
        },
        {
          id: "benefits",
          title: "Benefits",
        },
        {
          id: "audience",
          title: "Audience",
        },
        {
          id: "advantages",
          title: "Advantages",
        },
        {
          id: "testimonials",
          title: "Testimonials",
        },
      ];
      "opened" === this.episode.state &&
        this.totalQuestions > 0 &&
        nav.unshift({
          id: "questions",
          title: "FAQ",
        }),
        this.SetNavList(nav);
    },
    register: function () {
      this.$form.goToRegister();
    },
    scrollTo: function (t) {
      this.$scroll.scrollTo(document.getElementById("section-".concat(t)));
    },
    openNavigation: function () {
      this.$popup.open("episodeNav");
    },
    showNavigation: function () {
      this.$emit("update:show-nav", !this.showNav);
    },
    closeReminder: function () {
      this.$session.set("hideReminder", !0);
    },
    remind: function () {
      this.$form.goToRegister();
    },
  },
};
</script>

<style>
.panel_3oR9C {
  position: relative;
  z-index: 11;
}
@media (max-width: 991.98px) {
  .panel_3oR9C {
    background: #121212;
    padding: 0;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
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
.content_2tSnN {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  position: relative;
}
@media (min-width: 992px) {
  .content_2tSnN {
    width: 100%;
    min-height: 98px;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
  }
}
@media (min-width: 992px) and (max-width: 1199.98px) {
  .content_2tSnN {
    padding: 0 25px;
  }
}
.mobileColumn_1-A27 {
  width: 100%;
  padding: 0;
}
.row_19wGU {
  width: 100%;
  margin: 0;
}
.logoInContainer_1vXT0 {
  background: url(../assets/unlocking-logo.svg);
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  width: 202px;
  height: 98px;
  margin-left: -35px;
  -ms-flex-negative: 0;
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
.burgerBox_iKUlt {
  width: 70px;
  height: 70px;
  position: absolute;
  top: 37px;
  right: 19px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
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
.mobileBurgerBox_2Rs8u {
  width: 140px;
  height: 70px;
}
.mobilePanel_20GTo {
  display: none;
}
@media (max-width: 991.98px) {
  .mobilePanel_20GTo {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
}
.mobileBurger_3fe6R {
  font-size: 24px;
  cursor: pointer;
  display: block;
  position: absolute;
  top: 23px;
  right: 5px;
}
.column_3i0lk {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
@media (max-width: 991.98px) {
  .column_3i0lk {
    display: none;
  }
}
.toogle_2pgKw {
  padding: 10px 20px;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  position: absolute;
  top: 48px;
  right: 20px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-size: 14px;
  line-height: 21px;
  color: #fff;
  cursor: pointer;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  z-index: 5;
  -webkit-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
}
.toogle_2pgKw:hover {
  color: hsla(0, 0%, 100%, 0.8);
}
.toogle_2pgKw:hover .dots_3vbC_ {
  opacity: 0.8;
}
.dots_3vbC_ {
  font-size: 16px;
  margin-left: 8px;
  color: #fff;
  -webkit-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
}
.list_2E554 {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
}
@media (max-width: 991.98px) {
  .list_2E554 {
    display: none;
  }
}
.link_3vmMC {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
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
  -webkit-transition: all 0.3s ease-in;
  transition: all 0.3s ease-in;
}
.title_26Zvz:active,
.title_26Zvz:focus,
.title_26Zvz:hover {
  color: #2469c7;
}
@-webkit-keyframes increase_1jG6U {
  0% {
    width: 0;
  }
  to {
    width: 40px;
  }
}
@keyframes increase_1jG6U {
  0% {
    width: 0;
  }
  to {
    width: 40px;
  }
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
  -ms-flex-negative: 0;
  flex-shrink: 0;
  display: -webkit-box;
  display: -ms-flexbox;
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
</style>