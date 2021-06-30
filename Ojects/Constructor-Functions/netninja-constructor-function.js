/**
 * Constructor function (under the hood)
 * @youtube_link https://www.youtube.com/watch?v=3HsLZ7WUUt4&list=PL4cUxeGkcC9i5yvDkJgt60vNVWffpblB7&index=9
 */
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