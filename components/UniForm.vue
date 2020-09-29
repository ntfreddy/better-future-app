<template>
  <div :class="$style.form">
    <form id="registration" :class="$style.register">
      <div class="form-group" :class="{'form-group--error' : $v.firstName.$error}">
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
        >{{$t('form-firstname-error')}}</div>
      </div>
      <div class="form-group" :class="{'form-group--error' : $v.email.$error}">
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
        >{{$t('form-email-error')}}</div>
      </div>
      <div class="form-group" :class="{'form-group--error' : $v.email.$error}">
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
        >{{errorTextMessage}}</div>
      </div>
      <Checkbox
        id="checkbox-id-301"
        :dark="true"
        :value="false"
        :class="$style.policy"
        @clicked="onCheckBoxClicked"
        :invalidFeedback="$t('form-agree-error')"
      >
        {{$t('form-privacy-policy')}}
        <a
          href="/privacy"
          target="_blank"
          :class="$style.link"
        >{{$t('form-privacy-policy-text')}}</a>
      </Checkbox>

      <div
        :class="{[$style.button]:true, [$style.disabled]:loading}"
        v-on:click="onSubmit"
      >{{btnText}}</div>
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
  props: ["isRegistred", "type", "initialFields", "btnText"],
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
      firstName: "",
      email: "",
      subject: "",
      loading: false,
      agreed: true,
    };
  },
  computed: {
    errorTextMessage: function () {
      return "pray" === this.type
        ? this.$t('form-subject-placeholder-prayer-request')
        : "question" === this.type
        ?  this.$t('form-subject-placeholder-question')
        :  this.$t('form-subject-placeholder-request');
    },
  },
  created: function () {
    for (var e = 0, t = Object.entries(this.initialFields); e < t.length; e++) {
      var o = (0, r.default)(t[e], 2),
        n = o[0],
        l = o[1];
      this[n] = l;
    }
  },
  methods: {
    onSubmit: function () {
      (this.loading = !0),
        this.validate() && (this.isRegistred || this.agreed)
          ? ((this.loading = !1),
            this.$emit("on-submit", {
              firstName: this.isRegistred
                ? this.$session.get("firstName")
                : this.firstName,
              email: this.isRegistred ? this.$session.get("email") : this.email,
              subject: this.subject,
            }))
          : (this.loading = !1);
    },
    validate: function () {
      var e = [];
      this.isRegistred || (e.push("firstName"), e.push("email")),
        ("pray" !== this.type && "question" !== this.type) || e.push("subject");
      for (var t = !0, o = 0, n = e; o < n.length; o++) {
        var r = n[o];
        this[r] || (t && (t = !1), this.validateValue(r));
      }
      return t;
    },
    validateValue: function (e) {
      return this.$v[e].$touch();
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
  color: rgba(0, 0, 0, 0.6);
}
.input:-moz-placeholder,
.input::-moz-placeholder {
  color: rgba(0, 0, 0, 0.6);
}
.input:-ms-input-placeholder {
  color: rgba(0, 0, 0, 0.6);
}
.input::-ms-input-placeholder {
  color: rgba(0, 0, 0, 0.6);
}
.input::placeholder {
  color: rgba(0, 0, 0, 0.6);
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