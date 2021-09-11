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
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faEllipsisV,
  faSun,
  faCloud,
  faCloudShowersHeavy,
  faSnowflake,
  faSmog,
  faPooStorm
);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
