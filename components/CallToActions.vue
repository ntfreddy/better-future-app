<template>
  <div id="section-actions" :class="$style.actions">
    <div class="container">
      <div class="row text-sm-center text-lg-left">
        <div xs="12" class="col-sm-12 col-lg-4" :class="$style.left">
          <div :class="$style.label">{{$t('callToActions-label')}}</div>
          <p class="text-sm-center text-lg-left" :class="$style.title">
            {{$t('callToActions-title')}}
            <span
              :class="$style.highlight"
            >{{$t('callToActions-title-highlight') + (userName ? ', ': '?') + (userName ? userName: '')}}</span>
          </p>
          <div :class="$style.description">{{$t('callToActions-description')}}</div>
        </div>
        <div class="col-lg-8">
          <div class="row">
            <div
              v-for="(item, index) in items"
              :key="'item-' + index"
              xs="12"
              class="col-sm-12 col-md-6 col-xl-6"
              :class="$style.cardCol"
            >
              <Card
                :id="item.id"
                :index="index"
                :title="item.title"
                :icon="item.icon"
                :desc="item.desc"
                :viewBox="item.viewBox"
                :class="$style.card"
                @click.native="openPopup(item.id)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

import Card from "./Card";

export default {
  components: {
    Card,
  },
  data: function () {
    return {
      popupVisible: false,
      activeId: "",
      items: [
        {
          id: "pray",
          icon: "pray-hands",
          title: this.$t("callToActions-pray-title"),
          desc: this.$t("callToActions-pray-desc"),
          viewBox: "0 0 53 54",
        },
        {
          id: "bible",
          icon: "bible-closed",
          title: this.$t("callToActions-bible-title"),
          desc: this.$t("callToActions-bible-desc"),
          viewBox: "0 0 46 63",
        },
        {
          id: "talk",
          icon: "messages",
          title: this.$t("callToActions-talk-title"),
          desc: this.$t("callToActions-talk-desc"),
          href: "https://share.hsforms.com/1SWZtYxm1SYKgUwfPs25JKg2hspc",
          viewBox: "0 0 59 59",
        },
        {
          id: "question",
          icon: "answers",
          title: this.$t("callToActions-question-title"),
          desc: this.$t("callToActions-question-desc"),
          viewBox: "0 0 61 63",
        },
      ],
    };
  },
  computed: {
    userName: function() {
      return this.$session !== undefined && this.$session.get("firstName");
    },
  },
  methods: {
    ...mapActions({
      onOpenPopup: "OPEN",
    }),
    openPopup: function(activeId) {
      console.log("openPopup(", activeId);
      if (activeId == "talk" && window.HubSpotConversations) {
        window.HubSpotConversations.widget.open();
      } else {
        this.onOpenPopup(activeId);
      }
    }
  },
  mounted: function(){
    console.log("openPopup(", "mounted");
  }
};
</script>

<style module>
.actions {
  padding: 100px 0;
}
.cardCol {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  max-width: calc(50% - 15px) !important;
}
.cardCol:nth-child(2n-1) {
  margin-right: 30px;
}
.cardCol:nth-child(3),
.cardCol:nth-child(4) {
  margin-top: 30px;
}
@media (max-width: 767.98px) {
  .cardCol {
    max-width: 100% !important;
    margin-bottom: 20px;
    margin-top: 0 !important;
  }
  .cardCol:nth-child(2n-1) {
    margin-right: 0;
  }
}
.card {
  width: calc(50% - 15px);
}
.cardCol {
  padding: 0;
}
@media (max-width: 767.98px) {
  .cardCol {
    padding-right: 15px;
    padding-left: 15px;
  }
}
.left {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
}
@media (min-width: 576px) and (max-width: 767.98px) {
  .left {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
}
@media (min-width: 768px) and (max-width: 991.98px) {
  .left {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
}
.label {
  font-size: 14px;
  line-height: 145.4%;
  letter-spacing: 1.85px;
  text-transform: uppercase;
  color: #2469c7;
  margin-bottom: 8px;
}
.label,
.title {
  font-weight: 700;
}
.title {
  font-family: Bebas Neue;
  font-size: 46px;
  line-height: 48px;
  color: #000;
  letter-spacing: 0.6px;
  width: 100%;
  margin-bottom: 23px;
}
.title .highlight {
  color: #2469c7;
}
@media (min-width: 992px) {
  .title {
    width: 270px;
  }
}
@media (max-width: 991.98px) {
  .title {
    width: 270px;
  }
}
.description {
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.6);
}
@media (max-width: 991.98px) {
  .description {
    margin-bottom: 60px;
  }
}
@media (min-width: 576px) and (max-width: 767.98px) {
  .description {
    width: 370px;
    text-align: center;
  }
}
@media (min-width: 768px) and (max-width: 991.98px) {
  .description {
    width: 370px;
    text-align: center;
  }
}
@media (prefers-color-scheme: dark) {
  .actions {
    background: #121212;
  }
  .title {
    color: #fff;
  }
  .description {
    color: hsla(0, 0%, 100%, 0.6);
  }
}
</style>