class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.score = 0;
    }
    login() {
        console.log(`${this.email} jsut has logged in`);
        return this;
    }
    logout() {
        console.log(`${this.email} just has logged out`);
        return this;
    }
    updateScore() {
        this.score++;
        console.log(`${this.email} score is now ${this.score}`);
        return this;
    }
}

var userOne = new User('ryun@ninja.com', 'Ryun');
var userTwo = new User('yoshi@ninja.com', 'Yoshi');

console.log(userOne);
console.log(userTwo);

/**
 * This exemple shows methode chaining.
 * Because of the returing this keyword on each function, it's possible to chain methodes togethter instead to call each methode one by one.
 */

userOne.login().updateScore().updateScore().logout();