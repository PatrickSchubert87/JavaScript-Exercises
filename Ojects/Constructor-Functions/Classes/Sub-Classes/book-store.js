/**
 * ES6 Classes instead of Prototype & Inheritence
 */

class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getSummery() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
    getAge() {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    }
    revise(newYear) {
        this.year = newYear;
        this.revise = true;
    }

    static topBookStores() {
        return 'Barn & Noble';
    }
}

// Instantiate Object
const book1 = new Book('Book One', 'John Doe', '2013');

console.log(book1);
book1.revise('2018');
console.log(book1);

console.log(Book.topBookStores());

// Magazine Subclasses
class Magazine extends Book {
    constructor(title, author, year, month) {
        super(title, author, year);
        this.month = month;
    }
}

// Instantiate Magazine
const mag1 = new Magazine('Mag One', 'John Doe', '2018', 'June');

console.log(mag1.getSummery());
console.log(mag1.getAge());
console.log(mag1.getFullYear());
console.log(mag1);