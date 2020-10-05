<template>
  <div :class="$style.footer">
    <div class="container">
      <div class="row" :class="$style.row">
        <div class="col-sm-12 col-lg-3 order-sm-1 order-md-2">
          <img
            src="../assets/logo.svg"
            :alt="$t('mainFooter-logo-alt')"
            :class="$style.logo"
          />
        </div>
        <div class="col-sm-12 col-md col-lg-3 offset-xl-1 order-sm-3 order-md-2">
          <div :class="$style.text">{{$t('mainFooter-organizer-text')}}</div>
          <nav :class="[$style.nav, $style.terms]">
            <a
              target="_blank"
              href="/privacy"
              rel="noopener"
              :class="$style.link"
            >{{$t('mainFooter-privacy-policy-link')}}</a>
          </nav>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-5 order-sm-2 order-md-3">
          <div :class="$style.partners">
            <div :class="$style.title">{{$t('mainFooter-partners-title')}}</div>
            <a
              v-for="(item, index) in items"
              :key="index"
              :href="item.link"
              target="_blank"
              :class="$style.link"
            >{{item.name}}</a>
          </div>
        </div>
        <Copyright :class="$style.copyright" />
      </div>
    </div>
  </div>
</template>
<script>
import Copyright from "./Copyright";

export default {
  name: "MainFooter",
  components: {
    Copyright,
  },
  data: function () {
    return {
      items: [
        {
          name: "Pensez L'Avenir ",
          link:
            "https://www.facebook.com/pensezlavenir",
        },        
        {
          name: "Centre de Formation Biblique",
          link:
            "https://www.facebook.com/Centre-de-Formation-Biblique-102112848280238",
        },
        {
          name: "Radio EAFO",
          link: "https://www.radioeafo.net",
        },
        {
          name: "Il est écrit",
          link: "https://ilestecrit.tv",
        },
        {
          name: "Vers Jésus",
          link: "https://versjesus.org",
        },
        {
          name: "Mieux Vivre",
          link: "https://mieuxvivre.org",
        },
      ],
    };
  },
  props: [],
};
</script>
<style module>
.footer {
  width: 100%;
  background-color: #000;
  min-height: 182px;
  padding: 45px 0;
  position: relative;
}

.row {
  position: relative;
}

.logo {
  margin-bottom: 40px;
}

.text {
  font-size: 14px;
  line-height: 21px;
  color: #fff;
}

@media (max-width: 575.98px) {
  .text:last-child {
    margin-bottom: 30px;
  }
}

.link,
.nav {
  display: block;
}

.link {
  text-decoration: underline;
  margin-bottom: 5px;
  font-size: 16px;
  color: inherit;
  -webkit-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
}

.link:active,
.link:focus,
.link:hover {
  color: #2469c7;
}

.terms {
  display: block;
  color: #fff;
  margin-top: 20px;
}

@media (max-width: 575.98px) {
  .terms {
    margin-bottom: 37px;
  }
}

.partners {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}

@media (max-width: 767.98px) {
  .partners {
    margin-bottom: 20px;
  }
}

.title {
  font-weight: 700;
  font-size: 21px;
  line-height: 25px;
  text-transform: uppercase;
  color: #2469c7;
  margin-bottom: 23px;
}

.link {
  color: #fff;
  -webkit-transition: all 0.15s ease-in;
  transition: all 0.15s ease-in;
  text-decoration: underline;
  margin-bottom: 4px;
}

.link:hover {
  color: #2469c7;
}

.copyright {
  margin-top: 5px;
  position: absolute;
  bottom: -35px;
  left: 10px;
}
</style>
