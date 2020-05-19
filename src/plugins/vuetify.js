import Vue from "vue";
import Vuetify from "vuetify/lib";
const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        one: "#97c842",
        two: "#e1f3c2",
        three: "#ffffff",
        four: "#424242",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
      },
    },
  },
});
Vue.use(Vuetify);
Vue.use(vuetify);

export default new Vuetify({});
