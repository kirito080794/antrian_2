export default class _toast {
  constructor(id, pesan = "Data Berhasil Disimpan", header = "pesan") {
    this.toast = bootstrap.Toast.getOrCreateInstance(
      document.getElementById(id)
    );

    document.querySelector("." + id + "-header strong").innerHTML = header;
    document.getElementsByClassName(id + "-body")[0].innerHTML = pesan;
  }
  show() {
    return this.toast.show();
  }
}
