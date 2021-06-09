/**
 * @exercise - Create bound copies of printFullName and printDetails to person called boundPrintFullName and boundPrintDetails.
 * @link https://www.learn-js.org/en/Function_Context
 * 
 */

var person = {
    firstName : "John",
    lastName : "Smith",
    age : 23
};

function printFullName()
{
    console.log(this.firstName + " " + this.lastName);
}

function printDetails()
{
    console.log(this.firstName + " is " + this.age + " years old");
}

// TODO: create bound copies of printFullName and printDetails.
var boundPrintFullName = printFullName.bind(person);
var boundPrintDetails = printDetails.bind(person);

boundPrintFullName();
boundPrintDetails();