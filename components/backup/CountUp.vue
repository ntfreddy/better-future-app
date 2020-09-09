<template></template>

<script>
export default {
  name: "VueCountUp",
  props: {
    delay: {
      type: Number,
      required: !1,
      default: 0,
    },
    endVal: {
      type: Number,
      required: !0,
    },
    options: {
      type: Object,
      required: !1,
    },
  },
  data: function () {
    return {
      instance: null,
    };
  },
  watch: {
    endVal: {
      handler: function (t) {
        this.instance && e(this.instance.update) && this.instance.update(t);
      },
      deep: !1,
    },
  },
  methods: {
    create: function () {
      var e = this;
      if (!e.instance) {
        var n = e.$el,
          i = new t.CountUp(n, e.endVal, e.options);
        i.error ||
          ((e.instance = i),
          e.delay < 0
            ? e.$emit("ready", i, t.CountUp)
            : setTimeout(function () {
                return i.start(function () {
                  return e.$emit("ready", i, t.CountUp);
                });
              }, e.delay));
      }
    },
    destroy: function () {
      this.instance = null;
    },
    printValue: function (t) {
      if (this.instance && e(this.instance.printValue))
        return this.instance.printValue(t);
    },
    start: function (t) {
      if (this.instance && e(this.instance.start))
        return this.instance.start(t);
    },
    pauseResume: function () {
      if (this.instance && e(this.instance.pauseResume))
        return this.instance.pauseResume();
    },
    reset: function () {
      if (this.instance && e(this.instance.reset)) return this.instance.reset();
    },
    update: function (t) {
      if (this.instance && e(this.instance.update))
        return this.instance.update(t);
    },
  },
  mounted: function () {
    this.create();
  },
  beforeDestroy: function () {
    this.destroy();
  },
};
</script>

<style>
</style>