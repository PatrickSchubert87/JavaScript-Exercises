/**
 * high order function
 * are functions that includes other functions
 * called callback functions
 * There are two different methods to invoke callbacks
 */

// example of function
function alertThenReturn() {
    alert('Message 1!');

    return function () {
        alert('Message 2!');
    };
}

// Since alertThenReturn() returns that inner function, we can assign a variable to that return value:

const innerFunction = alertThenReturn();

// We can then use the innerFunction variable like any other function!

innerFunction();

/**
 * Likewise, this function can be invoked immediately without being stored in a variable. We'll still get the same outcome if we simply add another set of parentheses to the expression alertThenReturn();
 */

alertThenReturn()();

/**
 * Another example
 */

const returnsAFunction = function () {
    return function () {
        console.log('Hello from inside a function');
    };
};

const newFunction = returnsAFunction();

newFunction();

returnsAFunction()();

/*

Declare a function named `higherOrderFunction` that takes no arguments,
and returns an anonymous function.

The returned function itself takes no arguments as well, and simply
returns the number 8.

*/

function higherOrderFunction() {
    return function () {
        return 8;
    };
}

const methodeOne = higherOrderFunction();
console.log(higherOrderFunction()());

/**
 * Callback Functions
 */

function callAndAdd(n, callbackFunction) {
    return n + callbackFunction();
}

function returnsThree() {
    return 3;
}
