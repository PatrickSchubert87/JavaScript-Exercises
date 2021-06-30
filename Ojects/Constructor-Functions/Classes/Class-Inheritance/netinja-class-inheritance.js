/**
 * Class Inheritance
 * @youtube_link https://www.youtube.com/watch?v=_cgBvtYT3fQ&list=PL4cUxeGkcC9i5yvDkJgt60vNVWffpblB7&index=8
 */
/**
 * Methode chaining isn't necessary for Class Inheritance
 */
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

/**
 * Class Inheritance works perfect for functions which shouldn't have every user.
 */

class Admin extends User {
    deleteUser(user) {
        users = users.filter(u => {
            return u.email != user.email
        });
    }
}

var userOne = new User('ryun@ninja.com', 'Ryun');
var userTwo = new User('yoshi@ninja.com', 'Yoshi');
var adminOne = new Admin ('patrick@eresutls.com', 'Patrick');

// create new array of Users
var users = [userOne, userTwo, adminOne];

console.log(userOne);
console.log(userTwo);
adminOne.deleteUser(userTwo);
console.log(users);

/**
 * This exemple shows methode chaining.
 * Because of the returing this keyword on each function, it's possible to chain methodes togethter instead to call each methode one by one.
 */

userOne.login().updateScore().updateScore().logout();