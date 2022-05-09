import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { createPinia } from "pinia";

import "element-plus/theme-chalk/el-loading.css";
import "element-plus/theme-chalk/el-message.css";
const Pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(Pinia);
app.mount("#app");
