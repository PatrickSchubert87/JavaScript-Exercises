/**
 * What is a class
 * @youtube_link https://www.youtube.com/watch?v=Ug4ChzopcE4&list=PL4cUxeGkcC9i5yvDkJgt60vNVWffpblB7&index=4
 * Class Constructors
 * @youtube_link https://www.youtube.com/watch?v=HboT8g_QSGc&list=PL4cUxeGkcC9i5yvDkJgt60vNVWffpblB7&index=5
 * Class Methodes
 * @youtube_link https://www.youtube.com/watch?v=hy-C4NY7A_8&list=PL4cUxeGkcC9i5yvDkJgt60vNVWffpblB7&index=6
 */
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