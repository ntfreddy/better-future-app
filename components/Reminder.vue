<template>
  <div class="reminder_2pbv5" style="display:block;">
    <div class="closeBox_jsrtl">
      <svg viewBox="0 0 18 18" class="icon icon--cross icon_2SKlE close_ahHRa">
        <use xlink:href="#cross">
          <svg viewBox="0 0 18 18" id="cross">
            <path
              d="M17.67.33a1.115 1.115 0 00-1.581 0L9 7.417 1.911.329a1.115 1.115 0 00-1.582 0 1.115 1.115 0 000 1.582L7.42 9l-7.09 7.088a1.115 1.115 0 000 1.582c.216.215.505.331.787.331.282 0 .571-.107.787-.331l7.089-7.089 7.089 7.089c.215.215.505.331.786.331.29 0 .572-.107.787-.331a1.115 1.115 0 000-1.582L10.582 9l7.089-7.09a1.115 1.115 0 000-1.58z"
              fill-rule="nonzero"
              stroke-width=".8"
            />
          </svg>
        </use>
      </svg>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-lg-4">
          <img src="../assets/reminder.svg" class="image_3VUaG" />
        </div>
        <div class="col-sm-12 col-lg-8">
          <div class="content_OqPHq">
            <div class="text_3oKnO">{{title}}</div>
            <div class="btn__r4xY">
              <span>Register</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Reminder",
  computed: {
    title: function () {
      return "Register to receive updates";
    },
  },
  props: ["buttonTitle"],
};
</script>

<style>
.reminder_2pbv5 {
  background: #b2daff;
  position: relative;
}
.image_3VUaG {
  width: 334px;
  height: 100px;
  -o-object-fit: contain;
  object-fit: contain;
  margin-left: -20px;
}
@media (max-width: 991.98px) {
  .image_3VUaG {
    position: absolute;
    top: 0;
    left: -84px;
  }
}
.content_OqPHq {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  height: 100%;
}
@media (max-width: 991.98px) {
  .content_OqPHq {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    height: 100px;
  }
}
.text_3oKnO {
  font-weight: 700;
  font-size: 21px;
  line-height: 25px;
  text-transform: uppercase;
  color: #000;
  letter-spacing: -0.8px;
}
@media (max-width: 991.98px) {
  .text_3oKnO {
    text-transform: none;
  }
}
@media (max-width: 767.98px) {
  .text_3oKnO {
    margin-left: 126px;
    width: 180px;
  }
}
.btn__r4xY {
  font-weight: 700;
  font-size: 19px;
  line-height: 22px;
  color: #2469c7;
  padding: 17px 80px;
  border-radius: 40px;
  margin-left: 40px;
  cursor: pointer;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  background-color: #fff;
  position: relative;
}
@media (max-width: 991.98px) {
  .btn__r4xY {
    display: none;
  }
}
.btn__r4xY:before {
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
.btn__r4xY span {
  z-index: 2;
  position: relative;
}
.btn__r4xY:active:before,
.btn__r4xY:focus:before,
.btn__r4xY:hover:before {
  opacity: 0.05;
}
.closeBox_jsrtl {
  width: 40px;
  height: 40px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 15px;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  z-index: 100;
}
.closeBox_jsrtl:hover .close_ahHRa {
  color: hsla(0, 0%, 100%, 0.8);
}
@media (max-width: 1199.98px) {
  .closeBox_jsrtl {
    right: 5px;
  }
}
@media (min-width: 768px) and (max-width: 991.98px) {
  .closeBox_jsrtl {
    right: 24px;
  }
}
.close_ahHRa {
  font-size: 15px;
  color: hsla(0, 0%, 100%, 0.6);
}

/*
.reminder_2pbv5 {
    background: #b2daff;
    position: relative
}


.closeBox_jsrtl {
    width: 40px;
    height: 40px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    cursor: pointer;
    position: absolute;
    top: 50%;
    right: 15px;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    z-index: 100
}

.closeBox_jsrtl:hover .close_ahHRa {
    color: hsla(0, 0%, 100%, .8)
}

@media (max-width:1199.98px) {
    .closeBox_jsrtl {
        right: 5px
    }
}

@media (min-width:768px) and (max-width:991.98px) {
    .closeBox_jsrtl {
        right: 24px
    }
}

.close_ahHRa {
    font-size: 15px;
    color: hsla(0, 0%, 100%, .6)
}

.icon_2SKlE {
    display: inline-block;
    width: 1em;
    height: 1em;
    line-height: 1em;
    vertical-align: middle
}

.icon_2SKlE use {
    color: inherit;
    fill: currentColor
}

.icon_2SKlE.stroked_1yLoG use {
    stroke: currentColor
}

.icon_2SKlE.hover-fill_2F_u8 use,
.icon_2SKlE.nofill_1GHxw use {
    fill: none
}

.icon_2SKlE.hover-fill_2F_u8 use:hover {
    fill: currentColor
}

.icon_2SKlE.active-fill_1ZpLy use {
    fill: none
}

.icon_2SKlE.active-fill_1ZpLy.is-active_2JuBa use {
    fill: currentColor
}

.icon_2SKlE.big_ata0o {
    width: 2em;
    height: 2em
}

.icon_2SKlE.large_24yv8 {
    width: 3em;
    height: 3em
}

.image_3VUaG {
    width: 334px;
    height: 100px;
    -o-object-fit: contain;
    object-fit: contain;
    margin-left: -20px
}

@media (max-width:991.98px) {
    .image_3VUaG {
        position: absolute;
        top: 0;
        left: -84px
    }
}

.content_OqPHq {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    height: 100%
}

@media (max-width:991.98px) {
    .content_OqPHq {
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        height: 100px
    }
}

.text_3oKnO {
    font-weight: 700;
    font-size: 21px;
    line-height: 25px;
    text-transform: uppercase;
    color: #000;
    letter-spacing: -.8px
}

@media (max-width:991.98px) {
    .text_3oKnO {
        text-transform: none
    }
}

@media (max-width:767.98px) {
    .text_3oKnO {
        margin-left: 126px;
        width: 180px
    }
}

.btn__r4xY {
    font-weight: 700;
    font-size: 19px;
    line-height: 22px;
    color: #2469c7;
    padding: 17px 80px;
    border-radius: 40px;
    margin-left: 40px;
    cursor: pointer;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    background-color: #fff;
    position: relative
}

@media (max-width:991.98px) {
    .btn__r4xY {
        display: none
    }
}

.btn__r4xY:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: #000;
    opacity: 0;
    border-radius: 40px;
    -webkit-transition: opacity .2s ease-in-out;
    transition: opacity .2s ease-in-out
}

.btn__r4xY span {
    z-index: 2;
    position: relative
}

.btn__r4xY:active:before,
.btn__r4xY:focus:before,
.btn__r4xY:hover:before {
    opacity: .05
}*/
</style>