var vm = new Vue({
  el: '#register',
  data: {
    email: '',
    username: '',
    password: '',
  },
  // define methods under the methods object
  methods: {
    submitRegister: function () {
      var users = '';
      var newEmail = this.email;
      if (localStorage.getItem('users')) { // 'users' is an array of objects
        users = JSON.parse(localStorage.getItem('users'));
      };
      if (users) {
        if (users.some(function (user) { return user.email === newEmail })) {
          alert('Email already exists!');
          return;
        }
        users.push({ 'email': newEmail, 'username': this.username, 'password': this.password });
        localStorage.setItem('users', JSON.stringify(users));
      }
      else {
        users = [{ 'email': newEmail, 'username': this.username, 'password': this.password }];
        localStorage.setItem('users', JSON.stringify(users));
        return;
      }
    }
  }
});
//Vue instance for log in form
var vm = new Vue({
    el: '#login',
    data: {
        loginUsername: '',
        loginPassword: '',
    },
    methods: {// function for log in
    log: function () {
      var users = '';
      var logUsername = this.loginUsername;
      var logPasseord = this.loginPassword;
      if (localStorage.getItem('users')) { // 'users' is an array of objects
        users = JSON.parse(localStorage.getItem('users'));
      };
      if (users) { //user validation if username and password matches localstorage
        if (users.some(function (user) { return user.username === logUsername, user.password === logPasseord})) {
          confirm('User ' +  logUsername +  ' Logged In!');
          window.location.href = 'page2.html', true;
          return;
        }
      }
      else (users) 
        if (users.some(function (user) { return user.username !== logUsername })) {
          alert('Incorrect Username or Password. Please try again.');
      }
    }
    }
}
)

