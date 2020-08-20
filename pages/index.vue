<template>
  <div :class="$style.page">
    <SectionHeaderVideo :data="sectionHeaderVideo" :scroll="scroll" />
    <SectionHeader :data="sectionHeader" :scroll="scroll" />
    <SectionActions :data="sectionActions" />
    <SectionBibleStudy :data="sectionBibleStudy" />
    <SectionCami :data="sectionCami" />
    <SectionChriss :data="sectionChriss" />
    <SectionEnroll :data="sectionEnroll" />
    <Footer :data="footer" />
  </div>
</template>

<script>
import SectionHeaderVideo from "../components/SectionHeaderVideo";
import SectionHeader from "../components/SectionHeader";
import SectionActions from "../components/SectionActions";
import SectionBibleStudy from "../components/SectionBibleStudy";
import SectionCami from "../components/SectionCami";
import SectionChriss from "../components/SectionChriss";
import SectionEnroll from "../components/SectionEnroll";
import Footer from "../components/Footer";

export default {
  name: "Page",
  components: {
    SectionHeaderVideo,
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
      sectionHeaderVideo: {
        slides: [
          {
            episode: "trailer",
            thumbnail:
              "https://storage.googleapis.com/bible.awr.org/episodes/intro-small.jpg",
            date: "Wednesday, May 27",
            title: "Unlocking Bible Prophecies",
          },
          {
            episode: "episode 1",
            thumbnail:
              "https://storage.googleapis.com/bible.awr.org/episodes/the-prediction-small.jpg",
            date: "Sunday, May 31",
            title: "The Prediction",
          },
          {
            episode: "episode 2",
            thumbnail:
              "https://storage.googleapis.com/bible.awr.org/episodes/the-signs-small.jpg",
            date: "Monday, June 1",
            title: "The Signs",
          },
          {
            episode: "episode 3",
            thumbnail:
              "https://storage.googleapis.com/bible.awr.org/episodes/the-warning-small.jpg",
            date: "Tuesday, June 2",
            title: "The Warning",
          },
          {
            episode: "episode 4",
            thumbnail:
              "https://storage.googleapis.com/bible.awr.org/episodes/the-way-small.jpg",
            date: "Wednesday, June 3",
            title: "The Way",
          },
          {
            episode: "episode 5",
            thumbnail:
              "https://storage.googleapis.com/bible.awr.org/episodes/the-authentic-seal-small.jpg",
            date: "Thursday, June 4",
            title: "The Authentic Seal",
          },
          {
            episode: "episode 6",
            thumbnail:
              "https://storage.googleapis.com/bible.awr.org/episodes/the-counterfeit-small.jpg",
            date: "Friday, June 5",
            title: "The Counterfeit",
          },
          {
            episode: "episode 7",
            thumbnail:
              "https://storage.googleapis.com/bible.awr.org/episodes/the-grave-small.jpg",
            date: "Saturday, June 6",
            title: "The Grave",
          },
          {
            episode: "episode 8",
            thumbnail:
              "https://storage.googleapis.com/bible.awr.org/episodes/the-rescue-small.jpg",
            date: "Sunday, June 7",
            title: "The Rescue",
          },
          {
            episode: "episode 9",
            thumbnail:
              "https://storage.googleapis.com/bible.awr.org/episodes/the-desolation-small.jpg",
            date: "Monday, June 8",
            title: "The Desolation",
          },
          {
            episode: "episode 10",
            thumbnail:
              "https://storage.googleapis.com/bible.awr.org/episodes/the-mark-small.jpg",
            date: "Tuesday, June 9",
            title: "The Mark",
          },
          {
            episode: "episode 11",
            thumbnail:
              "https://storage.googleapis.com/bible.awr.org/episodes/the-harlot-small.jpg",
            date: "Wednesday, June 10",
            title: "The Harlot",
          },
          {
            episode: "episode 12",
            thumbnail:
              "https://storage.googleapis.com/bible.awr.org/episodes/the-remnant-small.jpg",
            date: "Thursday, June 11",
            title: "The Remnant",
          },
          {
            episode: "episode 13",
            thumbnail:
              "https://storage.googleapis.com/bible.awr.org/episodes/the-new-life-small.jpg",
            date: "Friday, June 12",
            title: "The New Life",
          },
          {
            episode: "episode 14",
            thumbnail:
              "https://storage.googleapis.com/bible.awr.org/episodes/the-great-controversy-small.jpg",
            date: "Saturday, June 13",
            title: "The Great Controversy",
          },
        ],
      },
      sectionHeader: {
        reminder: {
          text: "Pour recevoir des mises à jour",
          buttonTitle: "S'inscrire",
        },
        menu: {
          menuItems: [
            { text: "Priez pour moi", target: "#section-actions" },
            { text: "Études bibliques", target: "#section-bible-study" },
            { text: "Danielle Noélizaire", target: "#section-cami" },
            { text: "Simpson Gracia", target: "#section-chriss" },
          ],
          menuItemHightlight: {
            text: "Inscrivez-vous maintenant",
            target: "#section-enroll",
          },
        },
        presenters: [
          {
            label: "Qui se soucie de toi?",
            subtitle: "avec",
            name: "Danielle Noélizaire",
            watch: "Regardez maintenant",
            mainPicture: require("../assets/cami-main.png"),
            avatarPicture: require("../assets/cami-main-mobile.jpg"),
            link: "https://awr.org/watch-digging-deeper",
            presenterClass: "cami",
            avatarPicture: require("../assets/cami-main-mobile.jpg"),
          },
          {
            label: "Qui connaît l'avenir?",
            subtitle: "avec",
            name: "Simpson Gracia",
            watch: "Regardez maintenant",
            mainPicture: require("../assets/chriss-main.png"),
            avatarPicture: require("../assets/chriss-main-mobile.jpg"),
            link: "https://awr.org/watch-digging-deeper",
            presenterClass: "chriss",
          },
        ],
      },
      sectionActions: {
        label: "prochaine étape",
        title: "Comment pouvons-nous",
        highlight: "vous servir",
        description:
          "Nous pouvons vous aider à trouver la liberté, la guérison et l'espérance en Jésus. Quelle est la prochaine étape pour vous?",
        actions: [
          {
            id: "pray",
            title: "Priez pour moi",
            desc:
              "Dieu répond aux prières. Laissez votre requête et nous prierons pour vous.",
            icon: require("../assets/pray-hands-icon.svg"),
          },
          {
            id: "bible",
            title: "Commencer un étude biblique",
            desc:
              "Trouvez des conseils pour aujourd'hui dans la Parole de Dieu.",
            icon: require("../assets/bible-icon.svg"),
          },
          {
            id: "question",
            title: "Poser une question biblique",
            desc:
              "Posez votre question biblique et nous vous aiderons à trouver la réponse",
            icon: require("../assets/question-icon.svg"),
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
        link: "https://awr.org/watch-digging-deeper",
        watch: "Regardez maintenant",
      },
      sectionChriss: {
        label: "Weekly bible series",
        titleHighlight: "Digger Deeper",
        title: "with Chris Holland",
        description:
          "This weekly program will help you explore difficult Biblical topics and learn to use the Bible to explain itself. This series will give you confidence in the Word of God, help you learn how to study your Bible more deeply and give you hope for the future.",
        link: "https://awr.org/watch-digging-deeper",
        watch: "Regardez maintenant",
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
      scroll: null,
    };
  },
  mounted() {
    this.scroll = new this.locomotiveScroll({
      el: document.querySelector("#app"),
      smooth: false,
      smoothMobile: false,
      direction: "vertical",
    });
    console.log("scroll", this.scroll);
  },
};
</script>

<style module>
.page {
  width: 100vw;
  overflow: hidden;
  position: relative;
}
</style>
