<template>
  <div :class="rootClasses">
    <input id="checkbox-id-64" type="checkbox" :class="$style.input" :value="inputValue"  v-on:click="onClickedOn($event)" required/>
    <label for="checkbox-id-64" :class="$style.label">
      <div :class="$style.wrapper">
        <span :class="$style.box">
          <svg
            viewBox="0 0 13 10"
            class="icon icon--check-2" 
            :class="[$style.icon, $style.checkIcon]"
          >
            <use xlink:href="#check-2">
              <svg fill="none" viewBox="0 0 13 10" id="check-2" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 3.5L6 8l5.5-7" stroke="#000" stroke-width="2" />
              </svg>
            </use>
          </svg>
        </span>
      </div>
      <span :class="$style.text" class="checkbox-text">
        <slot></slot>
      </span>
    </label>
    <div class="invalid-feedback" :class="$style['invalid-feedback']">You must agree before submitting.</div>
  </div>
</template>
<script>
export default {
    data: function(){
        return {
            inputValue : this.value,
            rootClasses : ""
        }
    },
  props: ["value"],
  methods: {
    onClickedOn: function (event) {
      const checkedValue = document.querySelector("#checkbox-id-64").value;
      if (checkedValue == "true") {
        this.rootClasses = [this.$style.checkbox];
        this.inputValue = "false";
      } else {
        this.rootClasses = [this.$style.checkbox, this.$style.checked];
        this.inputValue = "true";
      }

      console.log("checkedValue",  this.inputValue);
    },
  },
  mounted: function () {
      this.inputValue = this.value;
    const checkedValue = document.querySelector("#checkbox-id-64").value;
    console.log("checkedValue", checkedValue);
    if (checkedValue == "true") {
        this.rootClasses = [this.$style.checkbox, this.$style.checked];
    } else {
        this.rootClasses = [this.$style.checkbox];
    }
  },
};
</script>

<style module>
.icon {
    display: inline-block;
    width: 1em;
    height: 1em;
    line-height: 1em;
    vertical-align: middle
}

.icon use {
    color: inherit;
    fill: currentColor
}

.icon.stroked use {
    stroke: currentColor
}

.icon.hover-fill use,
.icon.nofill use {
    fill: none
}

.icon.hover-fill use:hover {
    fill: currentColor
}

.icon.active-filly use {
    fill: none
}

.icon.active-filly.is-active use {
    fill: currentColor
}

.icon.big {
    width: 2em;
    height: 2em
}

.icon.large {
    width: 3em;
    height: 3em
}

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