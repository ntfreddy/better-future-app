<template>
  <div id="app">
    <SectionHeader :data="sectionHeader" />
    <SectionActions :data="sectionActions" />
    <SectionBibleStudy :data="sectionBibleStudy" />
    <SectionCami :data="sectionCami" />
    <SectionChriss :data="sectionChriss" />
    <SectionEnroll :data="sectionEnroll" />
    <Footer :data="footer" />
  </div>
</template>

<script>
import SectionHeader from "./components/SectionHeader";
import SectionActions from "./components/SectionActions";
import SectionBibleStudy from "./components/SectionBibleStudy";
import SectionCami from "./components/SectionCami";
import SectionChriss from "./components/SectionChriss";
import SectionEnroll from "./components/SectionEnroll";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    SectionHeader,
    SectionActions,
    SectionBibleStudy,
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
          buttonTitle: "Register",
        },
        menu: {
          menuItems: [
            { text: "Pray for me" },
            { text: "Bible studies" },
            { text: "Cami Oetman" },
            { text: "Chris Holland" },
          ],
          menuItemHightlight: { text: "Register now" },
        },
        presenters: [
          {
            label: "Master class",
            subtitle: "with",
            name: "Cami Oetman",
            watch: "Watch now",
            mainPicture: require("./assets/cami-main.png"),
            avatarStyle: "background-image:url(@/assets/cami-main-mobile.jpg);",
            link: "/the-prediction/",
            presenterClass: "cami_3A5nr",
            avatarClass: "avatar_Cami_12VD"
          },
          {
            label: "Weekly bible series",
            subtitle: "with",
            name: "Chris Holland",
            watch: "Watch now",
            mainPicture: require("./assets/chriss-main.png"),
            avatarStyle:
              "background-image:url(../assets/chriss-main-mobile.jpg);",
            link: "https://awr.org/watch-digging-deeper",
            presenterClass: "chris_Nsmgq",
            avatarClass: "avatar_Chriss_12VD"
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
              icon: require("./assets/pray-hands-icon.svg")
          },
          {
            id: "bible",
            title: "Start Bible study",
            desc: "Find guidance for today in God's Word.",
              icon: require("./assets/bible-icon.svg")
          },
          {
            id: "question",
            title: "Ask a Bible question",
            desc:
              "Send your Bible question and we will help you find the answer",
              icon: require("./assets/question-icon.svg")
          },
        ],
      },
      sectionBibleStudy: {
        titleHighlight: "Interactive Online",
        title: "Bible Study",
        text:
          "Join our interactive online Bible study to learn more from God’s Word",
        heading: "Register Today!",
        headingHighlight: "Space Limited",
        form: {
          placeholder: {
            firstname: "Please enter your name * ",
            email: "Please enter a valid email address *",
            phone: "Please enter your phone number",
          },
          register: {
            text: "I agree to the",
            buttonTitle: "Register now",
            privacy: {
              text: "privacy policy",
              link: "https://privacy.adventist.org/",
            },
          },
        },
      },
      sectionCami: {
        label: "Master class",
        titleHighlight: "Unlocking Bible Prophecies",
        title: "with Cami Oetman",
        description:
          "Throughout this series, you will learn that Jesus’ love for you can be found at the heart of Revelation, and that its prophecies reveal hope for your future.",
        link: "/the-prediction/",
        watch: "Watch now",
      },
      sectionChriss: {
        label: "Weekly bible series",
        titleHighlight: "Digger Deeper",
        title: "with Chris Holland",
        description:
          "This weekly program will help you explore difficult Biblical topics and learn to use the Bible to explain itself. This series will give you confidence in the Word of God, help you learn how to study your Bible more deeply and give you hope for the future.",
        link: "https://awr.org/watch-digging-deeper",
        watch: "Watch now",
      },
      sectionEnroll: {
        label: "Join Us",
        action: "Sign Up Today",
        subaction: "Don’t miss our updates!",
        form: {
          placeholder: {
            firstname: "Your name",
            email: "Your E-mail",
          },
          register: {
            text: "I agree to the",
            buttonTitle: "Register now",
            privacy: {
              text: "privacy policy",
              link: "https://privacy.adventist.org/",
            },
          },
        },
      },
      footer: {
        copyright: "© 2020 Adventist World Radio. All rights reserved.",
        presenterText:
          "This series is being presented by Adventist World Radio.",
        partnerTitle: "Become a partner",
        partners: [
          {
            name: "Sign up to be a digital missionary",
            link: "https://connect.adventist.org/digital/",
          },
          {
            name: "Sign up to be a LIVE host",
            link:
              "https://forms.monday.com/forms/f3c3857cd1347f2297427e5b8213a045",
          },
          { name: "Launch a Watch Party (Coming Soon)", link: "#" },
        ],
      },
    };
  },
};
</script>

<style>
</style>
