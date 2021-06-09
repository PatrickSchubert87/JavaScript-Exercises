var Person = function() {};

Person.prototype.initialize = function(name, age)
{
    this.name = name;
    this.age = age;
}

// TODO: create the class Teacher and a method teach
const Teacher = function() {};

Teacher.prototype = new Person();

Teacher.prototype.teach = function(subject){
    return `${this.name} is now teaching ${subject}`;
}
var him = new Teacher();

him.initialize("Adam", 45);
him.teach("Inheritance");

/**
 * Prototype Inheritance
 * @link [https://www.programiz.com/javascript/prototype]
 */

 // constructor function
function Person () {
    this.name = 'John',
    this.age = 23
}

// creating objects
const person1 = new Person();
const person2 = new Person();

// adding property to constructor function
Person.prototype.gender = 'male';

// prototype value of Person
console.log(Person.prototype);

// inheriting the property from prototype
console.log(person1.gender);
console.log(person2.gender);