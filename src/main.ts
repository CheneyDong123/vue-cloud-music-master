import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

import "../public/icon/icon.css";
import "@/styles/common.less";
import "element-plus/theme-chalk/el-loading.css";
import "element-plus/theme-chalk/el-message.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

const Pinia = createPinia();
const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(router);
app.use(Pinia);
app.mount("#app");
