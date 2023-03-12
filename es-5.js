var text = "Hello World";
console.log("text : " + text)
console.log("text.charAt(0) : " + text.charAt(0))
console.log("text[0] : " + text[0])

console.log("text.length: " + text.length)

console.log("text.slice(3): " + text.slice(3))  // slice to `Hel` and `lo World` and returns the `lo World`
console.log("text.slice(0,3): " + text.slice(0, 3)) // returns the `Hel`
console.log("text.slice(-3): " + text.slice(-3)) // returns the `rld`  : last 3 characters
console.log("text.slice(-3,-1): " + text.slice(-3, -1)) // returns the `rl`  : last 3 characters

console.log("text.substring(3): " + text.substring(3)) // returns `lo Word` 3. index to end of the string
console.log("text.substring(5,3): " + text.substring(5, 3)) // returns `lo`
console.log("text.substring(-3): " + text.substring(-3)) // if first parameter is negative it counts from end of the string

let newText = text.replace("Hello", "Javascript"); // case sensitive
let newText2 = text.replace(/hELLo/i, "Javascript222"); // case insensitive
let newText3 = text.replaceAll("l", "?");
console.log(newText)
console.log(newText2)
console.log(newText3)

let text2 = "5";
let padded = text2.padStart(4, "x");
padded = padded.padEnd(padded.length + 3, "y");
console.log(text2);
console.log(padded);
let text3 = "abcABC";
console.log(text3.charCodeAt(0)); // UTF-16 code


text[0] = "A";// NO ERROR, NOT WORKS

let arr = text.split(" ");
console.log(arr);
console.log(arr[0]);


let arr2 = text.split("");
console.log(arr2);
console.log(arr2[0]);

let a = 3;
{
    let a;
    console.log("(re-defined, global value not assinged) let inner a : " + a)
}

var b = 3;
{
    var b;
    console.log("(re-defined, global value is assigned) var inner b : " + b)
}

const cars = ["Volvo", "BMW"];
console.log(cars);
cars.push("Audi")
console.log(cars);

const cars2 = { "name": "BMW", "year": 2023 }
console.log(cars2);
cars2.color = "red"
console.log(cars2);
console.log(cars2.color);
console.log(cars2["color"]);
let searchedText = text.matchAll(/Cats/gi); // g --> global search\ i --> case insensitive

let firstName = "Ahmet Emin"
let lastName = "Saglik"

//define strings with back-ticks rather then the quotes as follow
// back-ticks get values of ${property}
let fullName = `Welcome ${firstName}, ${lastName}`;
console.log(fullName)


