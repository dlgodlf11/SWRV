<template>
  <v-content style="height:500px;">
    <v-container fluid style="height:100%;">
      <v-row align="center" justify="center"><h1>OUR PARTNERS</h1></v-row>
      <v-row align="center" justify="center"><h3>서월버는 누구와 방향을 제시할까?</h3></v-row>

      <v-row align="center" justify="center">
        <v-carousel cycle height="400" hide-delimiter-background show-arrows-on-hover>
          <v-carousel-item v-for="(slide, i) in slides" :key="i">
            <v-sheet :color="colors[i]" height="100%">
              <v-row class="fill-height" align="center" justify="center">
                <div class="display-3">{{ slide }}</div>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-row>
    </v-container>
  </v-content>
</template>
<script>
export default {
  data() {
    return {
      colors: ["indigo", "warning", "pink darken-2", "red lighten-1", "deep-purple accent-4"],
      slides: ["SWRV", "BM", "ST", "WDBX", "BH"],
    };
  },
};
</script>
