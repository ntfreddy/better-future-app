<template>
  <div :class="$style.popup">
    <div :class="$style.wrapper">
      <div :class="$style.content">
        <div
          :class="{ [$style.inner]: true, [$style.notRegistred]: !isRegistred }"
        >
          <div :class="$style.closeBtn" v-on:click="close">
            <Icon name="cross" viewBox="0 0 18 18" :class="$style.close" />
          </div>
          <div :class="$style.left">
            <div :class="$style.title">
              <span :class="$style.highlight">{{ highlightText }}</span>
            </div>
            <div :class="$style.desc">{{ description }}</div>
            <form
              id="registration"
              :class="$style.register"
              @submit.prevent="onSubmit"
            >
              <div
                class="form-group"
                :class="{ 'form-group--error': $v.firstName.$error }"
              >
                <input
                  id="__BVID__257"
                  name="firstname"
                  type="text"
                  :placeholder="$t('getBook-form-firstname-placeholder')"
                  :class="$style.input"
                  class="form-control input"
                  v-model.trim="$v.firstName.$model"
                />
                <div
                  class="invalid-feedback"
                  v-if="$v.firstName.$dirty && !$v.firstName.required"
                >
                  {{ $t("getBook-form-firstname-error") }}
                </div>
              </div>
              <div
                class="form-group"
                :class="{ 'form-group--error': $v.email.$error }"
              >
                <input
                  id="__BVID__258"
                  name="email"
                  type="email"
                  :placeholder="$t('getBook-form-email-placeholder')"
                  :class="$style.input"
                  class="form-control input"
                  v-model.trim="$v.email.$model"
                />
                <div
                  class="invalid-feedback"
                  v-if="$v.email.$dirty && !$v.email.required"
                >
                  {{ $t("getBook-form-email-error") }}
                </div>
              </div>

              <Checkbox
                id="checkbox-id-259"
                :dark="true"
                :value="false"
                :class="$style.policy"
                @clicked="onCheckBoxClicked"
                :invalidFeedback="$t('getBook-form-agree-error')"
              >
                {{ $t("getBook-form-privacy-policy") }}
                <a href="/privacy" target="_blank" :class="$style.link">{{
                  $t("getBook-form-privacy-policy-text")
                }}</a>
              </Checkbox>
              <button type="submit" :class="$style.button">
                {{ $t("getBook-form-submit") }}
              </button>
            </form>
          </div>
          <div :class="$style.right">
            <div :class="$style.image"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Checkbox from "./Checkbox";
import Icon from "./Icon";

import { required, email } from "vuelidate/lib/validators";

