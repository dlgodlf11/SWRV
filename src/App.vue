<template>
  <v-app>
    <v-app-bar app height="50" dark flat style="background-color: rgb(43, 43, 43);">
      <v-toolbar-title>서월버</v-toolbar-title>
      <v-btn text>programs</v-btn>
      <v-spacer></v-spacer>

      <v-btn icon @click="$vuetify.goTo(300, options)">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content
      v-scroll="onScroll"
      column
      align-center
      justify-center
      style="background-color: rgb(43, 43, 43); height:800px;"
    >
      <v-container class="fill-height" fluid style="height:100%;">
        <v-row align="center" justify="center">
          <h2 class="three--text">We are ready to swerve!</h2>
        </v-row>
        <v-row align="center" justify="center">
          <h2 class="three--text">스월브에 오신것을 환영합니다.</h2>
        </v-row>
        <v-row align="center" justify="center">
          <v-btn text class="three--text" @click="$vuetify.goTo(880)">WITH US</v-btn>
        </v-row>
      </v-container>
    </v-content>
    <ABOUT />
    <GRAPH />
    <COUNT />
    <TECH />
    <TEAM />
  </v-app>
</template>

<script>
import ABOUT from "./components/ABOUT.vue";
import GRAPH from "./components/GRAPH.vue";
import COUNT from "./components/COUNT.vue";
import TECH from "./components/TECH.vue";
import TEAM from "./components/TEAM.vue";

export default {
  data: () => ({
    offsetTop: 0
  }),
  components: {
    ABOUT,
    GRAPH,
    COUNT,
    TECH,
    TEAM
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
    }
  }
};
</script>
<style>
.appbar {
  background-color: rgb(43, 43, 43);
}
</style>