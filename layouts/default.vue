<template>
  <div id="app">
    <div>
      <Nuxt />
      <ToTopButton />
      <BookBtn />
      <MainFooter :data="mainFooter" />
      <PopupsPlatform />
    </div>
  </div>
  <!-- End of HubSpot Embed Code -->
</template>
<script>
import ToTopButton from "../components/ToTopButton";
import BookBtn from "../components/BookBtn";
import MainFooter from "../components/MainFooter";
import PopupsPlatform from "../components/PopupsPlatform";

export default {
  components: {
    ToTopButton,
    BookBtn,
    MainFooter,
    PopupsPlatform,
  },
  data: function () {
    return {
      mainFooter: {
        copyright: "© 2020 Adventist World Radio. All rights reserved.",
        presenterText:
          "This series is being presented by Adventist World Radio.",
        partnerTitle: "Become a partner",
        partners: [
          {
            name: "Sign up to be a digital missionary",
            link: "https://connect.adventist.org/digital/",
          },
          {
            name: "Sign up to be a LIVE host",
            link:
              "https://forms.monday.com/forms/f3c3857cd1347f2297427e5b8213a045",
          },
          { name: "Launch a Watch Party (Coming Soon)", link: "#" },
        ],
      },
    };
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Bebas+Neue");
@import url("https://fonts.googleapis.com/css?family=Roboto");

body,
html {
  line-height: 1.5;
  -webkit-overflow-scrolling: touch;
}
body,
html {
  font-size: 16px;
  font-family: Roboto;
  font-weight: 400;
}
body {
  font-style: normal;
  margin: 0;
  background: #fff;
  width: 100%;
  overflow-x: hidden;
}
@media (prefers-color-scheme: dark) {
  body {
    background: #121212;
  }
}
</style>
c