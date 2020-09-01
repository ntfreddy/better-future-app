<template>
  <div class="popup_3xF9I" active-id="get-book">
    <div class="wrapper_3auGi">
      <div class="content_2CQKO">
        <div class="inner_LBK-7 notRegistred_2AVFj">
          <div class="closeBtn_nR227">
            <svg viewBox="0 0 18 18" class="icon icon--cross icon_2SKlE close_30n8p">
              <use xlink:href="#cross" />
            </svg>
          </div>
          <div class="left_35nT1">
            <div class="title_YUgAD">
              <span class="highlight_249us">Free Offer!</span>
            </div>
            <div
              class="desc_CfzMZ"
            >Enjoy a copy of Cami’s favorite book! Register to get your free e-book today!</div>
            <form id="registration" class="register_1fnOy">
              <div class="form-group">
                <input
                  name="firstname"
                  type="text"
                  placeholder="Enter your name"
                  class="form-control input_1SdKA input"
                  id="__BVID__257"
                />
                <!---->
              </div>
              <div class="form-group">
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  class="form-control input_1SdKA input"
                  id="__BVID__258"
                />
                <!---->
                <!---->
              </div>
            </form>
            <div class="checkbox_2oMY_ checked_2Q1D1 dark_rmGZs policy_3JKh2">
              <input id="checkbox-id-259" type="checkbox" class="input_1JWT8" value="true" />
              <label for="checkbox-id-259" class="label_Nx89H">
                <div class="wrapper_1SNxd">
                  <span class="box_3slHt hasBorder_3B_CO">
                    <svg viewBox="0 0 13 10" class="icon icon--check-2 icon_2SKlE checkIcon_2VLjw">
                      <use xlink:href="#check-2" />
                    </svg>
                  </span>
                </div>
                <span class="text_2pSav checkbox-text">
                  I agree to the
                  <a
                    href="https://privacy.adventist.org/"
                    target="_blank"
                    class="link_R_C3x"
                  >privacy policy</a>
                </span>
              </label>
              <!---->
            </div>
            <div class="button_2WOHI">
              <span>Get a book</span>
            </div>
          </div>
          <div class="right_31pcN">
            <div class="image_20EtX"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.popup_3xF9I {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0;
  z-index: 100;
}
.wrapper_3auGi {
  position: relative;
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  overflow: scroll;
}
.content_2CQKO {
  position: absolute;
  max-height: 100vh;
  top: calc(50% + 40px);
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: auto;
  height: auto;
}
@media (max-width: 991.98px) {
  .content_2CQKO {
    bottom: 0;
  }
}
@media (max-width: 767.98px) {
  .content_2CQKO {
    top: calc(50% + 10px);
  }
}
.closeBtn_nR227 {
  cursor: pointer;
  z-index: 10;
}
.closeBtn_nR227:hover .close_30n8p {
  opacity: 0.6;
}
.close_30n8p {
  font-size: 16px;
  position: absolute;
  top: 29px;
  right: 30px;
  color: #fff;
  cursor: pointer;
  -webkit-transition: all 0.3s ease-in;
  transition: all 0.3s ease-in;
}
.close_30n8p:hover {
  opacity: 0.6;
}
.inner_LBK-7 {
  width: 100%;
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 32px;
  -webkit-box-shadow: 0 10px 15px rgba(0, 0, 0, 0.05);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.05);
  background: #fff;
}
@media (max-width: 991.98px) {
  .inner_LBK-7 {
    -webkit-box-orient: vertical;
    -webkit-box-direction: reverse;
    -ms-flex-direction: column-reverse;
    flex-direction: column-reverse;
    width: 569px;
  }
}
@media (min-width: 768px) and (max-width: 991.98px) {
  .inner_LBK-7 {
    border-bottom-left-radius: 38px;
    border-bottom-right-radius: 38px;
  }
}
@media (max-width: 767.98px) {
  .inner_LBK-7 {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
}
@media (max-width: 575.98px) {
  .inner_LBK-7 {
    width: 100vw;
  }
}
.right_31pcN {
  width: 569px;
  min-height: 450px;
  background-color: #c9daf0;
  position: relative;
  border-radius: 32px;
  -ms-flex-negative: 0;
  flex-shrink: 0;
}
@media (max-width: 991.98px) {
  .right_31pcN {
    min-height: 230px;
    width: 100%;
  }
}
@media (min-width: 992px) and (max-width: 1199.98px) {
  .right_31pcN {
    width: 450px;
  }
}
.notRegistred_2AVFj .image_20EtX {
  top: -50px;
}
@media (min-width: 1440px) and (max-width: 1599.98px) {
  .notRegistred_2AVFj .image_20EtX {
    top: -40px;
  }
}
@media (min-width: 768px) and (max-width: 991.98px) {
  .notRegistred_2AVFj.inner_LBK-7 {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
}
.image_20EtX {
  position: absolute;
  top: -100px;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  width: 330px;
  height: 520px;
  background-image: url(/images/book.png);
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
}
@media (max-width: 991.98px) {
  .image_20EtX {
    width: 171px;
    height: 270px;
    top: -70px;
  }
}
.left_35nT1 {
  padding: 60px 63px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 569px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  border-top-left-radius: 32px;
  border-bottom-left-radius: 32px;
}
@media (max-width: 767.98px) {
  .left_35nT1 {
    border-radius: 0;
    padding: 60px 38px;
    width: 100%;
  }
}
@media (min-width: 992px) and (max-width: 1199.98px) {
  .left_35nT1 {
    width: 450px;
    padding: 60px 38px;
  }
}
.title_YUgAD {
  font-family: Bebas Neue;
  font-weight: 500;
  font-size: 64px;
  line-height: 64px;
  color: #000;
  margin-bottom: 17px;
}
.title_YUgAD .highlight_249us {
  color: #2469c7;
}
@media (max-width: 1199.98px) {
  .title_YUgAD {
    font-size: 48px;
    line-height: 48px;
  }
}
.desc_CfzMZ {
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 40px;
}
.button_2WOHI {
  border-radius: 40px;
  padding: 12px 45px;
  font-weight: 700;
  font-size: 19px;
  letter-spacing: 0.55px;
  line-height: 22px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.3s ease-in;
  transition: all 0.3s ease-in;
  cursor: pointer;
  color: #fff;
  background-color: #2469c7;
  border-color: #2469c7;
  margin-top: 13px;
  position: relative;
}
.button_2WOHI:before {
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
.button_2WOHI span {
  z-index: 2;
  position: relative;
}
.button_2WOHI:active:before,
.button_2WOHI:focus:before,
.button_2WOHI:hover:before {
  opacity: 0.08;
}
.button_2WOHI.disabled_3Wjsz {
  pointer-events: none;
  opacity: 0.7;
}
.register_1fnOy {
  width: 100%;
  border-color: #2469c7 !important;
}
.input_1SdKA {
  margin-bottom: 40px;
  border-color: rgba(0, 0, 0, 0.4);
  color: rgba(0, 0, 0, 0.6) !important;
}
.input_1SdKA:focus {
  border: 2px solid #2469c7 !important;
}
.input_1SdKA::-webkit-input-placeholder {
  color: rgba(0, 0, 0, 0.6);
}
.input_1SdKA:-moz-placeholder,
.input_1SdKA::-moz-placeholder {
  color: rgba(0, 0, 0, 0.6);
}
.input_1SdKA:-ms-input-placeholder {
  color: rgba(0, 0, 0, 0.6);
}
.input_1SdKA::-ms-input-placeholder {
  color: rgba(0, 0, 0, 0.6);
}
.input_1SdKA::placeholder {
  color: rgba(0, 0, 0, 0.6);
}
.policy_3JKh2 {
  margin-bottom: 20px;
}
.policy_3JKh2 .link_R_C3x {
  color: #fff;
  letter-spacing: 0.5px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: inherit;
  text-decoration: underline;
}
.policy_3JKh2 .link_R_C3x:hover {
  color: rgba(0, 0, 0, 0.85);
}
</style>