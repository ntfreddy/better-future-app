<template>
  <PopupPage :class="{[$style.popup]:true, [$style.hasEpisodes]: hasEpisodes}">
    <div :class="$style.content">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-12" :class="$style.top">
            <Logo />
            <div :class="$style.close" v-on:click="closeNavigation">
              {{$t('lifeMobileNav-close')}}
              <Icon id="cross" fill="white" viewBox="0 0 18 18" :class="$style.cross">
                <path
                  d="M17.67.33a1.115 1.115 0 00-1.581 0L9 7.417 1.911.329a1.115 1.115 0 00-1.582 0 1.115 1.115 0 000 1.582L7.42 9l-7.09 7.088a1.115 1.115 0 000 1.582c.216.215.505.331.787.331.282 0 .571-.107.787-.331l7.089-7.089 7.089 7.089c.215.215.505.331.786.331.29 0 .572-.107.787-.331a1.115 1.115 0 000-1.582L10.582 9l7.089-7.09a1.115 1.115 0 000-1.58z"
                  fill-rule="nonzero"
                  stroke-width=".8"
                ></path>
              </Icon>
            </div>
          </div>
          <div class="col-12" :class="$style.top" v-if="isAllEpisodes && hasEpisodes">
            <MobileTimeLine v-on:close="closeNavigation"/>
          </div>
          <div class="col-12" :class="[$style.block, $style.top]" v-else>
            <p :class="$style.text">
              {{$t('lifeMobileNav-text')}}
              <span
                :class="$style.highlight"
              >{{(userName || $t('lifeMobileNav-friend')) + "!"}}</span>
            </p>
            <div :class="$style.toogle" v-on:click="toogle">
              {{$t('lifeMobileNav-toggle')}}
              <Icon id="dots" fill="none" viewBox="0 0 16 16" :class="$style.dots">
                <g opacity=".4" fill="#fff">
                  <path
                    d="M0 0h3.2v3.2H0zM0 6.4h3.2v3.2H0zM0 12.8h3.2V16H0zM6.4 0h3.2v3.2H6.4zM6.4 6.4h3.2v3.2H6.4zM6.4 12.8h3.2V16H6.4zM12.8 0H16v3.2h-3.2zM12.8 6.4H16v3.2h-3.2zM12.8 12.8H16V16h-3.2z"
                  ></path>
                </g>
              </Icon>
            </div>
          </div>
          <div class="col-12" :class="$style.inner">
            <div :class="$style.nav">
               <div v-if="!userName" :class="$style.item" v-on:click="scrollTo('enroll')">
                <div :class="$style.line"></div>
                <div :class="$style.title">{{$t('lifeMobileNav-registration')}}</div>
              </div>
              <div v-for="item in items" :key="item.id" :class="$style.item" v-on:click="scrollTo(item.id)">
                <div :class="$style.line"></div>
                <div :class="$style.title">{{item.title}}</div>
              </div>
              <TermsList :class="$style.terms"/>
            </div>
            <Copyright :class="$style.copyright" />
          </div>
        </div>
      </div>
    </div>
  </PopupPage>
</template>

<script>
import { mapState, mapMutations } from "vuex";

import Logo from "./Logo";
import PopupPage from "./PopupPage";
import MobileTimeLine from "./MobileTimeLine";
import Copyright from "./Copyright";
import TermsList from "./TermsList";

export default {
  props: ["allEpisodes", "hasEpisodes"],
  components: {
    Logo,
    PopupPage,
    MobileTimeLine,
    Copyright,
    TermsList,
  },
  data: function () {
    return {
      isAllEpisodes: this.allEpisodes,
    };
  },
  computed: {
    items: function () {
      return this.$store.state.navigation.list;
    },
    /*...mapState({
      items: "list", // "total" same as "state => state.count"
    }),*/
    userName: function () {
      if (this.$session !== undefined) return this.$session.get("firstName");
      else return undefined;
    },
  },
  methods: {
    /*onVisibleUpdate: function (e) {
      e || this.closeNavigation();
    },*/
    scrollTo: function (id) {
      var t = this;
      this.closeNavigation(),
        this.$nextTick(function () {
          t.$scrollTo(document.getElementById("section-".concat(id)));
        });
    },
    closeNavigation: function () {
      this.$emit("close", false);
    },
    toogle: function () {
      this.isAllEpisodes = !this.isAllEpisodes;
    },
  },
};
</script>

<style module>
.popup {
  background: #121212;
}
.hasEpisodes .inner {
  min-height: calc(100vh - 158px);
}
.content {
  min-height: 100vh;
}
.top {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.block {
  margin-top: 31px;
}

.close {
  color: #fff;
  cursor: pointer;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-size: 14px;
  line-height: 21px;
  -webkit-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
  height: 70px;
  width: 100px;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  padding-right: 5px;
}
.close:hover {
  opacity: 0.8;
}
.cross {
  font-size: 16px;
  margin-left: 9px;
  color: #fff;
}
.nav {
  padding-top: 30px;
}
.inner {
  min-height: calc(100vh - 72px);
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
.inner,
.item {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.item {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-size: 24px;
  line-height: 26px;
  color: #fff;
  margin-bottom: 28px;
  cursor: pointer;
}
.item:active .title,
.item:hover .title,
.item:visited .title {
  color: #2469c7;
}
.item:active .line,
.item:hover .line,
.item:visited .line {
  display: block;
  -webkit-animation: increase_1QJ8I 0.4s ease-in;
  animation: increase_1QJ8I 0.4s ease-in;
}
.line {
  display: none;
  height: 2px;
  border-radius: 2px;
  background: #2469c7;
  width: 20px;
  margin-right: 10px;
}
.index_1OO6K {
  font-weight: 800;
  font-size: 14px;
  line-height: 145.4%;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #2469c7;
  margin-right: 30px;
}
.copyright {
  font-size: 14px;
  line-height: 16px;
  color: hsla(0, 0%, 100%, 0.3);
  margin-bottom: 50px;
}
.terms {
  color: #fff;
  margin-bottom: 38px;
  margin-top: 51px;
  text-decoration: none;
}
@-webkit-keyframes increase_1QJ8I {
  0% {
    width: 0;
  }
  to {
    width: 20px;
  }
}
@keyframes increase_1QJ8I {
  0% {
    width: 0;
  }
  to {
    width: 20px;
  }
}
.text {
  width: 100%;
  font-weight: 700;
  font-size: 19px;
  line-height: 22px;
  color: #fff;
  margin: 0;
}
.text .highlight {
  color: #2469c7;
}
@media (max-width: 767.98px) {
  .text {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
.toogle {
  border: 2px solid #2469c7;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 40px;
  padding: 8px 21px;
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
</style>