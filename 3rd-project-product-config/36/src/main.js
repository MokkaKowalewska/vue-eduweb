import Vue from "vue";
import App from "./App";
import VueAxios from "vue-axios";
import axios from "axios";
import store from "./store/store";

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);

new Vue({
    el: "#app",
    store,
    render: h => h(App)
});