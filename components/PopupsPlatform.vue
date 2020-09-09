<template>
  <div>
    <LifeMobileNav v-if="activeId === 'life-mobile-nav'" :allEpisodes="false" :hasEpisodes="hasEpisodes" v-on:close="onClose" />
    <LifeMobileNav v-if="activeId === 'life-episode-nav'" :allEpisodes="true" :hasEpisodes="hasEpisodes" v-on:close="onClose" />
    <GetBook v-if="activeId === 'get-book'" v-on:close="onClose" />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

import LifeMobileNav from "./LifeMobileNav";
import GetBook from "./GetBook";

export default {
  components: {
    LifeMobileNav,
    GetBook,
  },
  data: function () {
    return {
      /*options: {},
            visible: !1,*/
    };
  },
  computed: {
    ...mapState({
      activeId: "activePopup", // "activePopup" same as "state => state.activePopup"
    }),
    hasEpisodes: function () {
      return (
        this.$store.state.episodes !== undefined &&
        this.$store.state.episodes.episode !== undefined &&
        this.$store.state.episodes.episode.id !== undefined
      );
    },
  },
  created: function () {
    /* var e = this;
        this.$popup.$on("open", (function(t) {
            var o = t.popupId
                , n = t.options
                , r = void 0 === n ? {} : n;
            e.options = r,
            e.activeId = o,
            setTimeout((function() {
                e.visible = !0
            }
            ), 10)
        }
        ))*/
  },
  mounted: function () {},
  methods: {
    ...mapActions({
      onClose: "CLOSE",
    }),
    onSubmit: function (e) {
      //this.$popup.$emit("submit", e)
    },
    /*onClose: function (e) {        
      this.setActivePopup("");
      e || (this.$popup.$emit("close", this.activeId),
            this.activeId = ""),
            this.options = {},
            this.visible = e
    },*/
  },
};
</script>

<style>
</style>