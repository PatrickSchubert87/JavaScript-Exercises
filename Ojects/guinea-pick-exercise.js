const guineaPicks = [
    {
        name: "Susi One",
        fur: "silky fur",
        years: "3",
        sex: "feminin",
        // food: ['cocumber', 'apple', 'grass', 'grains', 'chicory', 'hay', 'craots'],
        favoriteFood: 'cocumber'
    },
    {
        name: "Susi Two",
        fur: "rough fur",
        years: "3",
        sex: "feminin",
        // food: ['cocumber', 'apple', 'grass', 'grains', 'chicory', 'hay'],
        favoriteFood: 'chicory'
    },
    {
        name: "Uli",
        fur: "silky fur",
        years: "5",
        sex: "masculin",
        // food: ['cocumber', 'apple', 'grass', 'grains', 'chicory', 'hay'],
        favoriteFood: 'hay'
    },
    {
        name: "Struppie",
        fur: "rough fur",
        years: "6",
        sex: "masculin",
        // food: ['cocumber', 'apple', 'grass', 'grains', 'chicory', 'hay'],
        favoriteFood: 'apple'
    },
    {
        name: "Fivel",
        fur: "silky fur",
        years: "7",
        sex: "masculin",
        // food: ['cocumber', 'apple', 'grass', 'grains', 'chicory', 'hay'],
        favoriteFood: 'apple'
    },
    {
        name: "Balu",
        fur: "rough fur",
        years: "8",
        sex: "masculin",
        // food: ['cocumber', 'apple', 'grass', 'grains', 'chicory', 'hay'],
        favoriteFood: 'hey'
    }
];

let guineaPick = guineaPicks.map(guineaPick => `Hi. My name is ${guineaPick.name}, I have ${guineaPick.fur} and love ${guineaPick.favoriteFood}. Unfortunatelly, I only becam ${guineaPick.years} years old`);
// console.log(guineaPick);

guineaPick.forEach(guineaPick => console.log(guineaPick));

function GuineaPick(name, fur, years, sex, favoriteFood) {
    this.name = name,
    this.fur = fur,
    this.years = years,
    this.sex = sex,
    
    this.favoriteFood = favoriteFood
}

GuineaPick.prototype.food = function food() {
    return ['cocumber', 'apple', 'grass', 'grains', 'chicory', 'hay'];
}

// guineaPick = new GuineaPick (guineaPicks.name);
// console.log(guineaPick);

const susiOne = new GuineaPick ('Susi One', 'silky fur', 3, 'feminin', 'cocumber');
// susiOne.food();
console.log(susiOne);

const susiTwo = new GuineaPick ('Susi Two', 'rough fur', 3, 'feminin', 'chicory');
console.log(susiTwo, susiTwo.food());

const myGuineaPickArray = [susiOne, susiTwo];

myGuineaPickArray.forEach(myGuineaPick => console.log(myGuineaPick));