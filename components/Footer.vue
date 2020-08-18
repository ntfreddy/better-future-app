<template>
  <div :class="$style.footer">
    <div class="container">
      <div class="row" :class="$style.row">
        <div class="col-sm-12 col-lg-3 order-sm-1 order-md-2">
          <img src="../assets/footer-logo.svg" alt="Unlocking Bible Prophecies" :class="$style.logo" />
        </div>
        <div class="col-sm-12 col-md col-lg-3 offset-xl-1 order-sm-3 order-md-2">
          <div :class="$style.text">{{data.presenterText}}</div>
          <nav :class="[$style.nav, $style.terms]">
            <a target="_blank" href="https://privacy.adventist.org/" rel="noopener" :class="$style.link">privacy policy</a>
          </nav>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-5 order-sm-2 order-md-3">
          <div :class="$style.partners">
            <div :class="$style.title">{{data.partnerTitle}}</div>
            <a v-for="partner in data.partners" :key="partner.name" :href="partner.link" target="_blank" :class="$style.link">{{partner.name}}</a>
          </div>
        </div>
        <div :class="[$style.copyright, $style.copyright_1mCFf]">{{data.copyright}}</div>
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
<style module>
.footer {
    width: 100%;
    background-color: #000;
    min-height: 182px;
    padding: 45px 0;
    position: relative
}

.row {
    position: relative
}

.logo {
    margin-bottom: 40px
}

.text {
    font-size: 14px;
    line-height: 21px;
    color: #fff
}

@media (max-width:575.98px) {
    .text:last-child {
        margin-bottom: 30px
    }
}

.link,
.nav {
    display: block
}

.link {
    text-decoration: underline;
    margin-bottom: 5px;
    font-size: 16px;
    color: inherit;
    -webkit-transition: all .2s ease-in;
    transition: all .2s ease-in
}

.link:active,
.link:focus,
.link:hover {
    color: #2469c7
}

.terms {
    display: block;
    color: #fff;
    margin-top: 20px
}

@media (max-width:575.98px) {
    .terms {
        margin-bottom: 37px
    }
}

.partners {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column
}

@media (max-width:767.98px) {
    .partners {
        margin-bottom: 20px
    }
}

.title {
    font-weight: 700;
    font-size: 21px;
    line-height: 25px;
    text-transform: uppercase;
    color: #2469c7;
    margin-bottom: 23px
}

.link {
    color: #fff;
    -webkit-transition: all .15s ease-in;
    transition: all .15s ease-in;
    text-decoration: underline;
    margin-bottom: 4px
}

.link:hover {
    color: #2469c7
}

.copyright {
    width: 100%;
    font-size: 14px;
    line-height: 21px;
    color: hsla(0, 0%, 100%, .4)
}

@media (max-width:767.98px) {
    .copyright {
        max-width: 310px;
        font-size: 13px
    }
}

.copyright {
    font-size: 14px;
    line-height: 16px;
    color: rgba(0, 0, 0, .3)
}
</style>
