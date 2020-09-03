<template>
  <div :class="$style.page">    
    <TheHeader />
    <!-- <SectionHeader :data="sectionHeader"/>
    <SectionActions :data="sectionActions" />
    <SectionBibleStudy :data="sectionBibleStudy" />
    <SectionCami :data="sectionCami" />
    <SectionChriss :data="sectionChriss" /> -->
    <Enroll />
  </div>
</template>

<script>
import TheHeader from "../components/TheHeader";
import SectionHeader from "../components/SectionHeader";
import SectionActions from "../components/SectionActions";
import SectionBibleStudy from "../components/SectionBibleStudy";
import SectionCami from "../components/SectionCami";
import SectionChriss from "../components/SectionChriss";
import Enroll from "../components/Enroll";

export default {
  name: "index",
  components: {
    TheHeader,
    // SectionHeader,
    // SectionActions,
    // SectionBibleStudy,
    // SectionCami,
    // SectionChriss,
    Enroll,
  },
  data: function () {
    return {
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
    };
  },
  mounted() {
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
