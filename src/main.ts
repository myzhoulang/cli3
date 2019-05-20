import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// base library
import { Button } from "ant-design-vue";
import "ant-design-vue/dist/antd.less";

Vue.use(Button);

import "./core/use";

import "./registerServiceWorker";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
