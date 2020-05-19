<template>
  <v-content style="background-color: rgb(230, 230, 230);height:800px;">
    <v-container class="fill-height" fluid style="height:100%;">
      <v-row align="center" justify="center">
        <v-col cols="4">
          <v-hover v-slot:default="{ hover }">
            <v-card class="mx-auto" color="grey lighten-4" max-width="600">
              <v-img src="../imgs/choom.jpg">
                <v-expand-transition>
                  <v-btn
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text"
                    style="height: 100%;"
                    @click="clock"
                  >더춤</v-btn>
                </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="4">
          <v-hover v-slot:default="{ hover }">
            <v-card class="mx-auto" color="grey lighten-4" max-width="600">
              <v-img src="../imgs/motion.jpg">
                <v-expand-transition>
                  <v-btn
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text"
                    style="height: 100%;"
                  >모션인식</v-btn>
                </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="4">
          <v-hover v-slot:default="{ hover }">
            <v-card class="mx-auto" color="grey lighten-4" max-width="600">
              <v-img src="../imgs/vision.jpg">
                <v-expand-transition>
                  <v-btn
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text"
                    style="height: 100%;"
                  >영상처리</v-btn>
                </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col cols="4">
          <v-hover v-slot:default="{ hover }">
            <v-card class="mx-auto" color="grey lighten-4" max-width="600">
              <v-img src="../imgs/medic.jpg">
                <v-expand-transition>
                  <v-btn
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text"
                    style="height: 100%;"
                  >으료데이터</v-btn>
                </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="4">
          <v-hover v-slot:default="{ hover }">
            <v-card class="mx-auto" color="grey lighten-4" max-width="600">
              <v-img src="../imgs/curation.jpg">
                <v-expand-transition>
                  <v-btn
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text"
                    style="height: 100%;"
                  >운동추천</v-btn>
                </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="4">
          <v-hover v-slot:default="{ hover }">
            <v-card class="mx-auto" color="grey lighten-4" max-width="600">
              <v-img src="../imgs/tuck.jpg">
                <v-expand-transition>
                  <v-btn
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text"
                    style="height: 100%;"
                  >특허</v-btn>
                </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>
<script>
export default {
  methods: {
    clock() {
      console.log("asdf");
    }
  }
};
</script>
<style >
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
</style>
