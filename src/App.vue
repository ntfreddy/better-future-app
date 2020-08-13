<template>
  <div id="app">
    <SectionHeader :data="sectionHeader" />
    <SectionActions :data="sectionActions" />
    <SectionCami :data="sectionCami" />
    <SectionChriss :data="sectionChriss" />
    <SectionEnroll :data="sectionEnroll" />
    <Footer :data="footer"/>
  </div>
</template>

<script>
import SectionHeader from "./components/SectionHeader";
import SectionActions from "./components/SectionActions";
import SectionCami from "./components/SectionCami";
import SectionChriss from "./components/SectionChriss";
import SectionEnroll from "./components/SectionEnroll";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    SectionHeader,
    SectionActions,
    SectionCami,
    SectionChriss,
    SectionEnroll,
    Footer,
  },
  data: function () {
    return {
      sectionHeader: {
        reminder: {
          text: "Register to receive updates",
          buttonTitle: "Register"
        },
        menu: {
          menuItems: [
            { text: "Pray for me" },
            { text: "Bible studies" },
            { text: "Cami Oetman" },
            { text: "Chris Holland" }
          ],
          hightlightedMenuItem: { text: "Register now" }
        },
        presenters: [
          {
            label: "Master class",
            subtitle: "with",
            name: "Cami Oetman",
            watch: "Watch now",
            mainPicture: require("./assets/cami-main.png"),
            avatarStyle: "background-image:url(@/assets/cami-main-mobile.jpg);",
            link: "/the-prediction/"
          },
          {
            label: "Weekly bible series",
            subtitle: "with",
            name: "Chris Holland",
            watch: "Watch now",
            mainPicture: require("./assets/chriss-main.png"),
            avatarStyle:
              "background-image:url(../assets/chriss-main-mobile.jpg);",
            link: "https://awr.org/watch-digging-deeper"
          },
        ],
      },
      sectionActions: {
        label: "next step",
        title: "How can we",
        highlight: "serve you",
        description:
          "We can help you find freedom, healing and hope in Jesus. What is the next step for you?",
        actions: [
          {
            id: "play",
            title: "Pray for me",
            desc:
              "God loves to answer prayer. Leave your request and we will pray for you.",
          },
          {
            id: "bible",
            title: "Start Bible study",
            desc: "Find guidance for today in God's Word.",
          },
          {
            id: "question",
            title: "Ask a Bible question",
            desc:
              "Send your Bible question and we will help you find the answer",
          },
        ],
      },
      sectionCami:{

      },
      sectionChriss:{

      },
      sectionEnroll:{

      },
      footer: {
        copyright : "© 2020 Adventist World Radio. All rights reserved.",
        presenterText: "This series is being presented by Adventist World Radio.",
        partnerTitle: "Become a partner",
        partners: [
          {name:"Sign up to be a digital missionary", link:"https://connect.adventist.org/digital/"},          
          {name:"Sign up to be a LIVE host", link:"https://forms.monday.com/forms/f3c3857cd1347f2297427e5b8213a045"},
          {name:"Launch a Watch Party (Coming Soon)", link:"#"}
        ]
      }
    };
  },
};
</script>

<style>
</style>
