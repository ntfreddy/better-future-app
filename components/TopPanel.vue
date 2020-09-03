<template>
  <div :class="$style.panel">
    <Reminder v-show="showReminder" v-on:close="closeReminder($event)" />

    <div :class="$style.burgerBox" v-on:click="showNavigation($event)">
      <Icon id="burger" viewBox="0 0 24 11" fill="none" :class="$style.burger">
        <path stroke="#fff" stroke-width="2" d="M24 1H0M24 10H12" />
      </Icon>
    </div>
    <div class="container" :class="$style.container">
      <div class="row justify-content-center">
        <div class="col-lg-12" :class="$style.column">
          <div :class="$style.logoInContainer"></div>
          <div :class="$style.content" v-show="showNav">
            <div :class="$style.list">
              <div
                v-for="item in navigation"
                :key="item.id"
                :class="$style.link"
                v-on:click="scrollTo('item.id')"
              >
                <div :class="$style.line"></div>
                <div :class="$style.title">{{item.title}}</div>
              </div>
            </div>
            <div :class="$style.register" v-show="!firstName" v-on:click="register">Register</div>
          </div>
          <Welcome v-show="!showNav" :nbr="2" />
        </div>
      </div>
    </div>
    <div class="container" :class="$style.mobilePanel">
      <div class="row" :class="$style.row">
        <div class="col-12" :class="$style.mobileColumn">
          <div :class="$style.content">
            <div :class="$style.logo"></div>
            <div :class="$style.mobileBurgerBox">
              <Icon id="burger" viewBox="0 0 24 11" fill="none" :class="$style.mobileBurger">
                <path stroke="#fff" stroke-width="2" d="M24 1H0M24 10H12" />
              </Icon>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

import Reminder from "./Reminder";
import Welcome from "./Welcome";
import Icon from "./Icon";

export default {
  name: "TopPanel",
  components: {
    Reminder,
    Welcome,
    Icon,
  },
  props: ["showNav", "showReminder"],
  data: function () {
    return {};
  },
  computed: {
    ...mapState({
      totalQuestions: "total", // "total" same as "state => state.count"
    }),
    firstName: function () {
      if (this.$session !== undefined) return this.$session.get("firstName");
      else return false;
    },
    episode: function () {
      return this.$store.state.episodes.episode;
    },
    navigation: function () {
      return this.$store.state.navigation.list;
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
    scrollTo: function (id) {
      this.$scroll.scrollTo(document.getElementById("section-".concat(id)));
    },
    openNavigation: function () {
      this.$popup.open("episodeNav");
    },
    showNavigation: function () {
      //this.showNav = !this.showNav;
      //console.log("showNav Top : ", this.showNav);
      this.$emit("update:show-nav", !this.showNav);
    },
    closeReminder: function () {
      console.log("closeReminder");
      this.$session.set("hideReminder", true);
      this.$emit("update:show-reminder", false);
    },
    remind: function () {
      this.$form.goToRegister();
    },
  },
};
</script>

<style module>
.panel {
  position: relative;
  z-index: 11;
}
@media (max-width: 991.98px) {
  .panel {
    background: #121212;
    padding: 0;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }
}
.container {
  padding-top: 22px;
}
@media (max-width: 767.98px) {
  .container {
    padding: 0;
  }
}
.content {
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
  .content {
    width: 100%;
    min-height: 98px;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
  }
}
@media (min-width: 992px) and (max-width: 1199.98px) {
  .content {
    padding: 0 25px;
  }
}
.mobileColumn {
  width: 100%;
  padding: 0;
}
.row {
  width: 100%;
  margin: 0;
}
.logoInContainer {
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
  .logoInContainer {
    display: none;
  }
}
@media (min-width: 992px) and (max-width: 1199.98px) {
  .logoInContainer {
    width: 180px;
    margin-left: -30px;
  }
}
.logo {
  background: url(../assets/unlocking-logo.svg);
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  width: 210px;
  height: 113px;
  margin-left: -34px;
}
@media (max-width: 991.98px) {
  .logo {
    width: 137px;
    height: 70px;
    margin-left: -24px;
  }
}
@media (min-width: 992px) {
  .logo {
    position: absolute;
    top: 30px;
    left: -5px;
    width: 145px;
    height: 77px;
    margin: 0;
  }
}
@media (min-width: 992px) and (max-width: 1199.98px) {
  .logo {
    left: 25px;
  }
}
@media (min-width: 1600px) {
  .logo {
    top: 5px;
    left: 5px;
    width: 250px;
    height: 125px;
  }
}
.burgerBox {
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
.burgerBox.movedBurger {
  top: 137px;
}

.showReminder .burgerBox {
  padding-top: 130px;
}

.burger {
  font-size: 24px;
  cursor: pointer;
  display: none !important;
}
@media (min-width: 992px) {
  .burger {
    display: block !important;
  }
}
.mobileBurgerBox {
  width: 140px;
  height: 70px;
}
.mobilePanel {
  display: none;
}
@media (max-width: 991.98px) {
  .mobilePanel {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
}
.mobileBurger {
  font-size: 24px;
  cursor: pointer;
  display: block;
  position: absolute;
  top: 23px;
  right: 5px;
}
.column {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
@media (max-width: 991.98px) {
  .column {
    display: none;
  }
}
.toogle {
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
.toogle:hover {
  color: hsla(0, 0%, 100%, 0.8);
}
.toogle:hover .dots {
  opacity: 0.8;
}
.dots {
  font-size: 16px;
  margin-left: 8px;
  color: #fff;
  -webkit-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
}
.list {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
}
@media (max-width: 991.98px) {
  .list {
    display: none;
  }
}
.link {
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
.link:not(:last-child) {
  margin-right: 31px;
}
@media (min-width: 992px) and (max-width: 1199.98px) {
  .link:not(:last-child) {
    margin-right: 15px;
  }
}
.link:hover .title {
  color: #2469c7;
}
.link:hover .number_T0JEA {
  display: none;
}
.link:hover .line {
  display: block;
  height: 1px;
  background: #2469c7;
  -webkit-animation: increase_1jG6U 0.3s ease-in;
  animation: increase_1jG6U 0.3s ease-in;
}
.line {
  display: none;
  padding-top: 2px;
  margin-bottom: 6px;
  margin-top: 4px;
  width: 40px;
  position: absolute;
  bottom: 30px;
}
.title {
  font-size: 16px;
  line-height: 24px;
  color: #fff;
  font-weight: 500;
  -webkit-transition: all 0.3s ease-in;
  transition: all 0.3s ease-in;
}
.title:active,
.title:focus,
.title:hover {
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
.register {
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
  .register {
    display: none;
  }
}
@media (min-width: 992px) and (max-width: 1199.98px) {
  .register {
    margin-left: 15px;
    padding: 7px 30px;
  }
}
</style>