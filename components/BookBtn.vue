<template>
  <div :class="$style.wrapper" v-show="!isBookWasOrdered" v-on:click="onOpenPopup('get-book')">
    <div :class="$style.content">
      <div :class="$style.image"></div>
      <div :class="$style.text">
        {{$t('bookBtn-text-1')}}
        <span :class="$style.highlight">{{$t('bookBtn-text-highlight')}}</span>{{$t('bookBtn-text-2')}}
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name:"BootBtn",
  components:{
    
  },
  data: function() {
      return {
          inTopPosition: true,
      }
  },
  computed: { 
      isBookWasOrdered: function() {
          return this.$session !== undefined && this.$session.get("isBookWasOrdered");
      }
  },
  mounted: function() {
      var e = this;
      window.addEventListener("scroll", (function() {
          window.pageYOffset > 20 ? e.inTopPosition && (e.inTopPosition = !1) : e.inTopPosition || (e.inTopPosition = !0)
      }
      ))
  },
  methods: {   
    ...mapActions({
      onOpenPopup: "OPEN"
    }),
  }
};
</script>

<style module>
.wrapper {
  position: fixed;
  z-index: 100;
  cursor: pointer;
  left: 30px;
  bottom: 30px;
  -webkit-transition: all 0.4s ease-in;
  transition: all 0.4s ease-in;
}
.wrapper:hover .content:before {
  opacity: 0.04;
}
@media (max-width: 767.98px) {
  .wrapper {
    bottom: 18px;
  }
}
.content {
  background: #c9daf0;
  border-radius: 16px;
  padding: 21px 13px 21px 103px;
  position: relative;
}
.content:before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #000;
  opacity: 0;
  border-radius: 16px;
  -webkit-transition: opacity 0.2s ease-in-out;
  transition: opacity 0.2s ease-in-out;
}
@media (max-width: 767.98px) {
  .content {
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    padding: 13px 16px 12px;
  }
  .content,
  .content:before {
    border-radius: 33px;
  }
}
.image {
  position: absolute;
  bottom: -17px;
  left: 0;
  width: 84px;
  height: 133px;
  background-image: url(../assets/book-small.png);
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
}
@media (max-width: 767.98px) {
  .image {
    display: none;
  }
}
.text {
  font-weight: 700;
  font-size: 21px;
  line-height: 25px;
  text-transform: uppercase;
  color: #000;
  width: 120px;
}
.text .highlight {
  color: #2469c7;
}
@media (max-width: 767.98px) {
  .text {
    width: auto;
    font-size: 17px;
    text-transform: capitalize;
  }
}
</style>