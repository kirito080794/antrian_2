"use strict";

import "../script.js";
import { modal as modalBoostrap } from "../componen/variabel.js";
import _toast from "../componen/toast.js";

const btnAdd = document.getElementById("add");
const textAction = document.getElementById("action-text");
const btnACtion = document.getElementById("btnACtion");
const form = document.getElementsByTagName("form");
const inputKodeLayanan = document.getElementById("kode_layanan");
const inputNamaLayanan = document.getElementById("nama_layanan");
const id = document.getElementById("id");
const modal = modalBoostrap(document.getElementById("modalForm"));

btnAdd.addEventListener("click", () => {
  resetForm(form[0], "tambah-layanan.html", "post");
  id.setAttribute("disabled", "disabled");
  id.removeAttribute("value");
  textAction.innerHTML = "/ Tambah";
  btnACtion.innerHTML = "Tambah";
});

document.querySelectorAll("table #edit").forEach(function (item) {
  item.addEventListener("click", (e) => {
    textAction.innerHTML = "/ Ubah";
    btnACtion.innerHTML = "Ubah";
    resetForm(form[0], "ubah-layanan.html", "post");
    const namaLayanan =
      item.parentElement.parentElement.parentElement.children[1];
    const kodeLayanan =
      item.parentElement.parentElement.parentElement.children[2];
    inputKodeLayanan.value = kodeLayanan.innerHTML;
    inputNamaLayanan.value = namaLayanan.innerHTML;
    id.removeAttribute("disabled");
    id.value = item.getAttribute("data-id");
    modal.show();
  });
});

function resetForm(form, action, method = "post") {
  form.reset();
  form.classList.remove("was-validated");
  form.setAttribute("action", action);
  form.setAttribute("method", method);
}

btnACtion.addEventListener("click", () => {
  new _toast("toast").show();
  modal.hide();
});
