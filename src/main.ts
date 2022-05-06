import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "element-plus/theme-chalk/el-loading.css";
import "element-plus/theme-chalk/el-message.css";

const app = createApp(App);

app.use(router);
app.use(store);
app.mount("#app");
