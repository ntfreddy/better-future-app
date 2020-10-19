<template>
  <div>
    <LifeMobileNav v-if="activeId === 'life-mobile-nav'" :allEpisodes="false" :hasEpisodes="hasEpisodes" @close="onClose" />
    <LifeMobileNav v-if="activeId === 'life-episode-nav'" :allEpisodes="true" :hasEpisodes="hasEpisodes" @close="onClose" />
    <GetBook v-if="activeId === 'get-book'" @close="onClose" />
    <ActionPopup v-if="activeId === 'pray'" :activeId="activeId" @close="onClose" />
    <ActionPopup v-if="activeId === 'bible'" :activeId="activeId" @close="onClose" />    
    <ActionPopup v-if="activeId === 'question'" :activeId="activeId" @close="onClose" />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

import LifeMobileNav from "./LifeMobileNav";
import GetBook from "./GetBook";
import ActionPopup from "./ActionPopup";

export default {
  components: {
    LifeMobileNav,
    GetBook,
    ActionPopup
  },
  data: function () {
    return {
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
  mounted: function () {},
  methods: {
    ...mapActions({
      onClose: "CLOSE",
    }),
    onSubmit: function (e) {
    },
  },
};
</script>

<style>
</style>