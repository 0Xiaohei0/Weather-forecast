import { createApp } from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEllipsisV,
  faSun,
  faCloud,
  faCloudShowersHeavy,
  faSnowflake,
  faSmog,
  faPooStorm,
  faCity,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import router from "./router";

library.add(
  faEllipsisV,
  faSun,
  faCloud,
  faCloudShowersHeavy,
  faSnowflake,
  faSmog,
  faPooStorm,
  faCity
);

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
