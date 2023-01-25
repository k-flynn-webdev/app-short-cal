import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";
// import { fas } from "@fortawesome/free-solid-svg-icons";
// import { far } from "@fortawesome/free-regular-svg-icons";
import { dom } from "@fortawesome/fontawesome-svg-core";

library.add([faGoogle, faGithub]);
// library.add(fas);
// library.add(far);
dom.watch();

export const fontAwesomeIcons = (app) => {
  if (app) {
    app.component("font-awesome-icon", FontAwesomeIcon);
  }
};
