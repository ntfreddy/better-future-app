<template>
  <div id="section-actions" class="actions_1K_lr" data-scroll-section>
    <div class="bg_3o65N"></div>
    <div class="container">
      <div class="row">
        <div class="justify-content-center col-sm-12">
          <div class="text-sm-left text-lg-center label_uK4F8">{{data.label}}</div>
          <p class="text-sm-left text-lg-center title_15-95">
            {{data.title}}
            <span class="highlight_3xr8e">{{data.highlight}}</span>?
          </p>
          <div class="text-sm-left text-lg-center description_2y7ex">{{data.description}}</div>
        </div>
        <div class="col-sm-12">
          <div class="row">
              <Action v-for="action in data.actions" 
                :key="action.id" 
                :id="action.id" 
                :title="action.title"
                :desc="action.desc" 
                :icon="action.icon" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Action from "./SectionActions/Action";

export default {
  name: "SectionActions",
  components: {
    Action
  },
  props: ["data"]
};
</script>
<style scoped>
.actions_1K_lr {
    padding: 100px 0 275px;
    position: relative;
    overflow: hidden
}

@media (max-width:1199.98px) {
    .actions_1K_lr {
        padding-top: 74px;
        padding-bottom: 70px
    }
}

.bg_3o65N {
    width: 50%;
    height: 150%;
    position: absolute;
    top: -44%;
    left: 0;
    background-image: url(../assets/page_bg.svg);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover
}

@media (min-width:1440px) and (max-width:1599.98px) {
    .bg_3o65N {
        left: -60px;
        height: 170%
    }
}

@media (max-width:767.98px) {
    .bg_3o65N {
        top: -44%;
        left: -16%;
        width: 100%;
        height: 100%
    }
}

.title_15-95 {
    font-family: Bebas Neue;
    font-weight: 500;
    font-size: 48px;
    line-height: 48px;
    color: #000;
    margin-bottom: 10px;
    word-break: break-word
}

.title_15-95 .highlight_3xr8e {
    color: #2469c7
}

.description_2y7ex {
    font-size: 16px;
    line-height: 24px;
    color: rgba(0, 0, 0, .6);
    width: 335px;
    margin: 0 auto 73px
}

@media (max-width:991.98px) {
    .description_2y7ex {
        margin: 0 0 53px
    }
}

@media (prefers-color-scheme:dark) {
    .actions_1K_lr {
        background: #121212
    }
    .title_15-95 {
        color: #fff
    }
    .description_2y7ex {
        color: hsla(0, 0%, 100%, .6)
    }
    .bg_3o65N {
        background-image: unset
    }
}

.label_uK4F8 {
    font-size: 14px;
    line-height: 145.4%;
    letter-spacing: 1.85px;
    font-weight: 700;
    text-transform: uppercase;
    color: #2469c7;
    margin-bottom: 10px
}

@media (max-width:767.98px) {
    .label_uK4F8 {
        letter-spacing: 1.55px
    }
}

</style>