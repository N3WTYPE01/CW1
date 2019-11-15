Vue.component('myheading',{
  template: '<h1>School Activity System</h1>' 
});


new Vue({
    el: "#app"
    });

    var signupApp = new Vue({
        el: '#signup',
        data: {
        email: '',
        username:'',
        password: '',
        },
        methods: {
        submitForm: function() {var users = '';
        var newEmail = this.email;
        if (localStorage.getItem('users')) { // 'users' is an array of objects
        users = JSON.parse(localStorage.getItem('users'));
        };
        if (users) {
        if (users.some(function(user) {return user.email === newEmail})) {
        alert('Email already exists!');
        return;
        }
        users.push({'email': newEmail,'username': this.username,'password': this.password});
        localStorage.setItem('users', JSON.stringify(users));
        }
        else {
        users = [{'email': newEmail, 'username':this.username, 'password': this.password}];
        localStorage.setItem('users', JSON.stringify(users));
        }
        }
        }
        } 
    )
