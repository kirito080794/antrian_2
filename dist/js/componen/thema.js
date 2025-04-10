import variabel, { change } from "./variabel.js";
import Cookie from "./cookie.js";

export default class thema {
  constructor(mode = null) {
    this.cook = new Cookie();

    if (mode === null) {
      if (this.cook.get("thema") == "dark") {
        this.darkThema();
      } else {
        this.lightThema();
      }
    }
  }

  get() {
    return this.cook.get("thema");
  }

  darkThema() {
    this.cook.set("thema", "dark", 60);
    variabel.html.setAttribute("data-bs-theme", "dark");
    variabel.on.style.visibility = "visible";
    variabel.off.style.visibility = "hidden";
    change("#fff");
  }

  lightThema() {
    this.cook.set("thema", "light", 60);
    variabel.html.removeAttribute("data-bs-theme", "dark");
    variabel.on.style.visibility = "hidden";
    variabel.off.style.visibility = "visible";
    change("#000000");
  }
}
