<template>
  <div id="section-enroll" :class="$style.enroll">
    <div class="container">
      <div :class="$style.bg"></div>
      <img
        alt="Peut-on espérer un meilleur avenir ?"
        src="../assets/open-bible-1.png"
        :class="$style.book1"
        v-if="!registered"
      />
      <img
        alt="Peut-on espérer un meilleur avenir ?"
        src="../assets/open-bible-2.png"
        :class="$style.book2"
        v-if="!registered"
      />
      <div class="row justify-content-center" v-if="registered">
        <div class="col-sm-10 col-md-7 col-lg-5 col-xl-4">
          <div :class="$style.joined">
            <img src="../assets/bell.svg" :class="$style.image" />
            <div :class="$style.joinedTitle">{{$t('enroll-joinedTitle')}}</div>
            <div :class="$style.desc">{{$t('enroll-joinedDesc')}}</div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center" v-if="!registered">
        <div class="col-sm-10 col-md-7 col-lg-5 col-xl-4">
          <div :class="$style.label">{{$t('enroll-label')}}</div>
          <h2 :class="$style.action">{{$t('enroll-action')}}</h2>
          <div :class="$style.subaction">{{$t('enroll-subaction')}}</div>
          <form id="registration" :class="$style.register" @submit.prevent="onSubmit">
            <div class="form-group" :class="{'form-group--error' : $v.firstName.$error}">
              <input
                id="reg-form-firstname"
                name="firstname"
                type="text"
                :placeholder="$t('enroll-form-firstname-placeholder')"
                class="form-control input"
                :class="$style.input"
                v-model.trim="$v.firstName.$model"
              />
              <div
                class="invalid-feedback"
                v-if="$v.firstName.$dirty && !$v.firstName.required"
              >{{$t('enroll-form-firstname-error')}}</div>
            </div>
            <div class="form-group" :class="{'form-group--error' : $v.email.$error}">
              <input
                name="email"
                type="email"
                :placeholder="$t('enroll-form-email-placeholder')"
                class="form-control input"
                :class="$style.input"
                id="__BVID__63"
                v-model.trim="$v.email.$model"
              />
              <div
                class="invalid-feedback"
                v-if="$v.email.$dirty && !$v.email.required"
              >{{$t('enroll-form-email-error')}}</div>
            </div>
            <div :class="$style.register">
              <Checkbox
                id="checkbox-64"
                :dark="false"
                :value="false"
                :class="$style.policy"
                @clicked="onCheckBoxClicked"
                :invalidFeedback="$t('enroll-form-agree-error')"
              >
                {{$t('enroll-form-privacy-policy')}}
                <a
                  href="/privacy"
                  target="_blank"
                  :class="$style.link"
                >{{$t('enroll-form-privacy-policy-text')}}</a>
              </Checkbox>
              <button
                type="submit"
                class="btn btn-secondary btn-block"
                :class="$style.button"
              >{{$t('enroll-form-submit')}}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import Checkbox from "./Checkbox";

import { required, email } from "vuelidate/lib/validators";

