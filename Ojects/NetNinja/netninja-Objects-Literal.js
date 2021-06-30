/**
 * Object Literal
 * @youtube_link https://www.youtube.com/watch?v=7d9H34ZVRPg&list=PL4cUxeGkcC9i5yvDkJgt60vNVWffpblB7&index=2
 */
var userOne = {
    email: 'ryun@ninja.com',
    name: 'Ryun',
    login() {
        console.log(`${this.email} has logged in`);
    },
    logout() {
        console.log(`${this.email} has logged out`);
    }
}

console.log(userOne.name);
