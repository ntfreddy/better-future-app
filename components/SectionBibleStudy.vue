<template>
  <div id="section-bible-study" class="registration_1wZW9">
    <div class="container conatainer_1cvWr">
      <div class="bg_1Pe_G"></div>
      <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-6">
          <div class="left_3XNWi">
            <svg viewBox="0 0 103 103" class="icon icon--video icon_2SKlE video_3U9y2">
              <use xlink:href="#video">
                #shadow-root (closed)
                <svg fill="none" viewBox="0 0 103 103" id="video" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#bpclip0)">
                    <path
                      d="M82.585 9.738C65.48-2.567 40.652-3.288 22.841 8.015c-43.356 27.509-16.633 87.07 28.307 94.337 51.32 8.297 69.348-65.345 31.437-92.614z"
                      fill="#fff" />
                    <path
                      d="M45.77 37.079c3.817.002 7.634-.008 11.45.004 3.195.01 5.907 1.032 7.82 3.75 1.401 1.992 1.527 4.295 1.557 6.58.062 4.717.024 9.437.002 14.155-.014 2.802-1.188 4.066-3.985 4.08-7.567.038-15.136.034-22.701-.03-2.156-.018-4.285-.296-6.115-1.702-2.404-1.845-3.458-4.306-3.478-7.254-.036-5.38-.038-10.761-.028-16.14.004-2.087 1.337-3.423 3.428-3.437 4.015-.026 8.032-.008 12.05-.006zM80.595 51.875c0 3.75-.008 7.501.006 11.252.004.931-.363 1.614-1.207 1.991-.793.356-1.56.254-2.233-.307-2.369-1.975-4.758-3.929-7.084-5.954-1.156-1.005-1.657-2.389-1.677-3.91-.03-2.391-.035-4.782-.004-7.173.022-1.556.55-2.95 1.742-3.982 2.257-1.956 4.554-3.861 6.837-5.786.749-.632 1.587-.843 2.49-.408.87.422 1.168 1.17 1.162 2.127-.022 4.049-.01 8.097-.01 12.148-.008.002-.016.002-.022.002z"
                      fill="#2469C7" />
                  </g>
                </svg>
              </use>
            </svg>
            <p class="title_2TTi8">
              <span class="highlight_-6Kzt">{{data.titleHighlight}}</span>{{data.title}}
            </p>
            <div class="text_2SlSt">{{data.text}}</div>
          </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-6">
          <div class="right_3L7uK">
            <div class="heading_j-F-3">{{data.heading}}<span class="highlight_-6Kzt">{{data.headingHighlight}}</span>
            </div>
            <form class="register_1apbE">
              <div class="form-group">
                <input name="firstname" type="text" :placeholder="data.form.placeholder.firstname" value class="form-control input_2svdd input" id="__BVID__36" />
              </div>
              <div class="form-group">
                <input name="email" type="email" :placeholder="data.form.placeholder.email" value class="form-control input_2svdd input" id="__BVID__37" />
              </div>
              <div class="form-group">
                <input name="phone" type="text" :placeholder="data.form.placeholder.phone" value class="form-control input_2svdd input" id="__BVID__38" />
              </div>
              <div class="register_1apbE">
                <div class="checkbox_2oMY_ checked_2Q1D1 policy_2SL24">
                  <input id="checkbox-id-bible-study" type="checkbox" value="true" checked="checked" class="input_1JWT8" />
                  <label for="checkbox-id-bible-study" class="label_Nx89H">
                    <div class="wrapper_1SNxd">
                      <span class="box_3slHt">
                        <svg viewBox="0 0 13 10" class="icon icon--check-2 icon_2SKlE checkIcon_2VLjw">
                          <use xlink:href="#check-2" />
                        </svg>
                      </span>
                    </div>
                    <span class="text_2pSav checkbox-text">
                      {{data.form.register.text}}
                      <a :href="data.form.register.privacy.link" target="_blank" class="link_26c0V">{{data.form.register.privacy.text}}</a>
                    </span>
                  </label>
                  <!---->
                </div>
                <div class="button_1iC2O">
                  <span>{{data.form.register.buttonTitle}}</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SectionBibleStudy",
  props: ["data"]
};
</script>
<style scoped>
.form-control {
    border: 1px solid #fff;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-radius: 8px;
    color: #fff!important;
    font-size: 16px;
    line-height: 24px;
    height: calc(1.5em + 2rem);
    padding: 17px 21px
}

.form-control,
.form-control:focus {
    background-color: hsla(0, 0%, 100%, 0)!important;
    outline: 0!important
}

.form-control:focus {
    -webkit-box-shadow: none;
    box-shadow: none;
    border: 2px solid #fff;
    padding: 16px 21px
}

.form-control::-webkit-input-placeholder {
    color: hsla(0, 0%, 100%, .6)
}

.form-control:-moz-placeholder,
.form-control::-moz-placeholder {
    color: hsla(0, 0%, 100%, .6)
}

