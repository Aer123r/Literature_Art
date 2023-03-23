import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router";
import ElementPlus from 'element-plus'
import "amfe-flexible/index.js";
import store from "./store"
import "element-plus/dist/index.css";
import './common/font.css'
const app = createApp(App);
app.use(router).use(ElementPlus).use(store).mount("#app");