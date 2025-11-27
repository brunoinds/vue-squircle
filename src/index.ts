import { App } from 'vue';
import VSquircle from "./VSquircle.vue";

export default {
    install(app: App) {
        app.component("v-squircle", VSquircle);
    }
};

export { VSquircle };
