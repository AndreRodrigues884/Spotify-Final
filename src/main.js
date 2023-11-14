import "./assets/main.css";
import App from "./App.vue";
import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router";

const app = createApp(App);

// Create and use Pinia instance
const pinia = createPinia();
app.use(pinia);

// Use the router
app.use(router);

// Mount the app
app.mount("#app");
