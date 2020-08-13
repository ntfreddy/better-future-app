<template>
  <div id="section-enroll" class="enroll_1_wEt">
    <div class="container">
      <div class="bg_3Jv-W"></div>
      <img alt="Bookmark – Unlocking Bible Prophecies" src="../assets/open-bible-1.png" class="book1_K2y_R" />
      <img alt="Open Bible – Unlocking Bible Prophecies" src="../assets/open-bible-2.png" class="book2_1CXky" />
      <div class="row justify-content-center">
        <div class="col-sm-10 col-md-7 col-lg-5 col-xl-4">
          <div class="label_2JFi-">Join Us</div>
          <h2 class="action_1toYO">Sign Up Today</h2>
          <div class="subaction_1iCF9">Don’t miss our updates!</div>
          <form id="registration" class="register_2ztqz">
            <div class="form-group">
              <input id="reg-form-firstname" name="firstname" type="text" placeholder="Your name" class="form-control input_EsH-v input" />
              <!---->
            </div>
            <div class="form-group">
              <input name="email" type="email" placeholder="Your E-mail" class="form-control input_EsH-v input" id="__BVID__63" />
              <!---->
              <!---->
            </div>
            <div class="register_2ztqz">
              <div class="checkbox_2oMY_ checked_2Q1D1 policy_34h9p">
                <input id="checkbox-id-64" type="checkbox" class="input_1JWT8" value="true" />
                <label for="checkbox-id-64" class="label_Nx89H">
                  <div class="wrapper_1SNxd">
                    <span class="box_3slHt">
                      <svg viewBox="0 0 13 10" class="icon icon--check-2 icon_2SKlE checkIcon_2VLjw" >
                        <use xlink:href="#check-2" />
                      </svg>
                    </span>
                  </div>
                  <span class="text_2pSav checkbox-text">
                    I agree to the
                    <a href="https://privacy.adventist.org/" target="_blank" class="link_3Kiew" >privacy policy</a>
                  </span>
                </label>
                <!---->
              </div>
              <button type="submit" class="btn btn-secondary btn-block button_1UYTP">Register now</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SectionEnroll", 
  props: ["data"]
};
</script>
<style scoped>

</style>