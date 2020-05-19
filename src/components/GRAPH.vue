<template>
  <v-card class="text-center">
    <v-row align="center" justify="start" class="ma-4">
      <h1 id="graphtext">우리가 수치로 보여줄수있는것들</h1>
    </v-row>
    <v-row align="center" justify="start" class="ma-4">
      <h4>서월버가 지표로 보여줄수있는것들은 무엇일까?</h4>
    </v-row>
    <v-sparkline
      :value="value"
      :gradient="gradient"
      :smooth="radius || false"
      :padding="padding"
      :line-width="width"
      :stroke-linecap="lineCap"
      :gradient-direction="gradientDirection"
      :fill="fill"
      :type="type"
      :auto-line-width="autoLineWidth"
      auto-draw
    ></v-sparkline>
    <v-card-text>
      <div class="display-1 font-weight-thin">뜪쌍</div>
    </v-card-text>
  </v-card>
</template>
<script>
const gradients = [
  ["#222"],
  ["#42b3f4"],
  ["red", "orange", "yellow"],
  ["purple", "violet"],
  ["#00c6ff", "#F0F", "#FF0"],
  ["#f72047", "#ffd200", "#1feaea"]
];
export default {
  data() {
    return {
      width: 2,
      radius: 10,
      padding: 8,
      lineCap: "round",
      gradient: gradients[5],
      value: [0, 2, 5, 9, 10, 10, 3, 5, 0, 0, 1, 8, 2, 9, 30],
      gradientDirection: "top",
      gradients,
      fill: false,
      type: "trend",
      autoLineWidth: false
    };
  }
};
</script>