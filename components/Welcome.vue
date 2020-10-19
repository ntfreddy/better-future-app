<template>
  <div :class="$style.welcome">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div :class="$style.content">
            <p :class="$style.text">
              {{$t('welcome-text')}},
              <span
                :class="$style.highlight"
              >{{(firstName || $t('welcome-text-highlight')) + "!"}}</span>
              <span :class="$style.desc">{{text}}</span>
            </p>
            <div
              :class="$style.register"
              v-show="firstName === ''"
              @click="register"
            >{{$t('welcome-register')}}</div>
            <div class="d-lg-none d-flex" :class="$style.toogle" @click="onOpenPopup('life-episode-nav')">
              {{$t('welcome-allEpisodes')}}
              <Icon name="dots" viewBox="0 0 16 16" :class="$style.dots" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

import Logo from "./Logo";
import Icon from "./Icon";

export default {
  name: "Welcome",
  components: {
    Icon,
  },
  data: function(){
    return {
      firstName : "",
    }
  },
  computed: {
    text: function () {
      return this.firstName !== ""
        ? this.$t("welcome-text-desc-registered")
        : this.$t("welcome-text-desc-notRegistered");
    },
  },
  mounted: function(){
let that = this;
    this.firstName = this.$ls.get("firstName", "");
    this.$ls.on('firstName', function(){      
       that.firstName = that.$ls.get("firstName", "");
    });
  },
  methods: {
    ...mapActions({
      onOpenPopup: "OPEN"
    }),
    register: function () {
      this.$form.goToRegister(this.$scrollTo);
    },
  },
};
</script>

<style module>
.welcome {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  position: relative;
  min-height: 98px;
  width: 100%;
  padding: 0 10px 0 20px;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
@media (max-width: 991.98px) {
  .welcome {
    padding: 16px 0;
    z-index: 2;
  }
}
.content {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 100%;
}
@media (max-width: 991.98px) {
  .content {
    width: 100%;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
  }
}
/*
.left_SCo9Z {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.logo_3FX2W {
  -ms-flex-negative: 0;
  flex-shrink: 0;
  margin-right: 30px;
}
@media (max-width: 575.98px) {
  .logo_3FX2W {
    margin-right: 15px;
  }
}*/
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
  background: #2469c7;
  cursor: pointer;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  z-index: 5;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  margin-left: 20px;
  -webkit-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
}
.toogle:hover {
  color: hsla(0, 0%, 100%, 0.8);
}
.toogle:hover .dots {
  opacity: 0.8;
}
.register,
.text {
  font-size: 16px;
}
.dots {
  margin-left: 8px;
  -webkit-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
}
.dots,
.text {
  font-size: 16px;
  color: #fff;
}
.text {
  width: 100%;
  font-weight: 700;
  line-height: 24px;
  margin: 0;
  text-align: right;
}
.text .highlight {
  color: #2469c7;
}
@media (max-width: 991.98px) {
  .text {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
  }
}
@media (max-width: 991.98px) {
  .desc {
    display: none;
  }
}
.register {
  padding: 7px 50px;
  font-weight: 700;
  font-size: 19px;
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
@media (max-width: 767.98px) {
  .register {
    margin-left: 0;
  }
}
@media (max-width: 575.98px) {
  .register {
    padding: 7px 30px;
  }
}
@media (max-width: 991.98px) {
  .register {
    display: none;
  }
}
</style>