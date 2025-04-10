export default class Cookie {
  constructor(name, value, expires) {
    this.name = name;
    this.value = value;
    this.expires = expires;
    this.date = new Date();
  }

  set(cname = null, cvalue = null, exdays = null) {
    cname = cname === null ? this.name : cname;
    cvalue = cvalue === null ? this.value : cvalue;
    exdays = exdays === null ? this.expires : exdays;

    this.date.setTime(this.date.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + this.date.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    return "";
  }

  get(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return null;
  }

  delete(cname) {
    document.cookie = cname + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    return true;
  }

  check(cname) {
    return this.get(cname) ? true : false;
  }
}
