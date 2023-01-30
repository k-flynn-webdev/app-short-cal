import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faGoogle,
  faGithub,
  faApple,
  faFacebook,
  faYahoo,
  faMicrosoft,
} from "@fortawesome/free-brands-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { dom } from "@fortawesome/fontawesome-svg-core";
// import { faCalendar } from "@fortawesome/free-regular-svg-icons";

library.add([
  faCalendar,
  faGoogle,
  faGithub,
  faApple,
  faFacebook,
  faYahoo,
  faMicrosoft,
]);
dom.watch();

export const fontAwesomeIcons = (app) => {
  if (app) {
    app.component("font-awesome-icon", FontAwesomeIcon);
  }
};
