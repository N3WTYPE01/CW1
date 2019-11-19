function adminShow() {
  var chkboxShow = document.getElementById('adminChk')
  var text = document.getElementById('Admin')

  if (chkboxShow.checked == true) {
      text.style.display = 'block'
  } else {
      text.style.display = "none";
  }

}

var vm = new Vue({
  el: '#register',
  data: {
      email: '',
      adminId: '',
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
              users.push({ 'adminID': this.adminId, 'email': newEmail, 'username': this.username, 'password': this.password });
              localStorage.setItem('users', JSON.stringify(users));
          }
          else {
              users = [{ 'adminID': this.adminId, 'email': newEmail, 'username': this.username, 'password': this.password }];
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
              if (users.some(function (user) { return user.username === logUsername, user.password === logPasseord })) {
                  confirm('User ' + logUsername + ' Logged In!');
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

//vue instance for table course array

var app2 = new Vue({
  el: '#app2',
data:{
          search: "",
          courses: [
              { 'topic': 'math', 'description':'Maths is fun!', 'location': 'hendon', 'price': 100 , 'review': 4},
              { 'topic': 'math', 'location': 'colindale', 'price': 80, 'review':  7},
              { 'topic': 'math', 'location': 'brent cross', 'price': 90, 'review': 3  },
              { 'topic': 'math', 'location': 'golders green', 'price': 120, 'review': 9 },
              { 'topic': 'english', 'location': 'hendon', 'price': 110, 'review': 10  },
              { 'topic': 'english', 'location': 'colindale', 'price': 90, 'review': 4  },
              { 'topic': 'english', 'location': 'brent cross', 'price': 90, 'review': 6  },
              { 'topic': 'english', 'location': 'golders green', 'price': 130, 'review': 5  },
              { 'topic': 'piano', 'location': 'hendon', 'price': 120, 'review': 8  },
              { 'topic': 'piano', 'location': 'golders green', 'price': 140, 'review': 7  }
          ]
      },
      computed: { //code which filters based on the topic aka the name of activity
        searchCourses() {
            return this.courses.filter(item => {
                return item.topic.toLowerCase().includes(this.search.toLowerCase())
            }
            )
        }


    }
})
