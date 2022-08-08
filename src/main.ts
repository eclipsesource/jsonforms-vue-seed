import Vue, { VNode } from "vue";
import App from "./App.vue";
import "@jsonforms/vue2-vanilla/vanilla.css";

Vue.config.productionTip = false;

Vue.config.productionTip = false;

new Vue({
  render: (h): VNode => h(App)
}).$mount("#app");
