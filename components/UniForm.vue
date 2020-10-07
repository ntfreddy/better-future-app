<template>
  <div :class="$style.form">
    <form :id="id" :class="$style.register" @submit.prevent="onSubmit">
      <div
        class="form-group"
        :class="{ 'form-group--error': $v.firstName.$error }"
      >
        <input
          name="firstname"
          type="text"
          :placeholder="$t('form-firstname-placeholder')"
          class="form-control input"
          :class="$style.input"
          v-model.trim="$v.firstName.$model"
        />
        <div
          class="invalid-feedback"
          v-if="$v.firstName.$dirty && !$v.firstName.required"
        >
          {{ $t("form-firstname-error") }}
        </div>
      </div>
      <div class="form-group" :class="{ 'form-group--error': $v.email.$error }">
        <input
          name="email"
          type="email"
          :placeholder="$t('form-email-placeholder')"
          class="form-control input"
          :class="$style.input"
          v-model.trim="$v.email.$model"
        />
        <div
          class="invalid-feedback"
          v-if="$v.email.$dirty && !$v.email.required"
        >
          {{ $t("form-email-error") }}
        </div>
      </div>
      <div class="form-group" :class="{ 'form-group--error': $v.email.$error }">
        <textarea
          id="textarea"
          name="textarea"
          :placeholder="errorTextMessage"
          rows="3"
          wrap="soft"
          max-rows="3"
          class="form-control input"
          :class="$style.input"
          v-model.trim="$v.subject.$model"
        ></textarea>
        <div
          class="invalid-feedback"
          v-if="$v.subject.$dirty && !$v.subject.required"
        >
          {{ errorTextMessage }}
        </div>
      </div>
      <Checkbox
        id="checkbox-id-301"
        :dark="true"
        :value="false"
        :class="$style.policy"
        @clicked="onCheckBoxClicked"
        :invalidFeedback="$t('form-agree-error')"
      >
        {{ $t("form-privacy-policy") }}
        <a href="/privacy" target="_blank" :class="$style.link">{{
          $t("form-privacy-policy-text")
        }}</a>
      </Checkbox>

      <button type="submit" :class="$style.button">
        {{ btnText }}
      </button>
    </form>
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";

import Checkbox from "./Checkbox";
export default {
  components: {
    Checkbox,
  },
  props: ["id", "type", "btnText"],
  validations: {
    firstName: {
      required,
    },
    email: {
      required,
      email,
    },
    subject: {
      required,
    },
  },
  data: function () {
    return {
      firstName:
        this.$session !== undefined && this.$session.get("firstName")
          ? this.$session.get("firstName")
          : "",
      email:
        this.$session !== undefined && this.$session.get("email")
          ? this.$session.get("email")
          : "",
      subject: "",
      registered: false,
      agreed: false,
      funcUrl: "https://us-central1-pensezlavenir-4df21.cloudfunctions.net/",
    };
  },
  computed: {
    errorTextMessage: function () {
      return "pray" === this.type
        ? this.$t("form-subject-placeholder-prayer-request")
        : "question" === this.type
        ? this.$t("form-subject-placeholder-question")
        : this.$t("form-subject-placeholder-request");
    },
  },
  created: function () {},
  methods: {
    async sendAction(email, firstName, subject) {
      var url = "";
      switch (this.type) {
        case "pray":
          url = this.funcUrl + "sendPrayerRequest";
          break;
        case "question":
          url = this.funcUrl + "sendAskQuestion";
          break;
        case "bible":
          url = this.funcUrl + "sendBibleStudy";
          break;
        default:
          url = this.funcUrl + "sendPrayerRequest";
      }
      this.$axios
        .$post(url, {
          email: email,
          firstname: firstName,
          message: subject,
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

        this.sendAction(this.email, this.firstName, this.subject);
        let that = this;
        setTimeout(function () {
          that.$emit("close-popup");
        }, 500);
      } else {
        //console.log("invalid");
        this.registered = false;
      }
    },
    validate: function () {
      if (this.$v.$invalid) {
        var controls = ["firstName", "email"];
        ("pray" !== this.type && "question" !== this.type) ||
          controls.push("subject");
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
.form {
  width: 315px;
}
.input {
  margin-bottom: 40px;
  border-color: rgba(0, 0, 0, 0.4) !important;
  color: rgba(0, 0, 0, 0.6) !important;
}
@media (min-width: 1440px) and (max-width: 1599.98px) {
  .input {
    margin-bottom: 30px;
  }
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
.register_1SEDB {
  width: 100%;
  border-color: #2469c7 !important;
}
.button {
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
  text-align: center;
  cursor: pointer;
  margin-top: 40px;
}
.button,
.button:active,
.button:focus,
.button:hover {
  color: #fff;
  background-color: #2469c7;
  border-color: #2469c7;
}
.button.disabled {
  pointer-events: none;
  opacity: 0.7;
}
.policy {
  margin-bottom: 30px;
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