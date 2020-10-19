<template>
  <div :class="$style.reminder">
    <div :class="$style.closeBtn" @click="$emit('close')">
      <Icon name="cross" viewBox="0 0 18 18" :class="$style.close" />
    </div>
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-lg-4">
          <img src="../assets/reminder.svg" :class="$style.image" />
        </div>
        <div class="col-sm-12 col-lg-8">
          <div :class="$style.content" @click="$emit('remind')">
            <div :class="$style.text">{{$t("reminder-text")}}</div>
            <div :class="$style.btn">
              <span>{{$t("reminder-btn")}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Icon from "./Icon"

export default {
  name: "Reminder",
  components:{
    Icon
  },
  computed: {
    title: function () {
      return "Register to receive updates";
    },
  },
  props: ["buttonTitle"],
};
</script>

<style module>
.reminder {
  background: #b2daff;
  position: relative;
}
.image {
  width: 334px;
  height: 100px;
  -o-object-fit: contain;
  object-fit: contain;
  margin-left: -20px;
}
@media (max-width: 991.98px) {
  .image {
    position: absolute;
    top: 0;
    left: -84px;
  }
}
.content {
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
  .content {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    height: 100px;
  }
}
.text {
  font-weight: 700;
  font-size: 21px;
  line-height: 25px;
  text-transform: uppercase;
  color: #000;
  letter-spacing: -0.8px;
}
@media (max-width: 991.98px) {
  .text {
    text-transform: none;
  }
}
@media (max-width: 767.98px) {
  .text {
    margin-left: 126px;
    width: 180px;
  }
}
.btn {
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
  .btn {
    display: none;
  }
}
.btn:before {
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
.btn span {
  z-index: 2;
  position: relative;
}
.btn:active:before,
.btn:focus:before,
.btn:hover:before {
  opacity: 0.05;
}

.closeBtn {
  cursor: pointer;
  z-index: 100;
}
.closeBtn:hover .close {
  opacity: 0.6;
}
/*
.closeBox {
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
.closeBox:hover .close {
  color: hsla(0, 0%, 100%, 0.8);
}

@media (max-width: 1199.98px) {
  .closeBox {
    right: 5px;
  }
}
@media (min-width: 768px) and (max-width: 991.98px) {
  .closeBox {
    right: 24px;
  }
}
*/
.close {
  /*font-size: 15px;
  color: hsla(0, 0%, 100%, 0.6);*/

   font-size: 20px;
  position: absolute;
  top: 35px;
  right: 29px;
  color: #000;
  cursor: pointer;
  opacity: 0.4;
  -webkit-transition: all 0.3s ease-in;
  transition: all 0.3s ease-in;
  z-index:100;
}
</style>