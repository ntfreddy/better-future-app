<template>
  <div id="section-header" class="header_3nK_z hasReminder_2Fg0S">
    <div class="panel_HvvtT">
      <Reminder :text="data.reminder.text" :buttonTitle="data.reminder.buttonTitle" />
      <Header :menu="data.menu" />
      <div class="container mobilePanel_1x3eM">
        <div class="row row_1j9GR">
          <div class="col-12 mobileColumn_fU7gb">
            <div class="content_39AhX">
              <div class="logo_1989Q"></div>
              <div class="mobileBurgerBox_2x-8l">
                <svg viewBox="0 0 24 11" class="icon icon--burger icon_2SKlE mobileBurger_2_MS1">
                  <use xlink:href="#burger"></use>
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
                :key="presenter" 
                :label="presenter.label" 
                :subtitle="presenter.subtitle"
                :name="presenter.name"
                :watch="presenter.watch"
                :mainPicture="presenter.mainPicture"
                :avatarStyle="presenter.avatarStyle" 
                :link="presenter.link"
                :presenterClass="presenter.presenterClass"
                :avatarClass="presenter.avatarClass" />
            </div>
        </div>
  </div>
</template>

<script>
import Reminder from "./SectionHeader/Reminder";
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

<style>
@media (max-width:991.98px){
	.hasReminder_2Fg0S 
	.cami_3A5nr{
		margin-top:240px
	}
}

.header_3nK_z {
  width: 100%;
  background-image: url("../assets/earth_key.jpg");
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
}

.panel_HvvtT {
    position: relative;
    z-index: 11
}

@media (max-width:991.98px) {
    .panel_HvvtT {
        background: #121212;
        padding: 0;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%
    }
}

.mobilePanel_1x3eM {
    display: none
}

@media (max-width:991.98px) {
    .mobilePanel_1x3eM {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex
    }
}

.row_1j9GR {
    width: 100%;
    margin: 0
}

.mobileColumn_fU7gb {
    width: 100%;
    padding: 0
}

.content_39AhX {
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
    .content_39AhX {
        width: 100%;
        min-height: 98px;
        -webkit-box-pack: end;
        -ms-flex-pack: end;
        justify-content: flex-end
    }
}

@media (min-width:992px) and (max-width:1199.98px) {
    .content_39AhX {
        padding: 0 25px
    }
}

.logo_1989Q {
    background: url(../assets/unlocking-logo.svg);
    background-position: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    width: 210px;
    height: 113px;
    margin-left: -34px
}

@media (max-width:991.98px) {
    .logo_1989Q {
        width: 137px;
        height: 70px;
        margin-left: -24px
    }
}

@media (min-width:992px) {
    .logo_1989Q {
        position: absolute;
        top: 30px;
        left: -5px;
        width: 145px;
        height: 77px;
        margin: 0
    }
}

.mobileBurgerBox_2x-8l {
    width: 140px;
    height: 70px
}
</style>