<template>
  <div :class="$style.popup">
    <div :class="$style.wrapper">
      <div :class="$style.content">
        <div :class="$style.inner">
          <div :class="$style.closeBtn" v-on:click="close">
            <Icon
              name="cross-black"
              viewBox="0 0 18 18"
              :class="$style.close"
            />
          </div>
          <div
            :class="$style.left"
            :style="'background-image: url(' + form.image + ');'"
          ></div>
          <div :class="$style.right">
            <!---->
            <div :class="$style.title">{{ form.title }}</div>
            <div :class="$style.desc">{{ form.desc }}</div>
            <UniForm
              :id="form.id"
              :type="activeId"
              :btnText="form.btnText"
              @close-popup="close"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UniForm from "./UniForm";
export default {
  components: {
    UniForm,
    //Success,
  },
  props: ["activeId"],
  data: function () {
    return {
      //firstName: "",
     // email:"",
      state: "form",
      map: {
        pray: {
          title: this.$t("actionPopup-pray-title"),
          desc: this.$t("actionPopup-pray-desc"),
          image: require("../assets/believe.jpg"),
          icon: "pray-hands",
          btnText: this.$t("actionPopup-pray-btnText"),
          id: "prayRequest",
          hubspotId: "920f5366-8d6d-4e83-b881-71d75f603735",
          success: {
            title: this.$t("actionPopup-pray-success-title"),
            desc: this.$t("actionPopup-pray-success-desc"),
          },
        },
        bible: {
          title: this.$t("actionPopup-bible-title"),
          desc: this.$t("actionPopup-bible-desc"),
          image: require("../assets/study-image.jpg"),
          btnText: this.$t("actionPopup-bible-btnText"),
          icon: "bible-closed",
          id: "bibleStudy",
          hubspotId: "514e1b13-68b0-4cd6-8323-fdae0ff1c6eb",
          success: {
            title: this.$t("actionPopup-bible-success-title"),
            desc: this.$t("actionPopup-bible-success-desc"),
            href: "https://bibleschools.com/1505",
          },
        },
        talk: {
          title: this.$t("actionPopup-talk-title"),
          desc: this.$t("actionPopup-talk-desc"),
          image: require("../assets/talk-image.jpg"),
          id: "talk",
          icon: "messages",
          success: {
            title: this.$t("actionPopup-talk-success-title"),
            desc: this.$t("actionPopup-talk-success-desc"),
          },
        },
        question: {
          title: this.$t("actionPopup-question-title"),
          desc: this.$t("actionPopup-question-desc"),
          image: require("../assets/question-image.jpg"),
          btnText: this.$t("actionPopup-question-btnText"),
          id: "askQuestion",
          icon: "answers",
          hubspotId: "bf88e843-7979-4413-bc0e-6be79c0e6629",
          success: {
            title: this.$t("actionPopup-question-success-title"),
            desc: this.$t("actionPopup-question-success-desc"),
          },
        },
        decision: {
          title: this.$t("actionPopup-decision-title"),
          desc: this.$t("actionPopup-decision-desc"),
          image: require("../assets/study-image.jpg"),
          btnText: this.$t("actionPopup-decision-btnText"),
          id: "decision",
          icon: "bible-shine",
          hubspotId: "ef453086-1fb7-434a-a7c1-8006a6832086",
          success: {
            title: this.$t("actionPopup-decision-success-title"),
            desc: this.$t("actionPopup-decision-success-desc"),
          },
        },
      },
    };
  },
  computed: {
    form: function () {
      return this.map[this.activeId];
    },
  },
  mounted: function () {
   /* let that = this;
    this.firstName = this.$ls.get("firstName", "");
    this.$ls.on('firstName', function(){      
       that.firstName = that.$ls.get("firstName", "");
    });

    this.email = this.$ls.get("email", "");
    this.$ls.on('email', function(){
       that.email = that.$ls.get("email", "");
    });*/


    window.HubSpotConversations && window.HubSpotConversations.widget.close();
  },
  methods: {
    close: function () {
      this.$emit("close", false);
    },
  },
};
</script>

<style module>
.popup {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0;
  z-index: 100;
}
.wrapper {
  position: relative;
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  overflow: scroll;
}
.content {
  position: absolute;
  max-height: 100vh;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: auto;
  height: auto;
}
.closeBtn {
  cursor: pointer;
  z-index: 10;
}
.closeBtn:hover .close {
  opacity: 0.6;
}
.close {
  font-size: 20px;
  position: absolute;
  top: 35px;
  right: 29px;
  color: #000;
  cursor: pointer;
  opacity: 0.4;
  -webkit-transition: all 0.3s ease-in;
  transition: all 0.3s ease-in;
}
.close:hover {
  opacity: 0.6;
}
.inner {
  width: 100%;
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 16px;
  -webkit-box-shadow: 0 10px 15px rgba(0, 0, 0, 0.05);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.05);
  overflow: hidden;
}
.left {
  width: 555px;
  background-image: url(/images/pray-image.jpg);
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
}
@media (max-width: 991.98px) {
  .left {
    display: none;
  }
}
@media (min-width: 992px) and (max-width: 1199.98px) {
  .left {
    width: 400px;
  }
}
.right {
  padding: 60px 94px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 555px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  background: #fff;
}
@media (max-width: 575.98px) {
  .right {
    padding: 50px 15px;
    width: 100%;
  }
}
@media (min-width: 576px) and (max-width: 767.98px) {
  .right {
    padding: 60px 70px;
    width: 100%;
  }
}
@media (min-width: 992px) and (max-width: 1199.98px) {
  .right {
    padding: 60px 40px;
    width: 400px;
  }
}
@media (min-width: 1440px) and (max-width: 1599.98px) {
  .right {
    padding: 45px 94px;
  }
}

.top {
  position: relative;
  margin-bottom: 17px;
}
.top:hover .circle {
  width: 130px;
  height: 130px;
  top: -24px;
  left: -20px;
}
@media (max-width: 767.98px) {
  .top:hover .circle {
    top: -22px;
    width: 110px;
    height: 110px;
  }
}
.image_pGRke {
  font-size: 90px;
  color: #2469c7;
  position: relative;
}
@media (max-width: 767.98px) {
  .image_pGRke {
    font-size: 70px;
  }
}
.circle {
  width: 74px;
  height: 74px;
  border-radius: 50%;
  background-color: #f7f0e7;
  position: absolute;
  top: -28px;
  left: 8px;
  -webkit-transition: all 0.3s ease-in;
  transition: all 0.3s ease-in;
}
@media (max-width: 767.98px) {
  .circle {
    width: 54px;
    height: 54px;
  }
}
.title {
  font-family: Bebas Neue;
  font-weight: 700;
  font-size: 48px;
  line-height: 46px;
  color: #000;
  text-align: center;
  margin-bottom: 14px;
  letter-spacing: 0;
}
@media (max-width: 767.98px) {
  .title {
    font-size: 40px;
  }
}
.desc {
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 34px;
  width: 315px;
}
.fade-enter-active,
.fade-leave-active {
  -webkit-transition: opacity 0.3s;
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-active,
.fade-leave-to {
  opacity: 0;
}
</style>