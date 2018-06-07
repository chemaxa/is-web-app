import Storage from "./Storage";

const storage = new Storage();
let isAuthenticated = false;

try {
  const { user } = storage.read();
  isAuthenticated = Boolean(user);
} catch (e) {}

const Auth = {
  hashCode: s => {
    return s.split("").reduce((a, b) => {
      a = (a << 5) - a + b.charCodeAt(0);
      return a & a;
    }, 0);
  },
  signUp: function(credentials) {
    return new Promise((res, rej) => {
      isAuthenticated = true;
      storage.save({
        user: credentials.email,
        passwordHash: this.hashCode(credentials.password)
      });
      setTimeout(res, 100, { user: credentials.email }); //fake async
    });
  },
  authenticate: function(credentials) {
    return new Promise((res, rej) => {
      const { user, passwordHash } = storage.read();
      if (
        user === credentials.email &&
        passwordHash === this.hashCode(credentials.password)
      ) {
        isAuthenticated = true;
      } else {
        setTimeout(rej, 100, {
          error: "Wrong credentials"
        }); // fake async
      }
      setTimeout(res, 100, { user }); // fake async
    });
  },
  getUser: function() {
    if (isAuthenticated) {
      const { user } = storage.read();
      return user;
    } else {
      return null;
    }
  },
  
  isAuthenticated: () => isAuthenticated,
  signOut: function() {
    return new Promise((res, rej) => {
      isAuthenticated = false;
      storage.clear();
      setTimeout(res, 100); // fake async
    });
  }
};

export default Auth;
