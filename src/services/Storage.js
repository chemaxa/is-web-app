class Storage {
  key = "is-web-app";
  save(data) {
    localStorage.setItem(this.key, JSON.stringify(data));
  }
  read() {
    return JSON.parse(localStorage.getItem(this.key));
  }
  clear() {
    localStorage.clear();
  }
}
export default Storage;