export default {
  components: {
    Checkbox,
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
      firstName: "",
      email: "",
      registered: false,
      minLength: 1,
      agreed: true,
      funcUrl : "https://us-central1-pensezlavenir-4df21.cloudfunctions.net/",
      //funcUrl : "http://localhost:5001/pensezlavenir-4df21/us-central1/"
    };
  },
  computed: {
    state: function () {
      return this.$session !== undefined && this.$session.get("firstName")
        ? "joined"
        : "register";
    },
    isRegistred: function () {
      return this.$session !== undefined && this.$session.exists != undefined && this.$session.exists();
    },
  },
  mounted: function () {
    this.registered = this.isRegistred;
  },
  methods: {
    async subscribe() {
      this.$axios
        .$post(this.funcUrl + "subscribe", {
          email: this.$session.get("email"),
          fname: this.$session.get("firstName"),
          lname: "",
          tag: "registration"
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    async register() {
      this.$axios
        .$post(this.funcUrl + "register", {
          email: this.$session.get("email"),
          firstname: this.$session.get("firstName"),
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    onSubmit: function () {
      this.registered = false;
      if (this.validate() && this.agreed) {
        this.registered = true;
        this.$session.start();
        this.$session.set("firstName", this.firstName);
        this.$session.set("email", this.email);
        
        this.$session.set("hideReminder", true);
        
        this.$emit("update-show-reminder", false);

        this.$emit("update-user-info", {firstName:this.$session.get("firstName"), email:this.$session.get("email")});

        this.subscribe();

        setTimeout(function () {
          window.scrollTo(0, 0);
        }, 500);
      } else {
        console.log("invalid");
        this.registered = false;
      }
    },
    validate: function () {
      if (this.$v.$invalid) {
        var controls = ["firstName", "email" /*, "agreed"*/];
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
.enroll {
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
.enroll.success {
  padding-top: 53px;
}
@media (max-width: 767.98px) {
  .enroll {
    padding-top: 120px;
  }
}
.book1 {
  position: absolute;
  top: -120px;
  left: -380px;
  width: 1000px;
  height: 900px;
}
@media (max-width: 1599.98px) {
  .book1 {
    top: -115px;
    left: -432px;
    width: 930px;
    height: 810px;
  }
}
@media (max-width: 1199.98px) {
  .book1 {
    display: none;
  }
}
.book2 {
  position: absolute;
  bottom: -260px;
  right: -322px;
  width: 850px;
  height: 590px;
}
@media (max-width: 1599.98px) {
  .book2 {
    bottom: -239px;
    right: -288px;
    width: 750px;
    height: 500px;
  }
}
@media (max-width: 1199.98px) {
  .book2 {
    display: none;
  }
}
.bg {
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
  .bg {
    background-image: url(../assets/schedule-bg.svg);
    background-size: cover;
    height: 75%;
  }
}
.content {
  max-width: 320px;
  position: relative;
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
  margin: 0 auto;
}
@media (max-width: 767.98px) {
  .content {
    max-width: 100%;
  }
}
.joined {
  max-width: 310px;
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
  margin: 0 auto;
}
.joinedTitle {
  width: 250px;
  font-family: Bebas Neue;
  font-weight: 500;
  font-size: 48px;
  line-height: 48px;
  margin-top: -55px;
  margin-bottom: 16px;
  letter-spacing: 1.8px;
}
.desc,
.joinedTitle {
  text-align: center;
  color: #fff;
}
.desc {
  font-size: 16px;
  line-height: 24px;
  width: 240px;
  margin-bottom: 30px;
}
.done {
  width: 64px;
  height: 64px;
}
.image {
  width: 311px;
  height: 311px;
  background-position: 50%;
  background-size: contain;
  background-repeat: no-repeat;
}
.label {
  color: #000;
  margin-bottom: 6px;
  text-align: center;
  font-weight: 800;
  font-size: 14px;
  line-height: 145.4%;
  letter-spacing: 2px;
  text-transform: uppercase;
}
.action {
  font-family: Bebas Neue;
  font-weight: 500;
  font-size: 48px;
  line-height: 52px;
  margin-bottom: 13px;
}
.action,
.subaction {
  text-align: center;
  color: #fff;
}
.subaction {
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 60px;
}
.buttons {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.buttons > * {
  margin: 0 10px;
}
.or {
  margin: 20px 0 24px;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  color: #fff;
}
.input {
  margin-bottom: 40px;
}

.input:focus {
  color: #fff;
}

.register {
  width: 100%;
  border-color: #2469c7 !important;
}
.policy {
  margin-bottom: 30px;
}
.policy .link {
  letter-spacing: 0.5px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #fff;
  text-decoration: underline;
}
.policy .link:hover {
  color: hsla(0, 0%, 100%, 0.8);
}
.button .btn-secondary {
  width: 100%;
}
.button:active,
.button:focus,
.button:hover {
  color: #000;
  background-color: #b3daff;
  border-color: #b3daff;
}
.button .btn-outline-primary:not(:disabled):not(.disabled).active,
.button .btn-outline-primary:not(:disabled):not(.disabled):active,
.button .show > .btn-outline-primary.dropdown-toggle {
  color: #000;
  background-color: transparent;
  border-color: #2469c7;
}
</style>
