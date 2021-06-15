function User(email, name) {
    this.email = email;
    this.name = name;
    this.online = false;
    this.login = function() {
        console.log(`${this.email} has logged in`);
    }
}

var userOne = new User('ryun@ninja.com', 'Ryun');
var userTwo = new User('yoshi@ninja.com', 'Yoshi');

console.log(userOne);
userTwo.login();