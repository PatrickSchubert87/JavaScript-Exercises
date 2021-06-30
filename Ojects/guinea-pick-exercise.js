// const guineaPicks = [
//     {
//         name: "Susi One",
//         fur: "silky fur",
//         years: "3",
//         sex: "feminin",
//         fact: "I'm a lazy girl, I only sit on a specific corner in front of the TV",
//         favoriteFood: 'cocumber'
//     },
//     {
//         name: "Susi Two",
//         fur: "rough fur",
//         years: "3",
//         sex: "feminin",
//         fact: "(Read this fast) - Tap, tap, tap, tap,..., if you hear this, thats me, when I run under the couch. Sometimes, I do a break for eating parsley",
//         favoriteFood: 'chicory'
//     },
//     {
//         name: "Uli",
//         fur: "silky fur",
//         years: "5",
//         sex: "masculin",
//         
//         favoriteFood: 'hay'
//     },
//     {
//         name: "Struppie",
//         fur: "rough fur",
//         years: "6",
//         sex: "masculin",
//         // food: ['cocumber', 'apple', 'grass', 'grains', 'chicory', 'hay'],
//         favoriteFood: 'apple'
//     },
//     {
//         name: "Fivel",
//         fur: "silky fur",
//         years: "7",
//         sex: "masculin",
//         fact: "I'm a guinea pick but in my mind I'm a cat :D I love to lay on the arm or behind the neck",
//         favoriteFood: 'apple'
//     },
//     {
//         name: "Balu",
//         fur: "rough fur",
//         years: "8",
//         sex: "masculin",
//         fact: "I love playing seek and hide. HINT: If you don't find me, look into the hay reuse :D"
//         favoriteFood: 'hey'
//     }
// ];

// let guineaPick = guineaPicks.map(guineaPick => `Hi. My name is ${guineaPick.name}, I have ${guineaPick.fur} and love ${guineaPick.favoriteFood}. Unfortunatelly, I only becam ${guineaPick.years} years old`);
// // console.log(guineaPick);

// guineaPick.forEach(guineaPick => console.log(guineaPick));

function GuineaPick(name, fur, years, sex, favoriteFood, image) {
    this.name = name;
    this.fur = fur;
    this.years = years;
    this.sex = sex;
    this.favoriteFood = favoriteFood;
    this.image = image;
    // this.happinessLevel = 10;
    // this.restedLevel = 10;
    // this.healthLevel = 10;
}

GuineaPick.prototype.food = function food() {
    return ['cocumber', 'apple', 'grass', 'grains', 'chicory', 'hay', 'carrots', 'melone', 'parsley'];
    // return this;
}

GuineaPick.prototype.isHungry = function() {
    return `${this.name}, is hungry`;
    // return this;
}

GuineaPick.prototype.wantToPlay = function() {
    return `${this.name}, wants to play`;
}

GuineaPick.prototype.sleeps = function() {
    return `${this.name}, is sleeping please don't wake it up`;
}

GuineaPick.prototype.eatsFavoriteFood = function() {
    return `${this.name} eats its ${this.favoriteFood}`;
}

GuineaPick.prototype.hunger = function() {
    return Math.floor((Math.random() * 10) + 1);
}
GuineaPick.prototype.happiness = function() {
    return Math.floor((Math.random() * 10) + 1);
}
GuineaPick.prototype.health = function() {
    return Math.floor((Math.random() * 10) + 1);
}

// guineaPick = new GuineaPick (guineaPicks.name);
// console.log(guineaPick);

const susiOne = new GuineaPick ('Susi One', 'silky fur', 3, 'feminin', 'cocumber');
// susiOne.food();
console.log(susiOne);

const susiTwo = new GuineaPick ('Susi Two', 'rough fur', 3, 'feminin', 'chicory');
console.log(susiTwo);
console.log(susiTwo.food());
console.log(susiTwo.isHungry());
console.log(susiTwo.wantToPlay());
console.log(susiTwo.sleeps());
console.log(susiTwo.eatsFavoriteFood());
console.log(`Hunger: ${susiTwo.hunger()}`);
console.log(`Happyness: ${susiTwo.happiness()}`);
console.log(`Health: ${susiTwo.health()}`);


// const myGuineaPickArray = [susiOne, susiTwo];

// myGuineaPickArray.forEach(myGuineaPick => console.log(myGuineaPick));