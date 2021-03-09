import Vue, { VNode } from "vue";
import App from "./App.vue";
import VueCompositionAPI from "@vue/composition-api";
import "@jsonforms/vue2-vanilla/vanilla.css";

Vue.config.productionTip = false;

Vue.use(VueCompositionAPI);

Vue.config.productionTip = false;

new Vue({
  render: (h): VNode => h(App)
}).$mount("#app");
