<template>
  <div id="app">
    <div>
      <span id="top"></span>
      <Nuxt />
      <ToTopButton />
      <BookBtn />
      <MainFooter />
      <HubspotBot />
      <PopupsPlatform />
    </div>   
  </div>
  <!-- End of HubSpot Embed Code -->
</template>
<script>
import PopupsPlatform from "../components/PopupsPlatform";
import ToTopButton from "../components/ToTopButton";
import BookBtn from "../components/BookBtn";
import MainFooter from "../components/MainFooter";
import HubspotBot from "../components/HubspotBot";

export default {
  components: {
    ToTopButton,
    BookBtn,
    MainFooter,
    HubspotBot,
    PopupsPlatform,
  },  
};
</script>
<style>
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
