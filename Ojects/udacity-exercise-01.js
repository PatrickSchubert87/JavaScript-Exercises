const umbrella = {
    color: 'red',
    isOpen: false,
    open: function(){
        if(umbrella.isOpen === true){
            return "The umbrella is already opened.";
        } else {
            umbrella.isOpen = true;
            return "Umbrella was opened.";
        }
    },
    close: function(){
        if(umbrella.isOpen !== true){
            return "The umbrella is already opened.";
        } else {
            umbrella.isOpen = false;
            return "Umbrella was opened.";
        }
    }
};

console.log(umbrella.color);
console.log(umbrella.isOpen);
console.log(umbrella.open());
console.log(umbrella.isOpen);
console.log(umbrella.close());
console.log(umbrella.isOpen);

/**
 * Programming Quiz: Menu Items (7-2)
 * Create an object named `breakfast`. 
 * The object should contain properties for the `name`, `price`, and `ingredients`.
 * Print the entire object on the console
 */

const breakfast = {
    name: "Lumberjack",
    price: 9.95,
    ingredients: ['eggs', 'sausage', 'toast', 'hashbrowns', 'pancakes']
};

console.log(breakfast.name);

/**
 * 
 * Programming Quiz: Bank Accounts 1 (7-3)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have an object `savingsAccount` 
 * - Your `savingsAccount` object should have the `balance` and `interestRatePercent` property
 * - Your `savingsAccount` object should have a `printAccountSummary()` method
 * - Your `printAccountSummary()` method should return the EXACT expected message
 * - BE CAREFUL ABOUT THE PUNCTUATION, SPACES, AND EXACT WORDS TO BE PRINTED.
 */

var savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
        if (amount > 0) {
            savingsAccount.balance += amount;
        }
    },
    withdraw: function removeMoney(amount) {
        var verifyBalance = savingsAccount.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            savingsAccount.balance -= amount;
        }
    },
    // your code goes here
    printAccountSummary: function() {
        return 'Welcome! ' + '\n' + 'Your balance is currently $' + savingsAccount.balance + ' and your interest rate is ' + savingsAccount.interestRatePercent + '%.';
    }
};

console.log(savingsAccount.printAccountSummary());