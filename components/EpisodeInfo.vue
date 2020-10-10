<template>
  <div :class="$style.info" id="section-episode-info">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-lg-8">
          <div :class="$style.left" ref="left">
            <div
              :class="{[$style.container]: true, [$style.shadow]: (currentHeight < maxHeight)}"
              :style="'max-height:' + currentHeight +'px;'"
            >
              <QuillContent
                :ops="episode.description.ops"
                mini="false"
                :class="$style.text"
                v-show="episode.announce"
                ref = "content"
              />
            </div>
            <div :class="$style.buttons">
              <div :class="{[$style.more]:true, [$style.less]: isFullHeight}" v-on:click="loadMore">
                {{isFullHeight ? $t('episodeInfo-less-content') : $t('episodeInfo-load-more')}}
                <Icon name="arrow-right" viewBox="0 0 49.656 49.656" :class="$style.btnArrow" />
              </div>
              <div :class="$style.download" v-on:click="download">
                <Icon name="download" viewBox="0 0 28 28" :class="$style.downloadIcon" />
                {{$t('episodeInfo-download')}}
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-lg-4" :class="$style.column">
          <div :class="$style.right">
            <div :class="$style.image"></div>
            <div :class="$style.pray">
              <div :class="$style.circleBox">
                <div :class="$style.circle"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import QuillContent from "./QuillContent";

export default {
  components: {
    QuillContent,
  },
  data: function () {
    return {
      currentHeight: 690,
      maxHeight: 690,
      isFullHeight: false,
      registered: false,
    };
  },
  computed: {
    ...mapState({
      episode: (state) => state.episodes.episode,
    }),
  },
  watch: {
    "episode.id": function () {
      (this.currentHeight = 690), this.getMaxHeight();
    },
  },
  mounted: function () {
    this.registered = this.$ls.get("firstName", "") !== "";

    let that = this;
    this.$ls.on('firstName', function(){      
       that.registered = that.$ls.get("firstName", "") !== "";
    });

    (this.currentHeight = 690), this.getMaxHeight();
  },
  methods: {
    getMaxHeight: function () {
      this.maxHeight = this.$refs.content.$el.offsetHeight;
        this.currentHeight <= this.maxHeight && (this.isFullHeight = false);
    },
    loadMore: function () {
      if (this.isFullHeight) {
        this.currentHeight = 690;
        this.isFullHeight = false;
      this.$scrollTo(document.getElementById("section-episode-info"));
      }
      else {
        var t = this.currentHeight + 500;
        t > this.maxHeight
          ? ((this.currentHeight = this.maxHeight), (this.isFullHeight = true))
          : (this.currentHeight = t);
      }
    },
    download: function () {
      this.registered
        ? window.open(
            "https://raw.githubusercontent.com/ntfreddy/think-future-app/master/assets/documents/".concat(
              this.episode.id,
              ".pdf"
            ),
            "_blank"
          )
        : this.$form.goToRegister(this.$scrollTo);
    },
  },
};
</script>

