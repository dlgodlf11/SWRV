import Vue from "vue";
import Vuetify from "vuetify/lib";
const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        one: "#a5e65a",
        two: "#5f7174",
        three: "#ffffff",
        error: "#FF5252",
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
