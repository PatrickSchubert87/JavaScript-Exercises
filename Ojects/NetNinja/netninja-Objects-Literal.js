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
