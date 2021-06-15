/**
 * Methods to loop through an array
 */

// for loop example

function each(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            console.log(array[i]);
        }
    }
}

function isPositive(n) {
    return n > 0;
}

// The following is then executed:

each([-2, 7, 11, -4, -10], isPositive);

// forEach example with named function

[1, 5, 2, 4, 6, 3].forEach(function logIfOdd(n) {
    if (n % 2 !== 0) {
        console.log(n);
    }
});

// forEach example with anonymous function

[1, 5, 2, 4, 6, 3].forEach(function (n) {
    if (n % 2 !== 0) {
        console.log(n);
    }
});

// assuming the function was already defined, it's possible to simply pass in just the name of the function

[1, 5, 2, 4, 6, 3].forEach(logIfOdd);

/**
 * Another example
 */

const favoriteFlavors = ['cookie dough', 'nougat', 'vanilla'];

favoriteFlavors.forEach(function (flavor) {
    debugger;
    console.log(`I enjoy ${flavor} ice cream`);
});
