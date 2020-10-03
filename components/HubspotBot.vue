<template>
  <!-- Start of HubSpot Embed Code -->
  <script
    type="text/javascript"
    id="hs-script-loader"
    async
    defer
    src="//js.hs-scripts.com/8548131.js"
  ></script>
  <!-- End of HubSpot Embed Code -->
</template>

<script>
export default {
  props: ["visible", "activeId", "fields"],
  data: function () {
    return {
      firstName: "",
      email: "",
      state: "form",
      map: {
        pray: {
          title: "Pray for me",
          desc:
            "God loves to answer prayer. Leave your request and we will pray for you.",
          image: "/images/believe.jpg",
          icon: "pray-hands",
          btnText: "Request a prayer",
          id: "prayRequest",
          hubspotId: "920f5366-8d6d-4e83-b881-71d75f603735",
          success: {
            title: "Your request is on its way!",
            desc: "We will definitely pray for your request!",
          },
        },
        bible: {
          title: "Start Bible study",
          desc:
            "Complete your details and we can start to study the Bible today",
          image: "/images/study-image.jpg",
          btnText: "Start study",
          icon: "bible-closed",
          id: "bibleStudy",
          hubspotId: "514e1b13-68b0-4cd6-8323-fdae0ff1c6eb",
          success: {
            title: "Are You Ready to Start Studying The Bible?",
            desc: "Enroll in our online bible school.",
            href: "https://bibleschools.com/1505",
          },
        },
        talk: {
          title: "Talk with somebody",
          desc:
            "Meet with the pastor there, where you are comfortable and get even more.",
          image: "/images/talk-image.jpg",
          id: "talk",
          icon: "messages",
          success: {
            title: "We will definitely write you!",
            desc: "We will definitely write you!",
          },
        },
        question: {
          title: "Ask a Bible question",
          desc: "Send your Bible question and we will help you find the answer",
          image: "/images/question-image.jpg",
          btnText: "Ask question",
          id: "askQuestion",
          icon: "answers",
          hubspotId: "bf88e843-7979-4413-bc0e-6be79c0e6629",
          success: {
            title: "Thank you for your question!",
            desc: "We will definitely write you!",
          },
        },
        decision: {
          title: "Register",
          desc: "Tell us about your decision",
          image: "/images/study-image.jpg",
          btnText: "Register",
          id: "decision",
          icon: "bible-shine",
          hubspotId: "ef453086-1fb7-434a-a7c1-8006a6832086",
          success: {
            title: "Thank you for your decision!",
            desc: "We will definitely write you!",
          },
        },
      },
    };
  },
  mounted: function () {
    window.HubSpotConversations && window.HubSpotConversations.widget.close();
  },
  created: function () {
    this.isRegistred
      ? ("bible" !== this.activeId && "decision" !== this.activeId) ||
        (this.onSubmit({
          firstName: this.$session.get("firstName"),
          email: this.$session.get("email"),
        }),
        (this.state = "success"))
      : (this.state = "form");
  },
  methods: {
    onSubmit: function (e) {
      /*var t = this;
      return (0, r.default)(
        regeneratorRuntime.mark(function o() {
          var n, r, h, d, m;
          return regeneratorRuntime.wrap(function (o) {
            for (;;)
              switch ((o.prev = o.next)) {
                case 0:
                  if (!t.form.hubspotId) {
                    o.next = 22;
                    break;
                  }
                  if ("bibleStudy" !== t.form.id) {
                    o.next = 7;
                    break;
                  }
                  return (
                    (e.bibleschools = (0, c.default)(
                      new Date(),
                      "yyyy-MM-dd HH:mm"
                    )),
                    (o.next = 5),
                    t.$form.send(t.form.hubspotId, e)
                  );
                case 5:
                  o.next = 22;
                  break;
                case 7:
                  if ("decision" !== t.form.id) {
                    o.next = 14;
                    break;
                  }
                  return (
                    (n = e.email),
                    (r = t.activeIndex + 1),
                    (o.next = 12),
                    t.$form.send(
                      t.form.hubspotId,
                      (0, l.default)(
                        {
                          email: n,
                        },
                        "ubp_e_".concat(r < 10 ? "0" : "").concat(r),
                        !0
                      )
                    )
                  );
                case 12:
                  o.next = 22;
                  break;
                case 14:
                  if (
                    "prayRequest" !== t.form.id &&
                    "askQuestion" !== t.form.id
                  ) {
                    o.next = 20;
                    break;
                  }
                  return (
                    (h = e.email),
                    (d = e.firstName),
                    (m = e.subject),
                    (o.next = 18),
                    t.$form.send(t.form.hubspotId, {
                      firstName: d,
                      email: h,
                      "TICKET.subject": m,
                    })
                  );
                case 18:
                  o.next = 22;
                  break;
                case 20:
                  return (o.next = 22), t.$form.send(t.form.hubspotId, e);
                case 22:
                  t.$session.start({
                    firstName: e.firstName,
                    email: e.email,
                  }),
                    t.$emit("submit", e),
                    (t.state = "success");
                case 25:
                case "end":
                  return o.stop();
              }
          }, o);
        })
      )();*/
    },
    close: function () {
      this.$emit("update:visible", !1);
    },
  },
};
</script>


<style>
</style>