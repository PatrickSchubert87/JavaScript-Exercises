/**
 * Prototype
 * @youtube_link https://www.youtube.com/watch?v=4jb4AYEyhRc&list=PL4cUxeGkcC9i5yvDkJgt60vNVWffpblB7&index=10 
 */
function User(email, name) {
    this.email = email;
    this.name = name;
    this.online = false;
}

User.prototype.login = function() {
    this.online = true;
    console.log(`${this.email} has logged in`);
}

User.prototype.logout = function() {
    this.online = false;
    console.log(`${this.email} has logged out`);
}

// create Admin constructor functino by Inheriting from User constructor
/**
 * 
 * @param  {...any} arg is an Array of the given arguments e.g. ('patrick@eresults.net', 'Patrick')
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_function_calls
 */
/**
 * 
 * apply() is used because we put our arguments from the adminOne Object into an array 
 * @mdn https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply#using_apply_to_chain_constructors
 * if we wouldn't put the arguments into an array we could us call() instead.
 */
/**
 * 
 * @youtube_link https://www.youtube.com/watch?v=Fsp42zUNJYU&list=PL4cUxeGkcC9i5yvDkJgt60vNVWffpblB7&index=11
 * 3:27 explains the array function and the this keyword in the function Admin - User.apply()
 */
function Admin(...args) {
    console.log(args);
    // Inheritating from the constructor User
    User.apply(this, args);
    this.role = 'super user';
}

// Object.create() = creates a new Object and inheritates it from another object e.g. User
Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function(user) {
    users = users.filter(u => {
        return user.email != u.email;
    });
}

var userOne = new User('ryun@ninja.com', 'Ryun');
var userTwo = new User('yoshi@ninja.com', 'Yoshi');
var adminOne = new Admin('patrick@eresults.net', 'Patrick');

// create new array of Users
var users = [userOne, userTwo, adminOne];

console.log(userOne);
userTwo.login();
console.log(adminOne);