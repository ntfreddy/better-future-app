<template>
  <div class="footer_3YJkr">
    <div class="container">
      <div class="row row_EtYN6">
        <div class="col-sm-12 col-lg-3 order-sm-1 order-md-2">
          <img src="../assets/footer-logo.svg" alt="Unlocking Bible Prophecies" class="logo_2Wwrn" />
        </div>
        <div class="col-sm-12 col-md col-lg-3 offset-xl-1 order-sm-3 order-md-2">
          <div class="text_C5tiP">{{data.presenterText}}</div>
          <nav class="nav_ZzIDS terms_23AHf">
            <a target="_blank" href="https://privacy.adventist.org/" rel="noopener" class="link_3qIS5">privacy policy</a>
          </nav>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-5 order-sm-2 order-md-3">
          <div class="partners_3bYDD">
            <div class="title_2KNuK">{{data.partnerTitle}}</div>
            <a v-for="partner in data.partners" :key="partner" :href="partner.link" target="_blank" class="link_2znc9">{{partner.name}}</a>
          </div>
        </div>
        <div class="copyright_1WZc0 copyright_1mCFf">{{data.copyright}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Footer", 
  props: ["data"]
};
</script>
<style>
.footer_3YJkr {
    width: 100%;
    background-color: #000;
    min-height: 182px;
    padding: 45px 0;
    position: relative
}

.row_EtYN6 {
    position: relative
}

.logo_2Wwrn {
    margin-bottom: 40px
}

.text_C5tiP {
    font-size: 14px;
    line-height: 21px;
    color: #fff
}

@media (max-width:575.98px) {
    .text_C5tiP:last-child {
        margin-bottom: 30px
    }
}

.link_3qIS5,
.nav_ZzIDS {
    display: block
}

.link_3qIS5 {
    text-decoration: underline;
    margin-bottom: 5px;
    font-size: 16px;
    color: inherit;
    -webkit-transition: all .2s ease-in;
    transition: all .2s ease-in
}

.link_3qIS5:active,
.link_3qIS5:focus,
.link_3qIS5:hover {
    color: #2469c7
}

.terms_23AHf {
    display: block;
    color: #fff;
    margin-top: 20px
}

@media (max-width:575.98px) {
    .terms_23AHf {
        margin-bottom: 37px
    }
}

.partners_3bYDD {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column
}

@media (max-width:767.98px) {
    .partners_3bYDD {
        margin-bottom: 20px
    }
}

.title_2KNuK {
    font-weight: 700;
    font-size: 21px;
    line-height: 25px;
    text-transform: uppercase;
    color: #2469c7;
    margin-bottom: 23px
}

.link_2znc9 {
    color: #fff;
    -webkit-transition: all .15s ease-in;
    transition: all .15s ease-in;
    text-decoration: underline;
    margin-bottom: 4px
}

.link_2znc9:hover {
    color: #2469c7
}

.copyright_1WZc0 {
    width: 100%;
    font-size: 14px;
    line-height: 21px;
    color: hsla(0, 0%, 100%, .4)
}

@media (max-width:767.98px) {
    .copyright_1WZc0 {
        max-width: 310px;
        font-size: 13px
    }
}

.copyright_w3H1L {
    font-size: 14px;
    line-height: 16px;
    color: rgba(0, 0, 0, .3)
}
</style>