export default {
  components: {
    Checkbox,
    Icon,
  },
  props: {
    modal: {
      default: true,
    },
    closeOnClickModal: {
      default: true,
    },
  },
  validations: {
    firstName: {
      required,
    },
    email: {
      required,
      email,
    },
  },
  data: function () {
    return {
      loading: false,
      firstName:
        this.$session !== undefined && this.$session.get("firstName")
          ? this.$session.get("firstName")
          : "",
      email:
        this.$session !== undefined && this.$session.get("email")
          ? this.$session.get("email")
          : "",
      state: "form",
      description: this.$t("getBook-desc"),
      highlightText: this.$t("getBook-highlight"),
      agreed: true,
      funcUrl: "https://us-central1-pensezlavenir-4df21.cloudfunctions.net/",
    };
  },
  computed: {
    isRegistred: function () {
      return (
        this.$session !== undefined &&
        this.$session.exists != undefined &&
        this.$session.exists()
      );
    },
    title: function () {
      return "success" === this.state ? "Thank you!" : "";
    },
  },
  mounted: function () {
    // !this.autoopen && this.isRegistred && this.onSubmit();
  },
  methods: {
    async subscribe(email, firstName) {
      this.$axios
        .$post(this.funcUrl + "subscribe", {
          email: email,
          fname: firstName,
          lname: "",
          tag: "registration",
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    async register(email, firstname) {
      this.$axios
        .$post(this.funcUrl + "register", {
          email: email,
          firstname: firstName,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    close: function () {
      this.$emit("close", false);
    },
    onSubmit: function () {
      this.$session.start();
      this.$session.set("firstName", this.firstName);
      this.$session.set("email", this.email);

      this.$session.set("hideReminder", true);
      this.$session.set("isBookWasOrdered", true);

      //this.$emit("update-show-reminder", false);

      /* this.$emit("update-user-info", {
          firstName: this.firstName,
          email: this.email,
        });*/

      this.register(this.email, this.firstName);
      this.subscribe(this.email, this.firstName);
      this.$emit("close", false);
    },
    validate: function () {
      if (this.$v.$invalid) {
        var controls = ["firstName", "email"];
        for (var index = 0; index < controls.length; index++) {
          var control = controls[index];
          this[control] || this.validateValue(control);
        }
        return false;
      }
      return true;
    },
    validateValue: function (control) {
      this.$v[control].$touch();
    },
    onCheckBoxClicked(value) {
      this.agreed = value;
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
  top: calc(50% + 40px);
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: auto;
  height: auto;
}
@media (max-width: 991.98px) {
  .content {
    bottom: 0;
  }
}
@media (max-width: 767.98px) {
  .content {
    top: calc(50% + 10px);
  }
}
.closeBtn {
  cursor: pointer;
  z-index: 10;
}
.closeBtn:hover .close {
  opacity: 0.6;
}
.close {
  font-size: 16px;
  position: absolute;
  top: 29px;
  right: 30px;
  color: #fff;
  cursor: pointer;
  -webkit-transition: all 0.3s ease-in;
  transition: all 0.3s ease-in;
  height: 16px;
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
  border-radius: 32px;
  -webkit-box-shadow: 0 10px 15px rgba(0, 0, 0, 0.05);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.05);
  background: #fff;
}
@media (max-width: 991.98px) {
  .inner {
    -webkit-box-orient: vertical;
    -webkit-box-direction: reverse;
    -ms-flex-direction: column-reverse;
    flex-direction: column-reverse;
    width: 569px;
  }
}
@media (min-width: 768px) and (max-width: 991.98px) {
  .inner {
    border-bottom-left-radius: 38px;
    border-bottom-right-radius: 38px;
  }
}
@media (max-width: 767.98px) {
  .inner {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
}
@media (max-width: 575.98px) {
  .inner {
    width: 100vw;
  }
}
.right {
  width: 569px;
  min-height: 450px;
  background-color: #c9daf0;
  position: relative;
  border-radius: 32px;
  -ms-flex-negative: 0;
  flex-shrink: 0;
}
@media (max-width: 991.98px) {
  .right {
    min-height: 230px;
    width: 100%;
  }
}
@media (min-width: 992px) and (max-width: 1199.98px) {
  .right {
    width: 450px;
  }
}
.notRegistred .image {
  top: -50px;
}
@media (min-width: 1440px) and (max-width: 1599.98px) {
  .notRegistred .image {
    top: -40px;
  }
}
@media (min-width: 768px) and (max-width: 991.98px) {
  .notRegistred.inner {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
}
.image {
  position: absolute;
  top: -100px;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  width: 330px;
  height: 520px;
  background-image: url(../assets/book.png);
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
}
@media (max-width: 991.98px) {
  .image {
    width: 171px;
    height: 270px;
    top: -70px;
  }
}
.left {
  padding: 60px 63px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 569px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  border-top-left-radius: 32px;
  border-bottom-left-radius: 32px;
}
@media (max-width: 767.98px) {
  .left {
    border-radius: 0;
    padding: 60px 38px;
    width: 100%;
  }
}
@media (min-width: 992px) and (max-width: 1199.98px) {
  .left {
    width: 450px;
    padding: 60px 38px;
  }
}
.title {
  font-family: Bebas Neue;
  font-weight: 500;
  font-size: 64px;
  line-height: 64px;
  color: #000;
  margin-bottom: 17px;
}
.title .highlight {
  color: #2469c7;
}
@media (max-width: 1199.98px) {
  .title {
    font-size: 48px;
    line-height: 48px;
  }
}
.desc {
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 40px;
}
.button {
  border-radius: 40px;
  padding: 12px 45px;
  font-weight: 700;
  font-size: 19px;
  letter-spacing: 0.55px;
  line-height: 22px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.3s ease-in;
  transition: all 0.3s ease-in;
  cursor: pointer;
  color: #fff;
  background-color: #2469c7;
  border-color: #2469c7;
  margin-top: 13px;
  position: relative;
}
.button:before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #000;
  opacity: 0;
  border-radius: 40px;
  -webkit-transition: opacity 0.2s ease-in-out;
  transition: opacity 0.2s ease-in-out;
}
.button span {
  z-index: 2;
  position: relative;
}
.button:active:before,
.button:focus:before,
.button:hover:before {
  opacity: 0.08;
}
.button.disabled {
  pointer-events: none;
  opacity: 0.7;
}
.register {
  width: 100%;
  border-color: #2469c7 !important;
}
.input {
  margin-bottom: 40px;
  border-color: rgba(0, 0, 0, 0.4) !important;
  color: rgba(0, 0, 0, 0.6) !important;
}
.input:focus {
  border: 2px solid #2469c7 !important;
}
.input::-webkit-input-placeholder {
  color: rgba(0, 0, 0, 0.6) !important;
}
.input:-moz-placeholder,
.input::-moz-placeholder {
  color: rgba(0, 0, 0, 0.6) !important;
}
.input:-ms-input-placeholder {
  color: rgba(0, 0, 0, 0.6) !important;
}
.input::-ms-input-placeholder {
  color: rgba(0, 0, 0, 0.6) !important;
}
.input::placeholder {
  color: rgba(0, 0, 0, 0.6) !important;
}
.policy {
  margin-bottom: 20px;
}
.policy .link {
  color: #fff;
  letter-spacing: 0.5px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: inherit;
  text-decoration: underline;
}
.policy .link:hover {
  color: rgba(0, 0, 0, 0.85);
}
</style>