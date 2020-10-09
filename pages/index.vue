<template>
  <div :class="$style.page">
    <TheHeader />
    <CallToActions />
    <EpisodeInfo />
    <Enroll/>
  </div>
</template>

<script>
import TheHeader from "../components/TheHeader";
import CallToActions from "../components/CallToActions";
import EpisodeInfo from "../components/EpisodeInfo";
import Enroll from "../components/Enroll";

export default {
  name: "index",
  components: {
    TheHeader,
    CallToActions,
    EpisodeInfo,
    Enroll,
  },
  data: function () {
    return {
    };
  },
  mounted: function () {
  },
  methods: {
  },
};
</script>

<style>
.form-control {
  border: 1px solid #fff;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 8px;
  color: #fff;
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
  display: block;
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

.form-group--error .input {
  border: 2px solid #ffb9b9;
  padding: 17px 21px;
}
</style>

<style module>
.page {
  width: 100vw;
  overflow: hidden;
  position: relative;
}
</style>