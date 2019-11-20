//functions for check box show

function userRegShow() {
    var chkboxShow = document.getElementById('userChk')
    var text = document.getElementById('hideUserRegister')

    if (chkboxShow.checked == true) {
        text.style.display = 'block'
    } else {
        text.style.display = "none";
    }

}

function adminRegShow() {
    var chkboxShow = document.getElementById('adminChk')
    var text = document.getElementById('hideAdminRegister')

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
        username: '',
        password: '',
    },
    // define methods under the methods object
    methods: {
        submitRegister: function () {
            var users = '';
            var newEmail = this.email;
            var newUser = this.username;
            if (localStorage.getItem('users')) { // 'users' is an array of objects
                users = JSON.parse(localStorage.getItem('users'));
            };
            if (users) {
                if (users.some(function (user) { return user.email === newEmail })) {
                    alert('Email already exists!');
                    return;
                }
                if (users.some(function (user) { return user.username === newUser})) {
                    alert('Username already exists!');
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
            var logPassword = this.loginPassword;
            if (localStorage.getItem('users')) { // 'users' is an array of objects
                users = JSON.parse(localStorage.getItem('users'));
            };
            if (users) { //user validation if username and password matches localstorage
                if (users.some(function (user) { return user.username === logUsername, user.password === logPassword })) {
                    alert('User ' + logUsername + ' Logged In!');
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

//vue instance for admin login

var vm = new Vue({
    el: '#adminRegister',
    data: {
        admEmail: '',
        admId: '',
        admUsername: '',
        admPassword: '',
    },
    // define methods under the methods object
    methods: {
        submitAdminRegister: function () {
            var admins = '';
            var newEmail = this.admEmail;
            var newID = this.admId
            if (localStorage.getItem('admins')) { // 'users' is an array of objects
            admins = JSON.parse(localStorage.getItem('admins'));
            };
            if (admins) {
                if (admins.some(function (admins) { return admins.email === newEmail})) {
                    alert('Email already exists!');
                    return;
                }
                if (admins.some(function (admins) { return admins.adminID === newID})) {
                    alert('ID already exists!');
                    return;}

                admins.push({ 'adminID': this.admId, 'email': this.admEmail, 'username': this.admUsername, 'password': this.admPassword });
                localStorage.setItem('admins', JSON.stringify(admins));
            }
            else {
                admins = [{ 'adminID': this.admId, 'email': newEmail, 'username': this.admUsername, 'password': this.admPassword }];
                localStorage.setItem('admins', JSON.stringify(admins));
                return;
            }
        }
    }
});
//Vue instance for admin log in form
var vm = new Vue({
    el: '#adminLogin',
    data: {
        loginAdmID: '',
        loginAdmPassword: '',
    },
    methods: {// function for log in
        admLog: function () {
            var admins = '';
            var adminLogPassword = this.loginAdmPassword;
            var adminLogAdmID = this.loginAdmID;
            if (localStorage.getItem('admins')) { // 'users' is an array of objects
            admins = JSON.parse(localStorage.getItem('admins'));
            };
            if (admins) { //user validation if username and password matches localstorage
                if (admins.some(function (admins) { return  admins.password === adminLogPassword, admins.adminID === adminLogAdmID })) {
                    alert('Admin logged In!');
                    window.location.href = 'page3.html', true;
                    return;
                }
            }
            else (admins)
            if (admins.some(function (admins) { return admins.adminID !== adminLogAdmID })) {
                alert('Incorrect Username or Password. Please try again.');
            }
        }
    }
}
)


//vue instance for table course array

var app2 = new Vue({
    el: '#app2',
    data: {
        search: '',
        courses: [
            { 'topic': 'math', 'description': 'Maths is fun!', 'Length': 1 , 'price': 100, 'review': 4 },
            { 'topic': 'math', 'description': 'hm!', 'Length': 4, 'price': 80, 'review': 7 },
            { 'topic': 'math', 'description': 'hm!', 'Length':  5, 'price': 90, 'review': 3 },
            { 'topic': 'math', 'description': 'hm!', 'Length': 2, 'price': 120, 'review': 9 },
            { 'topic': 'english', 'description': 'hm!', 'Length':5, 'price': 110, 'review': 10 },
            { 'topic': 'english', 'description': 'hm!', 'Length': 2, 'price': 90, 'review': 4 },
            { 'topic': 'english', 'description': 'hm!', 'Length': 5, 'price': 90, 'review': 6 },
            { 'topic': 'english', 'description': 'hm!', 'Length': 5, 'price': 130, 'review': 5 },
            { 'topic': 'piano', 'description': 'hm!', 'Length': 3, 'price': 120, 'review': 8 },
            { 'topic': 'piano', 'description': 'hm!', 'Length': 1, 'price': 140, 'review': 7 }
        ]
    },
    computed: { //code which filters based on the topic aka the name of activity
        searchCourses() {
            return this.courses.filter(item => {
                return item.topic.toLowerCase().includes(this.search.toLowerCase())
                
            }
            )
        },
     


    }
})

//filters
new Vue({
    el: '#filterApp',
    data: {
      selected: 'A',
      options: [
        { text: 'Math', value: 'A' },
        { text: 'English', value: 'B' },
        { text: 'Piano', value: 'C' }
      ]
    }
  })
