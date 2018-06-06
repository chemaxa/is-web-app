import Storage from "./Storage";
const storage = new Storage();
const Auth = {
  isAuthenticated: false,
  hashCode: s => {
    return s.split("").reduce((a, b) => {
      a = (a << 5) - a + b.charCodeAt(0);
      return a & a;
    }, 0);
  },
  signUp: function(credentials) {
    return new Promise((res, rej) => {
      this.isAuthenticated = true;
      storage.save({
        user: credentials.email,
        passwordHash: this.hashCode(credentials.password)
      });
      setTimeout(res, 100, { user: credentials.email }); //fake async
    });
  },
  authenticate: function(credentials) {
    return new Promise((res, rej) => {
      const data = storage.read();
      if (data.passwordHash === this.hashCode(credentials.password)) {
        this.isAuthenticated = true;
      } else {
        setTimeout(rej, 100, {
          error: "Wrong credentials"
        }); // fake async
      }
      console.log(data);
      setTimeout(res, 100); // fake async
    });
  },
  signout: function() {
    return new Promise((res, rej) => {
      this.isAuthenticated = false;
      storage.clear();
      setTimeout(res, 100); // fake async
    });
  }
};

export default Auth;
