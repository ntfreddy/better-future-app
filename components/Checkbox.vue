<template>
  <div :class="{[$style.checkbox]: true, [$style.checked]: checky, [$style.dark]: dark}">
    <input
      :id="id"
      type="checkbox"
      :class="$style.input"
      :value="inputValue"
      @click="onClickedOn($event)"
      v-model.trim="checky"
    />
    <label :for="id" :class="$style.label">
      <div :class="$style.wrapper">
        <span :class="{[$style.box]:true, [$style.hasBorder]:dark}">
          <Icon name="check-2" viewBox="0 0 13 10" :class="$style.checkIcon" />
        </span>
      </div>
      <span :class="$style.text" class="checkbox-text">
        <slot></slot>
      </span>
    </label>
    <div
      v-if="$v.checky.$dirty && !$v.checky.required"
      :class="$style['invalid-feedback']"
    >{{invalidFeedback}}</div>
  </div>
</template>
<script>
import { required } from "vuelidate/lib/validators";
import Icon from "./Icon";

export default {
  props: ["invalidFeedback", "id", "dark", "value"],
  data: function () {
    return {
      inputValue: this.value,
      checky: false,
    };
  },
  validations: {
    checky: {
      required(val) {
        return val;
      },
    },
  },
  methods: {
    onClickedOn: function (event) {
      //console.log("checky", this.checky);
      this.inputValue = !this.checky;
      
      this.$v.checky.$touch();
      this.$emit("clicked", this.inputValue == true);
      //console.log("checkedValue", this.inputValue);
    },
  },
  mounted: function () {
    this.inputValue = this.value;
    //console.log("checky", this.checky);
  },
};
</script>

<style module>
.checkbox {
  display: -webkit-box;
  display: -ms-flexbox;
  display: block;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.checkbox label {
  margin: 0;
}
.checkbox.disabled {
  opacity: 0.7;
}
.checkbox.disabled .label {
  cursor: default;
}
.checkbox.disabled .box:hover {
  border-color: #ececec;
}
.input {
  display: none;
  -ms-flex-negative: 0;
  flex-shrink: 0;
}
.label {
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
.text {
  -webkit-transition-duration: 0.2s;
  transition-duration: 0.2s;
  letter-spacing: 0.5px;
  margin-left: 12px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #fff;
}
.wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  max-width: 20px;
}
.checkbox:hover .text,
.checked .text {
  color: #fff;
}
.checkbox.dark:hover .text {
  color: rgba(0, 0, 0, 0.7);
}
.checked.dark .text {
  color: rgba(0, 0, 0, 0.6);
}
.box {
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
.box.hasBorder {
  height: 22px;
  width: 22px;
  border: 1px solid rgba(0, 0, 0, 0.4);
}
.box.hasBorder:hover {
  border-color: rgba(0, 0, 0, 0.6);
}
.checkbox:hover .box {
  background-color: hsla(0, 0%, 100%, 0.9);
}
.checkIcon {
  font-size: 13px;
  color: #000;
  opacity: 0;
  vertical-align: top;
  z-index: 0;
  -webkit-transition: opacity 0.2s;
  transition: opacity 0.2s;
}
.checked .checkIcon {
  opacity: 1;
}
.note {
  margin-left: 32px;
}
.dark .text {
  color: rgba(0, 0, 0, 0.6);
}
.dark .text:hover {
  color: rgba(0, 0, 0, 0.7);
}

.invalid-feedback {
  font-family: Roboto;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #ffb9b9;
  /*
  margin-top: -36px;
  margin-bottom: 16px;*/
  text-align: left;
}
</style>