import Vue from "vue";
import locomotiveScroll from "locomotive-scroll";

Object.defineProperty(Vue.prototype, "locomotiveScroll", {
    value: locomotiveScroll
});

export default (context, inject) => {
    const lmS = new locomotiveScroll({
        el: document.querySelector("#app"),
        smooth: false,
        smoothMobile: false,
        direction: "vertical",
    });
    //console.log("scroll", lmS);
    const func = function(target, offset, duration, easing, disableLerp, callback) {
        lmS.scrollTo(target, offset, duration, easing, disableLerp, callback);
    }

    //inject('scroll', lmS);
    inject('scrollTo', func);

    // For Nuxt <= 2.12, also add 👇
    //context.$scroll = lmS;
    context.$scrollTo = func;
}