import { createApp } from "vue";
import { createPinia } from "pinia";
import { anu } from "anu-vue";

import App from "@/App.vue";
import router from "./router";

import "uno.css";
import "anu-vue/dist/style.css";
import "@anu-vue/preset-theme-default/dist/style.css";
import "@/assets/main.css";

const app = createApp(App);

app.use(anu);
app.use(createPinia());
app.use(router);

app.mount("#app");
