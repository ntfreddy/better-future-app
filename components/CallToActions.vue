<template>
  <div id="section-actions" :class="$style.actions">
    <div :class="$style.bg"></div>
    <div class="container">
      <div class="row">
        <div class="justify-content-center col-sm-12">
          <div class="text-sm-left text-lg-center" :class="$style.label">{{data.label}}</div>
          <p class="text-sm-left text-lg-center" :class="title">
            {{data.title}}
            <span :class="$style.highlight">{{data.highlight}}</span>?
          </p>
          <div class="text-sm-left text-lg-center" :class="$style.description">{{data.description}}</div>
        </div>
        <div class="col-sm-12">
          <div class="row">
              <Card v-for="item in items" 
                :key="item.id" 
                :id="item.id" 
                :title="item.title"
                :desc="item.desc" 
                :icon="item.icon" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Action from "./Card";

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
          title: "Pray for me",
          desc:
            "God loves to answer prayer. Leave your request and we will pray for you.",
        },
        {
          id: "bible",
          icon: "bible-closed",
          title: "Start Bible study",
          desc: "Find guidance for today in God's Word.",
        },
        {
          id: "question",
          icon: "answers",
          title: "Ask a Bible question",
          desc: "Send your Bible question and we will help you find the answer",
        },
      ],
    };
  },
  computed: {
    userName: function () {
      return this.$session.firstName;
    },
  },
  methods: {
    openPopup: function (t) {
      "talk" === t.id && window.HubSpotConversations
        ? window.HubSpotConversations.widget.open()
        : t.href
        ? window.open(t.href, "_blank")
        : t && t.id && this.$popup.open(t.id);
    },
  },
};
</script>

<style module>
.actions {
    padding: 100px 0 275px;
    position: relative;
    overflow: hidden
}

@media (max-width:1199.98px) {
    .actions {
        padding-top: 74px;
        padding-bottom: 70px
    }
}

.bg {
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
    .bg {
        left: -60px;
        height: 170%
    }
}

@media (max-width:767.98px) {
    .bg {
        top: -44%;
        left: -16%;
        width: 100%;
        height: 100%
    }
}

.title {
    font-family: Bebas Neue;
    font-weight: 500;
    font-size: 48px;
    line-height: 48px;
    color: #000;
    margin-bottom: 10px;
    word-break: break-word
}

.title .highlight {
    color: #2469c7
}

.description {
    font-size: 16px;
    line-height: 24px;
    color: rgba(0, 0, 0, .6);
    width: 335px;
    margin: 0 auto 73px
}

@media (max-width:991.98px) {
    .description {
        margin: 0 0 53px
    }
}

@media (prefers-color-scheme:dark) {
    .actions {
        background: #121212
    }
    .title {
        color: #fff
    }
    .description {
        color: hsla(0, 0%, 100%, .6)
    }
    .bg {
        background-image: unset
    }
}

.label {
    font-size: 14px;
    line-height: 145.4%;
    letter-spacing: 1.85px;
    font-weight: 700;
    text-transform: uppercase;
    color: #2469c7;
    margin-bottom: 10px
}

@media (max-width:767.98px) {
    .label {
        letter-spacing: 1.55px
    }
}
</style>