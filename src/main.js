import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
require("@/App.sass")
import "@mdi/font/css/materialdesignicons.css"

createApp(App).use(store).use(router).mount("#app")
