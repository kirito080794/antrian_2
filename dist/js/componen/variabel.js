export default {
  html: document.getElementsByTagName("html")[0],
  off: document.getElementsByClassName("switch__off")[0],
  on: document.getElementsByClassName("switch__on")[0],
  thema: document.getElementById("thema"),
  btnCollpase: document.getElementById("collapse-menu"),
  sidebar: document.getElementsByClassName("sidebar")[0],
  content: document.getElementsByClassName("content")[0],
};

let color = "#000000";
function change(_color) {
  color = _color;
  return color;
}

function modal(modal) {
  return new bootstrap.Modal(modal);
}

export { color, change, modal };
