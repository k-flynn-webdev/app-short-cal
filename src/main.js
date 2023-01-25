import { createApp } from "vue";
import { createPinia } from "pinia";
import UI from "@indielayer/ui";

import App from "@/App.vue";
import router from "./router";

import "@/assets/main.css";
import "@/assets/main.scss";

const app = createApp(App);
const appStore = createPinia();

app.use(appStore);
app.use(router);
app.use(UI, {
  prefix: "X",
});
app.mount("#app");

import { userMount } from "@/helpers//userMount.js";
userMount(appStore);

import { fontAwesomeIcons } from "@/helpers//icons.js";
fontAwesomeIcons(app);