<style module>
.info {
  background: #f7f0e7;
}
.left {
  padding: 80px 75px 50px 0;
}
@media (max-width: 991.98px) {
  .left {
    padding-right: 0;
  }
}
.container {
  overflow: hidden;
  -webkit-transition: max-height 0.3s ease;
  transition: max-height 0.3s ease;
  position: relative;
}
.shadow:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 20px;
  bottom: -2px;
  left: 0;
  background: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(#f7f0e7),
    to(rgba(247, 240, 231, 0))
  );
  background: linear-gradient(0deg, #f7f0e7, rgba(247, 240, 231, 0));
  z-index: 2;
}
.text,
.text p {
  font-size: 16px;
  line-height: 24px;
  color: #000;
}
.text p {
  margin: 0 0 25px;
}
.text h1 {
  color: #2469c7;
  font-size: 46px;
  line-height: 48px;
}
.text h1,
.text h2 {
  font-family: Bebas Neue;
}
.text h2 {
  color: #000;
  font-size: 28px;
  line-height: 30px;
}
.right {
  position: relative;
  width: 100%;
  height: 904px;
}
.right:hover .circle {
  right: -8px;
  bottom: -7px;
  width: 140px;
  height: 140px;
}
@media (max-width: 767.98px) {
  .right {
    height: 100%;
  }
}
@media (max-width: 575.98px) {
  .column {
    padding: 0;
  }
}
.image {
  position: absolute;
  top: 0;
  left: 0;
  width: 785px;
  height: 904px;
  background: url(../assets/study-image.jpg);
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 32px 0 0 32px;
}
@media (max-width: 767.98px) {
  .image {
    border-radius: 16px;
    position: relative;
    top: auto;
    left: auto;
    width: 100%;
    height: 250px;
  }
}
@media (max-width: 575.98px) {
  .image {
    border-radius: 0;
  }
}
@media (min-width: 576px) and (max-width: 767.98px) {
  .image {
    border-radius: 16px 16px 0 0;
    height: 300px;
  }
}
@media (min-width: 768px) and (max-width: 991.98px) {
  .image {
    border-radius: 16px 0 0 0;
  }
}
@media (min-width: 992px) and (max-width: 1199.98px) {
  .image {
    left: -50px;
    width: 685px;
    height: 804px;
  }
}
.pray {
  position: absolute;
  top: 50%;
  left: -68px;
  width: 125px;
  height: 125px;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  background: url(../assets/pray-hands.png);
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
}
.pray:hover .circle {
  right: -8px;
  bottom: -7px;
  width: 140px;
  height: 140px;
}
@media (max-width: 1199.98px) {
  .pray {
    display: none;
  }
}
.circleBox {
  width: 100%;
  height: 100%;
  position: relative;
}
.circle {
  position: absolute;
  right: -9px;
  bottom: -3px;
  width: 113px;
  height: 113px;
  border-radius: 50%;
  border: 1px solid #2469c7;
  -webkit-transition: all 0.3s ease-in;
  transition: all 0.3s ease-in;
}
.buttons {
  margin-top: 37px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
@media (max-width: 575.98px) {
  .buttons {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
  }
}
.more {
  cursor: pointer;
  -webkit-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
  font-weight: 700;
  font-size: 19px;
  line-height: 22px;
  color: #000;
  border-radius: 40px;
  background-color: hsla(0, 0%, 100%, 0.8);
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  padding: 8px 25px;
  margin-right: 40px;
  -ms-flex-negative: 0;
  flex-shrink: 0;
}
.more:hover {
  background-color: #fff;
}
.less .btnArrow {
  -webkit-transform: rotate(-90deg);
  transform: rotate(-90deg);
  margin-bottom: 2px;
}
.btnArrow {
  color: #2469c7;
  font-size: 13px;
  margin-left: 8px;
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
  -webkit-transition: all 0.3s ease-in;
  transition: all 0.3s ease-in;
}
@media (prefers-color-scheme: dark) {
  .info {
    background: #121212;
  }
  .shadow:before {
    background: -webkit-gradient(
      linear,
      left bottom,
      left top,
      from(#121212),
      to(rgba(18, 18, 18, 0))
    );
    background: linear-gradient(0deg, #121212, rgba(18, 18, 18, 0));
  }
  .text p {
    color: hsla(0, 0%, 100%, 0.6);
  }
  .text strong {
    color: hsla(0, 0%, 100%, 0.8);
  }
  .text h2,
  .text h2 strong {
    color: #fff;
  }
}
.download {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-weight: 700;
  font-size: 19px;
  line-height: 22px;
  color: #2469c7;
  cursor: pointer;
}
.download:hover {
  text-decoration: none;
  color: #2469c7;
  opacity: 0.9;
}
.download .downloadIcon {
  font-size: 28px;
  margin-right: 10px;
  color: #2469c7;
}
@media (max-width: 575.98px) {
  .download {
    margin-top: 40px;
  }
}
</style>