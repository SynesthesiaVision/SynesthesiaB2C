// import { createApp } from "vue";
// import App from "./App.vue";
// import router from "@/routes/router.js";

// createApp(App).use(router).mount("#app");

import { createApp } from "vue";
import App from "./App.vue";
import router from "@/routes/router.js";
import axios from "./axios"; // Importe o arquivo axios.js que você criou

const app = createApp(App);
app.use(router);
app.config.globalProperties.$axios = axios; // Adicione o Axios como uma propriedade global

app.mount("#app");
