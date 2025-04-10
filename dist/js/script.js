"use strict";
import variabel from "./componen/variabel.js";
import Thema from "./componen/thema.js";

let thema = new Thema();

if (thema.get() == "dark") {
  variabel.thema.checked = true;
} else {
  variabel.thema.checked = false;
}

variabel.thema.addEventListener("change", changeThema);

variabel.btnCollpase.addEventListener("click", () => {
  variabel.sidebar.classList.toggle("show");
  variabel.content.classList.toggle("show");
});

variabel.content.addEventListener("click", () => {
  if (variabel.content.className == "content show") {
    variabel.sidebar.classList.toggle("show");
    variabel.content.classList.toggle("show");
  }
});

function changeThema(e) {
  if (e.currentTarget.checked) {
    thema.darkThema();
  } else {
    thema.lightThema();
  }
}

const forms = document.querySelectorAll(".needs-validation");

// Loop over them and prevent submission
Array.from(forms).forEach((form) => {
  form.addEventListener(
    "submit",
    (event) => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add("was-validated");
    },
    false
  );
});
