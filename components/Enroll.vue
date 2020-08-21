<template>
  <div id="section-enroll" class="enroll_1_wEt">
    <div class="container">
      <div class="bg_3Jv-W"></div>
      <img
        alt="Bookmark – Unlocking Bible Prophecies"
        src="../assets/open-bible-1.png"
        class="book1_K2y_R"
      />
      <img
        alt="Open Bible – Unlocking Bible Prophecies"
        src="../assets/open-bible-2.png"
        class="book2_1CXky"
      />
      <div class="row justify-content-center">
        <div class="col-sm-10 col-md-7 col-lg-5 col-xl-4">
          <div class="label_2JFi-">{{data.label}}</div>
          <h2 class="action_1toYO">{{data.action}}</h2>
          <div class="subaction_1iCF9">{{data.subaction}}</div>
          <form
            ref="form"
            id="registration"
            class="register_2ztqz"
            :class="wasValidated"
            @submit.prevent="handleSignup"
            novalidate
          >
            <div class="form-group">
              <input
                id="reg-form-firstname"
                name="firstname"
                type="text"
                :placeholder="data.form.placeholder.firstname"
                class="form-control input_EsH-v input"
                required
              />
              <div class="invalid-feedback">Please enter your first name</div>
            </div>
            <div class="form-group">
              <input
                name="email"
                type="email"
                :placeholder="data.form.placeholder.email"
                class="form-control input_EsH-v input"
                id="__BVID__63"
                required
              />
              <div class="invalid-feedback">Please enter a valid email address</div>
            </div>
            <div class="register_2ztqz">
              <Checkbox value="false" class="policy_34h9p">
                {{data.form.register.text}}
                <a
                  :href="data.form.register.privacy.link"
                  target="_blank"
                  class="link_3Kiew"
                >{{data.form.register.privacy.text}}</a>
              </Checkbox>
              <button
                type="submit"
                class="btn btn-secondary btn-block button_1UYTP"
              >{{data.form.register.buttonTitle}}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Checkbox from "./Checkbox";
