class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }
    login() {
        console.log(`${this.email} jsut has logged in`);
    }
    logout() {
        console.log(`${this.email} just has logged out`);
    }
}

var userOne = new User('ryun@ninja.com', 'Ryun');
var userTwo = new User('yoshi@ninja.com', 'Yoshi');

console.log(userOne);
console.log(userTwo);