.form-control:-ms-input-placeholder {
    color: hsla(0, 0%, 100%, .6)
}

.form-control::-ms-input-placeholder {
    color: hsla(0, 0%, 100%, .6)
}

.form-control::placeholder {
    color: hsla(0, 0%, 100%, .6)
}

.form-control.is-invalid,
.was-validated .form-control:invalid {
    border: 2px solid #ffb9b9;
    padding: 17px 21px;
    background-image: unset
}

.form-control.is-invalid:focus,
.was-validated .form-control:invalid:focus {
    border: 2px solid #ffb9b9;
    -webkit-box-shadow: none;
    box-shadow: none;
    padding: 17px 21px;
    background-image: unset
}

.invalid-feedback {
    font-family: Roboto;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #ffb9b9;
    margin-top: -36px;
    margin-bottom: 16px;
    text-align: left
}

.form-control.is-valid,
.form-control.is-valid:focus,
.was-validated .form-control:valid,
.was-validated .form-control:valid:focus {
    border: 2px solid #fff;
    padding: 17px 21px;
    -webkit-box-shadow: none;
    box-shadow: none;
    background-image: unset
}

body[class^=is-popup-active],
body[class^=is-popup-visible] {
    overflow: hidden
}

.registration_1wZW9 {
    width: 100%;
    height: auto;
    padding: 0 0 60px;
    margin-top: -55px
}

@media (max-width:1199.98px) {
    .registration_1wZW9 {
        margin-top: 0;
        padding-bottom: 40px
    }
}

.conatainer_1cvWr {
    background: #f7f0e7;
    border-radius: 48px;
    position: relative;
    overflow: hidden
}

@media (max-width:767.98px) {
    .conatainer_1cvWr {
        border-radius: 32px
    }
}

@media (prefers-color-scheme:dark) {
    .conatainer_1cvWr {
        background: #1c1c1f
    }
    .conatainer_1cvWr:after {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: rgba(28, 28, 31, .85)
    }
    .heading_j-F-3,
    .title_2TTi8 {
        color: #fff
    }
    .text_2SlSt {
        color: hsla(0, 0%, 100%, .6)
    }
    .policy_2SL24 .checkbox-text {
        color: hsla(0, 0%, 100%, .6)!important
    }
    .policy_2SL24 .link_26c0V {
        color: hsla(0, 0%, 100%, .6)
    }
    .policy_2SL24 .link_26c0V:hover {
        color: hsla(0, 0%, 100%, .8)
    }
}


.bg_1Pe_G {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url(../assets/registration.svg);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover
}

@media (max-width:767.98px) {
    .bg_1Pe_G {
        background-image: url(../assets/registration_mobile.svg);
        height: 60%
    }
}

@media (max-width:767.98px) {
    .success_1j_5V .bg_1Pe_G {
        height: 100%;
        background-position: top
    }
}

.left_3XNWi {
    position: relative;
    padding: 80px 20px 86px 50px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    z-index: 3
}

@media (max-width:991.98px) {
    .left_3XNWi {
        padding: 80px 20px 0;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center
    }
}


.success_1j_5V .title_2TTi8 {
    text-align: center;
    width: 200px
}

.success_1j_5V .text_2SlSt {
    text-align: center;
    width: 300px
}

