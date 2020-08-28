<template>
  <div id="section-header" :class="[$style.header, $style.hasReminder]">
    <div :class="$style.panel">
      <Reminder />
      <Header :menu="data.menu" />
      <div class="container" :class="$style.mobilePanel">
        <div class="row" :class="$style.row">
          <div class="col-12" :class="$style.mobileColumn">
            <div :class="$style.content">
              <div :class="$style.logo"></div>
              <div :class="$style.mobileBurgerBox">
                <svg viewBox="0 0 24 11" class="icon icon--burger" :class="[$style.icon, $style.mobileBurger]">
                  <use xlink:href="#burger">
                    <svg fill="none" viewBox="0 0 24 11" id="burger" xmlns="http://www.w3.org/2000/svg">
                    <path stroke="#fff" stroke-width="2" d="M24 1H0M24 10H12"></path>
                    </svg>
                  </use>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div class="container">
            <div class="row">
              <Presenter v-for="presenter in data.presenters" 
                :key="presenter.label" 
                :label="presenter.label" 
                :subtitle="presenter.subtitle"
                :name="presenter.name"
                :watch="presenter.watch"
                :mainPicture="presenter.mainPicture"
                :avatarPicture="presenter.avatarPicture" 
                :link="presenter.link"
                :presenterClass="presenter.presenterClass" />
            </div>
        </div>
  </div>
</template>

<script>
import Reminder from "./Reminder";
import Header from "./SectionHeader/Header";
import Presenter from "./SectionHeader/Presenter";

export default {
  name: "SectionHeader",
  components: {
    Reminder,
    Header,
    Presenter
  },  
  props: ["data"]
};
</script>

<style module>
@media (max-width:991.98px){
	.hasReminder 
	.cami{
		margin-top:240px
	}
}

.header {
  width: 100%;
  background-image: url("../assets/earth_key.jpg");
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
}

.panel {
    position: relative;
    z-index: 11
}

@media (max-width:991.98px) {
    .panel {
        background: #121212;
        padding: 0;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%
    }
}

.mobilePanel {
    display: none
}

@media (max-width:991.98px) {
    .mobilePanel {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex
    }
}

.row {
    width: 100%;
    margin: 0
}

.mobileColumn {
    width: 100%;
    padding: 0
}

.content {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: relative
}

@media (min-width:992px) {
    .content {
        width: 100%;
        min-height: 98px;
        -webkit-box-pack: end;
        -ms-flex-pack: end;
        justify-content: flex-end
    }
}

@media (min-width:992px) and (max-width:1199.98px) {
    .content {
        padding: 0 25px
    }
}

.logo {
    background: url(../assets/unlocking-logo.svg);
    background-position: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    width: 210px;
    height: 113px;
    margin-left: -34px
}

@media (max-width:991.98px) {
    .logo {
        width: 137px;
        height: 70px;
        margin-left: -24px
    }
}

@media (min-width:992px) {
    .logo {
        position: absolute;
        top: 30px;
        left: -5px;
        width: 145px;
        height: 77px;
        margin: 0
    }
}

.mobileBurgerBox {
    width: 140px;
    height: 70px
}

.mobileBurger {
    font-size: 24px;
    cursor: pointer;
    display: block;
    position: absolute;
    top: 23px;
    right: 5px
}

.icon {
    display: inline-block;
    width: 1em;
    height: 1em;
    line-height: 1em;
    vertical-align: middle
}

.icon use {
    color: inherit;
    fill: currentColor
}

.icon.stroked use {
    stroke: currentColor
}

.icon.hover-fill use,
.icon.nofill use {
    fill: none
}

.icon.hover-fill use:hover {
    fill: currentColor
}

.icon.active-fill use {
    fill: none
}

.icon.active-fill.is-active use {
    fill: currentColor
}

.icon.big {
    width: 2em;
    height: 2em
}

.icon.large_24yv8 {
    width: 3em;
    height: 3em
}

</style>