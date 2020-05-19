<template>
  <v-app>
    <v-app-bar app height="50" flat style="background-color: #ffffff;">
      <v-toolbar-title class="one--text">서월버</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn small class="one--text" text @click="$vuetify.goTo('#about')">
        ABOUT
      </v-btn>
      <v-btn small class="one--text" text @click="$vuetify.goTo('#history')">
        HISTORY
      </v-btn>
      <v-btn small class="one--text" text @click="$vuetify.goTo('#tech')">
        SERVICES
      </v-btn>
      <v-btn small class="one--text" text @click="$vuetify.goTo('#partners')">
        PARTNERS
      </v-btn>
      <v-btn small class="one--text" text @click="$vuetify.goTo('#team')">
        TEAM
      </v-btn>
      <v-btn small class="one--text" text @click="$vuetify.goTo('#contact')">
        CONTACT
      </v-btn>
    </v-app-bar>

    <v-content v-scroll="onScroll" column align-center justify-center class="mainside" style="height:500px;">
      <v-container class="fill-height" fluid>
        <!-- <v-row align="center" justify="center">
          <img src="./imgs/swrvlogo.png" width="80%" />
        </v-row>
        <v-row align="center" justify="center" class="one--text">
          <p>랜선코칭 일타강사 스월브</p>
        </v-row> -->
      </v-container>
    </v-content>
    <ABOUT id="about" />
    <GRAPH id="history" />
    <COUNT />
    <TECH id="tech" />
    <PARTNERS id="partners" />
    <TEAM id="team" />
    <v-content style="background-color: rgb(230, 230, 230);height:800px;" id="contact">
      <v-container class="fill-height" fluid style="height:100%;">
        <v-row align="center" justify="center">
          <h1>CONTACT US</h1>
        </v-row>
        <v-row align="center" justify="center">
          <h4>If you have some Questions or need Help! Please Contact Us!</h4>
        </v-row>
        <v-row align="center" justify="center">
          <h1>Our Business Office</h1>
        </v-row>
        <v-row align="center" justify="center">
          <h1>부산 남구 전포대로 133, 제오피스호 13층(문현동)</h1>
        </v-row>
        <v-row align="center" justify="center">
          <h1>+82 10 9520 3919</h1>
        </v-row>
        <v-row align="center" justify="center">
          <h1>sokoflexer@gmail.com</h1>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import ABOUT from "./components/ABOUT.vue";
import GRAPH from "./components/GRAPH.vue";
import COUNT from "./components/COUNT.vue";
import TECH from "./components/TECH.vue";
import TEAM from "./components/TEAM.vue";
import PARTNERS from "./components/PARTNERS.vue";

export default {
  data: () => ({
    offsetTop: 0,
  }),
  components: {
    ABOUT,
    GRAPH,
    COUNT,
    TECH,
    TEAM,
    PARTNERS,
  },
  methods: {
    onScroll(e) {
      this.offsetTop = window.pageYOffset;
      // var aa = document.getElementById("graphtext");
      // console.log(this.offsetTop);
      // if (Math.round(this.offsetTop) > 272) {
      //   this.graphshow = true;
      // } else {
      //   this.graphshow = false;
      // }
    },
  },
};
</script>
<style>
.appbar {
  background-color: rgb(43, 43, 43);
}
.v-btn {
  letter-spacing: 0px;
}
.mainside {
  animation: bg-pan-top 10s infinite alternate both;
  background-image: url("./imgs/2499322.jpg");
  background-size: 100%;
}
@keyframes bg-pan-top {
  0% {
    background-position: 50% 70%;
  }
  100% {
    background-position: 50% 0%;
  }
}
</style>
