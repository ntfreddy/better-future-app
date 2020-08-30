<template>
  <div class="welcome_3G-Y3">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="content_LtHlj">
            <p class="text_TQX0T">
              Welcome,
              <span class="highlight_3OswU">{{(firstName || "Friend") + "!"}}</span>
              <span class="desc_3_jRW">{{text}}</span>
            </p>
            <div class="register_3JMeQ" v-show="!firstName">Register</div>
            <div class="d-lg-none d-flex toogle_n8_Tr" v-on:click="openMobileNav">
              All episodes
              <svg viewBox="0 0 16 16" class="icon icon--dots icon_2SKlE dots_3GUsn">
                <use xlink:href="#dots">
                  <svg
                    fill="none"
                    viewBox="0 0 16 16"
                    id="dots"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity=".4" fill="#fff">
                      <path
                        d="M0 0h3.2v3.2H0zM0 6.4h3.2v3.2H0zM0 12.8h3.2V16H0zM6.4 0h3.2v3.2H6.4zM6.4 6.4h3.2v3.2H6.4zM6.4 12.8h3.2V16H6.4zM12.8 0H16v3.2h-3.2zM12.8 6.4H16v3.2h-3.2zM12.8 12.8H16V16h-3.2z"
                      />
                    </g>
                  </svg>
                </use>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "./Logo";

export default {
  name: "Welcome",
  components: {
    //Logo,
  },
  props: ["nbr"],
  computed: {
    firstName: function () {
       if (this.$session !== undefined) 
        return this.$session.get("firstName");
      else
        return undefined;
    },
    text: function () {
      return this.firstName
        ? "Join the broadcast with us."
        : "If you want to get a complete immersion in the Bible, you need to register!";
    },
  },
  methods: {
    register: function () {
      this.$form.goToRegister();
    },
    openMobileNav: function () {
      this.$popup.open("episodeNav", {
        allEpisodes: true,
      });
    },
  },
};
</script>

<style>
.welcome_3G-Y3 {
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
  .welcome_3G-Y3 {
    padding: 16px 0;
    z-index: 2;
  }
}
.content_LtHlj {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 100%;
}
@media (max-width: 991.98px) {
  .content_LtHlj {
    width: 100%;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
  }
}
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
}
.toogle_n8_Tr {
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
.toogle_n8_Tr:hover {
  color: hsla(0, 0%, 100%, 0.8);
}
.toogle_n8_Tr:hover .dots_3GUsn {
  opacity: 0.8;
}
.register_3JMeQ,
.text_TQX0T {
  font-size: 16px;
}
.dots_3GUsn {
  margin-left: 8px;
  -webkit-transition: all 0.2s ease-in;
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
  -ms-flex-negative: 0;
  flex-shrink: 0;
  display: -webkit-box;
  display: -ms-flexbox;
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
</style>