let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`; // to fixed means digit value after dot.
console.log(total)

let myNumber = 32;
myNumber.toString(10); // returns  Decimal
myNumber.toString(8);// returns  Octal
myNumber.toString(2);// returns  Binary

// !!! IMPORTANT Comparing two JavaScript objects always returns false.

/*  Method        	Description
toString()	       Returns a number as a string
toExponential()	   Returns a number written in exponential notation
toFixed()	       Returns a number written with a number of decimals
toPrecision()	   Returns a number written with a specified length
ValueOf()	       Returns a number as a number
*/
const person = {
    firstName: 'John',
    lastName: 'Doe',
    id: 2345,
    fullName: function () {
        return 'first Name : ' + this.firstName + ', last name :' + this.lastName; // this must be used in object
    },
    myFunction: function () {
        return this;
    }
}
const arr3 = ["Ahmet", 'c', 23, arr, person, new Date()]
const obj = { "a": "A", "b": "B" }
console.log(arr3);
console.log(arr3.length);


//// for loop 
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

let fruitText = "<ul>";
for (let i = 0; i < fLen; i++) {
    fruitText += "<li>" + fruits[i] + "</li>";
}
fruitText += "</ul>";
console.log(fruitText)

fruits[fruits.length] = "Lemon";  // add new item using arr.length

let fruitText2 = "<ul>";
fruits.forEach(myFunction);
fruitText2 += "</ul>";

function myFunction(value) {
    fruitText2 += "<li>" + value + "</li>";
}
console.log(fruitText2)

const house = [];
house[0] = "dublex" // --> is correct using
house["dublex"] = "dublex" // --> is not correct using



/*! ! !  Object, Array difference : 

In JavaScript, arrays use numbered indexes.  

In JavaScript, objects use named indexes.

Arrays are a special kind of objects, with numbered indexes.


WHERE TO USE OBJECT :  You should use objects when you want the element names to be strings (text).
WHERE TO USE ARRAY  :  You should use arrays when you want the element names to be numbers.

*/

const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
console.log("fruits2: " + fruits2.toString()); //fruits: Banana,Orange,Apple,Mango
console.log(fruits2.join(" <*> ")); // do not change original array values
console.log("fruits2: " + fruits2.toString());
console.log("fruits2.pop() : " + fruits2.pop()); //removes last element
console.log("fruits2.pop() : " + fruits2.pop());
console.log("fruits2.pop() : " + fruits2.pop());
console.log("fruits2.pop() : " + fruits2.pop());
console.log("fruits2.pop() : " + fruits2.pop());
console.log("fruits2: " + fruits2.toString());

console.log("fruits2.push() : " + fruits2.push("Kiwi"));
console.log("fruits2.push() : " + fruits2.push("Strawberry")); //returns total index of array
console.log("fruits2: " + fruits2.toString());
console.log("fruits2.shift() : " + fruits2.shift());  // removes first element
console.log("fruits2.shift() : " + fruits2.shift());

console.log("fruits2: " + fruits2.toString());
console.log("fruits2.unshift() : " + fruits2.unshift("Kiwi"));
console.log("fruits2.unshift() : " + fruits2.unshift("Strawberry")); //returns total index of array
fruits2[fruits2.length] = "Banana";
fruits2[fruits2.length] = "Apple";
fruits2.unshift("Orange")
console.log("fruits2: " + fruits2.toString());
delete fruits2[0];
delete fruits2[1];
console.log("fruits2: " + fruits2.toString());
console.log("fruits2: " + fruits2.toString());

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];


const myChildren = myGirls.concat(myBoys); //The concat() method does not change the existing arrays. It always returns a new array.
console.log("myGirls : " + myGirls);
console.log("myBoys : " + myBoys);
console.log("myChildren : " + myChildren);

const children1 = ["Cecilie", "Lone"];
const children2 = ["Emil", "Tobias", "Linus"];
const children3 = ["Robin", "Morgan"];
const myChildren2 = children1.concat(children2, children3, myGirls, "Sally");

console.log("myChildren2 : " + myChildren2);

// Array splice()
const fruits3 = ["Banana", "Orange", "Apple", "Mango", "Water"];
console.log(fruits3);
let removed = fruits3.splice(2, 2, "Lemon", "Kiwi", "Strawberry");
//The first parameter (2) defines the position where new elements should be added (spliced in).
//The second parameter (0) defines how many elements should be removed.

console.log(fruits3);
console.log("removed items : " + removed)
fruits3.splice(1, 4);// delete elements
console.log(fruits3);

//Array slice()
const fruits4 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits4.slice(-4); // +n --> removes first n elements, -n --> removes except last n elements
console.log("fruits4 : " + fruits4)
console.log("citrus : " + citrus)

const citrus2 = fruits4.slice(2, 3); // +n --> removes first n elements, -n --> removes except last n elements
console.log("citrus2 : " + citrus2)

/* 
The slice() method creates a new array.

The slice() method does not remove any elements from the source array.*/

// ARRAY SORT
const fruits5 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log("fruits5 : " + fruits5)
fruits5.sort();
console.log("fruits5  sorted : " + fruits5)
fruits5.reverse();
console.log("fruits5 reversed : " + fruits5)

const numbers = [40, 100, 1, 5, 25, 10];
console.log("numbers : " + numbers)
numbers.sort();
console.log("numbers sorted : " + numbers)
numbers.sort(function (a, b) { return a - b });
console.log("numbers sorted sending function as paramter to sort(func...):  " + numbers)

numbers.sort(function (a, b) { return b - a });
console.log("numbers sorted descending :  " + numbers)

/**
 * function(a, b){return a - b}
 * If the result is negative, a is sorted before b.
 * If the result is positive, b is sorted before a.
 * If the result is 0, no changes are done with the sort order of the two values.
 */


// Sorting Object

const cars3 = [
    { type: "Volvo", year: 2016 },
    { type: "Saab", year: 2001 },
    { type: "BMW", year: 2010 }
];

console.log(cars3);
cars3.sort(function (a, b) { return a.type - b.type });
console.log(cars3);


// We can compare String using  `<` or `>`  in Javascript
cars3.sort(function (a, b) {
    let x = a.type;
    let y = b.type;
    if (x < y) { return -1; }
    if (x > y) { return 1; }
    return 0;
});


console.log(cars3);