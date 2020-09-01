import Vue from "vue";
import form from "~/mixins/form.js";

export default (context, inject) => {
    inject('form', new Vue(form));


    // For Nuxt <= 2.12, also add 👇
    context.$form = new Vue(form);

    //console.log("context : ", context.app)
}