export default {
  components: {
    Checkbox,
  },
  data: function () {
    return {
      wasValidated: "",
    };
  },
  props: ["data"],
  methods: {
    handleSubmit: function () {},
    handleSignup: function () {
      if (this.$refs.form.checkValidity()) {
        this.handleSubmit();
      } else {
        this.wasValidated = "was-validated";
      }
    },
  },
  mounted: function(){
     //alert(this.$store.state.episodes.episodes.activeIndex);
  }
};
</script>
<style scoped>
.enroll_1_wEt {
  min-height: 630px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  background: #2469c7;
  padding: 100px 0;
  position: relative;
  overflow: hidden;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.enroll_1_wEt.success_2zpkz {
  padding-top: 53px;
}

@media (max-width: 767.98px) {
  .enroll_1_wEt {
    padding-top: 120px;
  }
}

.bg_3Jv-W {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-image: url(../assets/enroll-bg-lines.svg);
  background-position: top;
  background-size: contain;
  background-repeat: no-repeat;
}

@media (max-width: 991.98px) {
  .bg_3Jv-W {
    background-image: url(../assets/schedule-bg.svg);
    background-size: cover;
    height: 75%;
  }
}

.book1_K2y_R {
  position: absolute;
  top: -120px;
  left: -380px;
  width: 1000px;
  height: 900px;
}

@media (max-width: 1599.98px) {
  .book1_K2y_R {
    top: -115px;
    left: -432px;
    width: 930px;
    height: 810px;
  }
}

@media (max-width: 1199.98px) {
  .book1_K2y_R {
    display: none;
  }
}

.book2_1CXky {
  position: absolute;
  bottom: -260px;
  right: -322px;
  width: 850px;
  height: 590px;
}

@media (max-width: 1599.98px) {
  .book2_1CXky {
    bottom: -239px;
    right: -288px;
    width: 750px;
    height: 500px;
  }
}

@media (max-width: 1199.98px) {
  .book2_1CXky {
    display: none;
  }
}

.label_2JFi- {
  color: #000;
  margin-bottom: 6px;
  text-align: center;
  font-weight: 800;
  font-size: 14px;
  line-height: 145.4%;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.action_1toYO {
  font-family: Bebas Neue;
  font-weight: 500;
  font-size: 48px;
  line-height: 52px;
  margin-bottom: 13px;
}

.action_1toYO,
.subaction_1iCF9 {
  text-align: center;
  color: #fff;
}

.subaction_1iCF9 {
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 60px;
}

.register_2ztqz {
  width: 100%;
  border-color: #2469c7 !important;
}

.input_EsH-v {
  margin-bottom: 40px;
}

.checkbox_2oMY_ {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.checkbox_2oMY_ label {
  margin: 0;
}

.checkbox_2oMY_.disabled_AAlVs {
  opacity: 0.7;
}

.checkbox_2oMY_.disabled_AAlVs .label_Nx89H {
  cursor: default;
}

.checkbox_2oMY_.disabled_AAlVs .box_3slHt:hover {
  border-color: #ececec;
}

.checkIcon_2VLjw {
  font-size: 13px;
  color: #000;
  opacity: 0;
  vertical-align: top;
  z-index: 0;
  -webkit-transition: opacity 0.2s;
  transition: opacity 0.2s;
}

.checked_2Q1D1 .checkIcon_2VLjw {
  opacity: 1;
}

.checkbox_2oMY_:hover .text_2pSav,
.checked_2Q1D1 .text_2pSav {
  color: #fff;
}

.checkbox_2oMY_.dark_rmGZs:hover .text_2pSav {
  color: rgba(0, 0, 0, 0.7);
}

.checked_2Q1D1.dark_rmGZs .text_2pSav {
  color: rgba(0, 0, 0, 0.6);
}

.box_3slHt {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  height: 20px;
  width: 20px;
  background-color: #fff;
  border-radius: 6px;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}

.box_3slHt.hasBorder_3B_CO {
  height: 22px;
  width: 22px;
  border: 1px solid rgba(0, 0, 0, 0.4);
}

.box_3slHt.hasBorder_3B_CO:hover {
  border-color: rgba(0, 0, 0, 0.6);
}

.checkbox_2oMY_:hover .box_3slHt {
  background-color: hsla(0, 0%, 100%, 0.9);
}

.policy_34h9p {
  margin-bottom: 30px;
}

.policy_34h9p .link_3Kiew {
  letter-spacing: 0.5px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #fff;
  text-decoration: underline;
}

.policy_34h9p .link_3Kiew:hover {
  color: hsla(0, 0%, 100%, 0.8);
}

.input_1JWT8 {
  display: none;
  -ms-flex-negative: 0;
  flex-shrink: 0;
}

.label_Nx89H {
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.wrapper_1SNxd {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  max-width: 20px;
}

.icon_2SKlE {
  display: inline-block;
  width: 1em;
  height: 1em;
  line-height: 1em;
  vertical-align: middle;
}

.icon_2SKlE use {
  color: inherit;
  fill: currentColor;
}

.icon_2SKlE.stroked_1yLoG use {
  stroke: currentColor;
}

.icon_2SKlE.hover-fill_2F_u8 use,
.icon_2SKlE.nofill_1GHxw use {
  fill: none;
}

.icon_2SKlE.hover-fill_2F_u8 use:hover {
  fill: currentColor;
}

.icon_2SKlE.active-fill_1ZpLy use {
  fill: none;
}

.icon_2SKlE.active-fill_1ZpLy.is-active_2JuBa use {
  fill: currentColor;
}

.icon_2SKlE.big_ata0o {
  width: 2em;
  height: 2em;
}

.icon_2SKlE.large_24yv8 {
  width: 3em;
  height: 3em;
}

.checkIcon_2VLjw {
  font-size: 13px;
  color: #000;
  opacity: 0;
  vertical-align: top;
  z-index: 0;
  -webkit-transition: opacity 0.2s;
  transition: opacity 0.2s;
}

.checked_2Q1D1 .checkIcon_2VLjw {
  opacity: 1;
}

.text_2pSav {
  -webkit-transition-duration: 0.2s;
  transition-duration: 0.2s;
  letter-spacing: 0.5px;
  margin-left: 12px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #fff;
}

.dark_rmGZs .text_2pSav {
  color: rgba(0, 0, 0, 0.6);
}

.dark_rmGZs .text_2pSav:hover {
  color: rgba(0, 0, 0, 0.7);
}

.button_1UYTP .btn-secondary_1LskZ {
  width: 100%;
}

.button_1UYTP:active,
.button_1UYTP:focus,
.button_1UYTP:hover {
  color: #000;
  background-color: #b3daff;
  border-color: #b3daff;
}

.button_1UYTP
  .btn-outline-primary_m07qE:not(:disabled):not(.disabled_cs9yg).active_W3vgj,
.button_1UYTP
  .btn-outline-primary_m07qE:not(:disabled):not(.disabled_cs9yg):active,
.button_1UYTP .show_24XkV > .btn-outline-primary_m07qE.dropdown-toggle_2ihBH {
  color: #000;
  background-color: transparent;
  border-color: #2469c7;
}

.form-control {
  border: 1px solid #fff;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 8px;
  color: #fff !important;
  font-size: 16px;
  line-height: 24px;
  height: calc(1.5em + 2rem);
  padding: 17px 21px;
}

.form-control,
.form-control:focus {
  background-color: hsla(0, 0%, 100%, 0) !important;
  outline: 0 !important;
}

.form-control:focus {
  -webkit-box-shadow: none;
  box-shadow: none;
  border: 2px solid #fff;
  padding: 16px 21px;
}

.form-control::-webkit-input-placeholder {
  color: hsla(0, 0%, 100%, 0.6);
}

.form-control:-moz-placeholder,
.form-control::-moz-placeholder {
  color: hsla(0, 0%, 100%, 0.6);
}

.form-control:-ms-input-placeholder {
  color: hsla(0, 0%, 100%, 0.6);
}

.form-control::-ms-input-placeholder {
  color: hsla(0, 0%, 100%, 0.6);
}

.form-control::placeholder {
  color: hsla(0, 0%, 100%, 0.6);
}

.form-control.is-invalid,
.was-validated .form-control:invalid {
  border: 2px solid #ffb9b9;
  padding: 17px 21px;
  background-image: unset;
}

.form-control.is-invalid:focus,
.was-validated .form-control:invalid:focus {
  border: 2px solid #ffb9b9;
  -webkit-box-shadow: none;
  box-shadow: none;
  padding: 17px 21px;
  background-image: unset;
}

.invalid-feedback {
  font-family: Roboto;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #ffb9b9;
  margin-top: -36px;
  margin-bottom: 16px;
  text-align: left;
}

.form-control.is-valid,
.form-control.is-valid:focus,
.was-validated .form-control:valid,
.was-validated .form-control:valid:focus {
  border: 2px solid #fff;
  padding: 17px 21px;
  -webkit-box-shadow: none;
  box-shadow: none;
  background-image: unset;
}

.btn {
  border-radius: 40px;
  padding: 19px 62px;
  font-weight: 700;
  font-size: 19px;
  letter-spacing: 0.55px;
  line-height: 22px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.3s ease-in;
  transition: all 0.3s ease-in;
  outline: 0;
}

.btn:focus {
  -webkit-box-shadow: none;
  box-shadow: none;
  outline: 0;
}

.btn-group-sm > .btn,
.btn-sm {
  padding: 9px 22px 8px 17px;
  font-size: 16px;
  line-height: 19px;
  color: #000;
}

.btn-secondary {
  background: #f7f3e7;
  color: #000;
  border: unset;
  -webkit-transition: all 0s ease-in !important;
  transition: all 0s ease-in !important;
}

.btn-secondary:active:hover,
.btn-secondary:focus,
.btn-secondary:hover {
  background: #b2daff;
  color: #000;
}

.btn-secondary:not(:disabled):not(.disabled).active,
.btn-secondary:not(:disabled):not(.disabled):active,
.show > .btn-secondary.dropdown-toggle {
  -webkit-box-shadow: none;
  box-shadow: none;
  background: #b2daff;
  color: #000;
}

.btn-secondary:not(:disabled):not(.disabled).active:focus,
.btn-secondary:not(:disabled):not(.disabled):active:focus,
.show > .btn-secondary.dropdown-toggle:focus {
  -webkit-box-shadow: none;
  box-shadow: none;
}

.btn-secondary.disabled,
.btn-secondary:disabled {
  background: #dbeeff;
  color: #000;
}

.btn-outline-primary {
  border: 2px solid #f7f3e7;
  color: #fff;
  -webkit-transition: background-color 0.3s ease;
  transition: background-color 0.3s ease;
}

.btn-outline-primary:active,
.btn-outline-primary:focus,
.btn-outline-primary:hover {
  background: hsla(0, 0%, 100%, 0);
  border-color: #f7f3e7;
}

.btn-group-sm > .btn:active.btn-outline-primary,
.btn-group-sm > .btn:hover.btn-outline-primary,
.btn-sm:active.btn-outline-primary,
.btn-sm:hover.btn-outline-primary {
  padding: 7px 20px 7px 15px;
}

.btn-outline-primary:not(:disabled):not(.disabled).active,
.btn-outline-primary:not(:disabled):not(.disabled).active:focus,
.btn-outline-primary:not(:disabled):not(.disabled):active,
.btn-outline-primary:not(:disabled):not(.disabled):active:focus,
.show > .btn-outline-primary.dropdown-toggle,
.show > .btn-outline-primary.dropdown-toggle:focus {
  background: hsla(0, 0%, 100%, 0);
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
}

.form-error {
  margin-bottom: 40px;
  position: absolute;
  bottom: -25px;
  left: 0;
  margin-top: unset !important;
  margin-bottom: unset !important;
  color: #ffb9b9;
  font-size: 14px;
  line-height: 21px;
}
</style>