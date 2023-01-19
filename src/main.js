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
const appStore = createPinia();

app.use(anu);
app.use(appStore);
app.use(router);

app.mount("#app");

import { userMount } from "@/helpers//userMount.js";
userMount(appStore);
