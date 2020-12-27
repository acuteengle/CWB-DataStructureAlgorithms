
/* QUEUE (FIFO) */

class Queue {
    constructor() {
        this.index = 0;
        this.data = [];
    }

    push(value) {
        this.data.push(value);
    }

    pop() {
        let value = this.data[this.index];
        if (this.index < this.data.length) {
            this.index++;
        }
        return value;
    }

    size() {
        let length = this.data.length - this.index;
        return length;
    }

}

let myLine = new Queue();
myLine.push("Beng");
myLine.push("John");
// console.log(myLine.size()); // returns 2
let firstAdded = myLine.pop();
// console.log(myLine.size()); // returns 1
// console.log(firstAdded); // returns "Beng"


/* STACK (LIFO) */

class Stack {
    constructor() {
        this.data = [];
    }

    push(value) {
        this.data.push(value);
    }

    pop() {
        let value = this.data.pop();
        return value;
    }

    size() {
        return this.data.length;
    }
}

let myStack = new Stack();
myStack.push("Beng");
myStack.push("John");
// console.log(myStack.size()); // return 2
let lastAdded = myStack.pop();
// console.log(myStack.size()); // return 1
// console.log(lastAdded); // returns "John"


/* SET */

let numbers = [1, 2, 3, 5, 2, 3, 4, 2];

function uniqueValues(input) {
    let unique = new Set();

    for (let value of input) {
        // console.log("value", value);
        unique.add(value);
        // console.log("unique", unique);
    }

    return value;
}

console.log(uniqueValues(numbers));

/* MAP */

let names = ["Beng", "John", "Chris", "John", "Bryan", "Beng", "Michael"];

function countNames(input) {
    let counter = new Map();

    for (let key of input) {
        if (counter.has(key)) { //we have seen the name before
            let oldValue = counter.get(key);
            counter.set(key, oldValue + 1);
        }
        else { //we have not seen the name before
            counter.set(key, 1);
        }

        // console.log("key", key);
        // console.log("counter", counter);
    }

    return counter;
}

console.log(countNames(names));