.success_1j_5V .left_3XNWi {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding-bottom: 74px
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

.video_3U9y2 {
    font-size: 103px;
    margin-bottom: 67px
}

@media (max-width:767.98px) {
    .video_3U9y2 {
        margin-bottom: 58px
    }
}

.title_2TTi8 {
    font-family: Bebas Neue;
    font-weight: 500;
    font-size: 48px;
    line-height: 48px;
    color: #000;
    margin-bottom: 30px;
    width: 300px
}

@media (max-width:991.98px) {
    .title_2TTi8 {
        margin-bottom: 16px;
        text-align: center
    }
}

.highlight_-6Kzt {
    color: #2469c7
}

.text_2SlSt {
    font-family: Roboto;
    font-size: 14px;
    line-height: 21px;
    color: rgba(0, 0, 0, .6);
    width: 345px
}

@media (max-width:991.98px) {
    .text_2SlSt {
        margin-bottom: 0;
        text-align: center;
        width: 260px
    }
}

.right_3L7uK {
    position: relative;
    z-index: 2;
    padding: 106px 0 86px;
    min-height: 600px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
}

@media (max-width:767.98px) {
    .right_3L7uK {
        padding: 27px 0 86px
    }
}

@media (min-width:768px) and (max-width:991.98px) {
    .right_3L7uK {
        padding: 27px 0 86px
    }
}

.heading_j-F-3 {
    font-family: Roboto;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    text-transform: uppercase;
    color: #000;
    width: 250px;
    margin-bottom: 30px
}

@media (max-width:991.98px) {
    .heading_j-F-3 {
        font-size: 19px;
        line-height: 22px;
        text-transform: unset;
        width: 100%;
        text-align: center;
        margin-bottom: 36px
    }
}

.register_1apbE {
    width: 350px
}

@media (max-width:991.98px) {
    .register_1apbE {
        width: 315px;
        margin: 0 auto
    }
}

.input_2svdd {
    margin-bottom: 30px;
    border: 2px solid #fff;
    color: rgba(0, 0, 0, .8)!important
}

.input_2svdd,
.input_2svdd:focus {
    background-color: #fff!important
}

.input_2svdd:focus {
    border-color: #2469c7!important
}

.input_2svdd::-webkit-input-placeholder {
    color: rgba(0, 0, 0, .4)
}

.input_2svdd:-moz-placeholder,
.input_2svdd::-moz-placeholder {
    color: rgba(0, 0, 0, .4)
}

.input_2svdd:-ms-input-placeholder {
    color: rgba(0, 0, 0, .4)
}

.input_2svdd::-ms-input-placeholder {
    color: rgba(0, 0, 0, .4)
}

.input_2svdd::placeholder {
    color: rgba(0, 0, 0, .4)
}

.register_1apbE {
    width: 350px
}

@media (max-width:991.98px) {
    .register_1apbE {
        width: 315px;
        margin: 0 auto
    }
}

.checkbox_2oMY_ {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.checkbox_2oMY_ label {
    margin: 0
}

.checkbox_2oMY_.disabled_AAlVs {
    opacity: .7
}

.checkbox_2oMY_.disabled_AAlVs .label_Nx89H {
    cursor: default
}

.checkbox_2oMY_.disabled_AAlVs .box_3slHt:hover {
    border-color: #ececec
}

.checked_2Q1D1 .checkIcon_2VLjw {
    opacity: 1
}

.checkbox_2oMY_:hover .text_2pSav,
.checked_2Q1D1 .text_2pSav {
    color: #fff
}

.text_2pSav {
    -webkit-transition-duration: .2s;
    transition-duration: .2s;
    letter-spacing: .5px;
    margin-left: 12px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #fff
}

.checkbox_2oMY_.dark_rmGZs:hover .text_2pSav {
    color: rgba(0, 0, 0, .7)
}

.checked_2Q1D1.dark_rmGZs .text_2pSav {
    color: rgba(0, 0, 0, .6)
}

.policy_2SL24 {
    margin-top: 20px;
    margin-bottom: 38px
}

.policy_2SL24 .checkbox-text {
    color: rgba(0, 0, 0, .6)!important
}

.policy_2SL24 .link_26c0V {
    letter-spacing: .5px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: rgba(0, 0, 0, .6);
    text-decoration: underline
}

.policy_2SL24 .link_26c0V:hover {
    color: rgba(0, 0, 0, .8)
}

.input_1JWT8 {
    display: none;
    -ms-flex-negative: 0;
    flex-shrink: 0
}

.label_Nx89H {
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
    align-items: center
}

.wrapper_1SNxd {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    max-width: 20px
}


.box_3slHt {
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
    -webkit-transition: all .5s;
    transition: all .5s
}

.box_3slHt.hasBorder_3B_CO {
    height: 22px;
    width: 22px;
    border: 1px solid rgba(0, 0, 0, .4)
}

.box_3slHt.hasBorder_3B_CO:hover {
    border-color: rgba(0, 0, 0, .6)
}

.checkbox_2oMY_:hover .box_3slHt {
    background-color: hsla(0, 0%, 100%, .9)
}

.checkIcon_2VLjw {
    font-size: 13px;
    color: #000;
    opacity: 0;
    vertical-align: top;
    z-index: 0;
    -webkit-transition: opacity .2s;
    transition: opacity .2s
}

.checked_2Q1D1 .checkIcon_2VLjw {
    opacity: 1
}

.dark_rmGZs .text_2pSav {
    color: rgba(0, 0, 0, .6)
}

.dark_rmGZs .text_2pSav:hover {
    color: rgba(0, 0, 0, .7)
}


.button_1iC2O {
    border-radius: 40px;
    padding: 21px 29px;
    font-weight: 700;
    font-size: 19px;
    letter-spacing: .55px;
    line-height: 22px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transition: all .3s ease-in;
    transition: all .3s ease-in;
    cursor: pointer;
    color: #fff;
    background-color: #2469c7;
    border-color: #2469c7;
    position: relative;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content
}

@media (max-width:767.98px) {
    .button_1iC2O {
        width: auto;
        text-align: center
    }
}

.button_1iC2O:before {
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

.button_1iC2O span {
    z-index: 2;
    position: relative
}

.button_1iC2O:active:before,
.button_1iC2O:focus:before,
.button_1iC2O:hover:before {
    opacity: .08
}

.button_1iC2O.disabled_3yauq {
    pointer-events: none;
    opacity: .7
}


</style>
