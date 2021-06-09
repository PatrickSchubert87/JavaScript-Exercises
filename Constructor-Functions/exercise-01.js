/**
 * {@link https://www.learn-js.org/en/Object_Oriented_JavaScript learn-js}
 */

// TODO: create the Person class using a function
//  class called Person
function Person(name, age) {
  this.name = name;
  this.age = age;
  // The Person class should have a method called describe which returns a string with the following syntax:
  this.describe = function () {
    return `${this.name}, ${this.age} years old`;
  };
}

var jack = new Person('Jack', 25);
var jill = new Person('Jill', 24);
console.log(jack.describe());
console.log(jill.describe());

/**
 * {@link https://www.youtube.com/watch?v=SrhHszXkMRU JavaScript Tutorial For Beginners #30 - Constructor Functions}
 */

const Car = function(maxSpeed, driver) {
    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.drive = function(speed, time) {
        console.log(speed * time);
    }
    this.logDriver = () => {
        console.log(`Driver name is ${this.driver}`);
    }
}

const myCar = new Car(70, 'Tommy');
const myCar1 = new Car(74, 'Patrick');
const myCar2 = new Car(20, 'Friedo');
const myCar3 = new Car(30, 'Kerstin');

console.log(myCar.drive(30, 5));
console.log(myCar1.logDriver());
console.log(myCar2.maxSpeed);
console.log(myCar3.driver);

/**
 * {@link https://www.youtube.com/watch?v=HboT8g_QSGc&list=RDCMUCW5YeuERMmlnqo4oq8vwUpg&index=1 Object Oriented JavaScript Tutorial #5 - Class Constructors}
 */

class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }
    login() {
        console.log(this.email, 'Just logged in');
    }
    logout() {
        console.log(this.email, 'Just logged out');
    }
}

const myUserOne = new User('ryun@ismine.me', 'Ryun');
const myUserTwo= new User('patrick@is.me', 'Patrick');

console.log(myUserOne);
console.log(myUserTwo);

myUserOne.login();
myUserTwo.logout();

/**
 * {@link https://dyclassroom.com/design-patterns/design-patterns-javascript-classes-and-objects Design Patterns - JavaScript - Classes and Objects - DYclassroom}
 */

class Box {
    constructor(length, breadth, height) {
        this.length = length;
        this.breadth = breadth;
        this.height = height;
    }

    getVolume() {
        return this.length * this.breadth * this.height;
    }
}

class Cube extends Box {
    constructor(side) {
        super(side, side, side);
        this.side = side;
    }
}

const box = new Box(10, 20, 30);
const cube = new Cube(10);

console.log(box.getVolume());
console.log(cube.getVolume());

/**
 * {@link https://github.com/udacity/OOJS-screencasts/blob/master/L1-objects-in-depth/57-this-without-object.js this-without-object.js}
 */

const chameleon = {
    eyes: 2,
    lookAround: function () {
      // debugger
      console.log(`I see you with my ${this.eyes} eyes!`);
    }
  };
  
  chameleon.lookAround();
  
  function whoThis () {
    // debugger
    this.trickyish = true;
  }
  
  whoThis();

  /**
 * {Udacity OOP Nanodegreecourse}
 */

  const car = {
    numberOfDoors: 4,
    drive: function () {
       console.log(`Get in one of the ${this.numberOfDoors} doors, and let's go!`);
    }
  };
  debugger
  const letsRoll = car.drive;
  
  letsRoll();