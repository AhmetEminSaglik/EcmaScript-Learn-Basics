function printLine() {
    console.log("--------------------------------------------")
}
function printSubject(value) {
    console.log("--> SUBJECT : " + value)
}


printSubject("from()");
let fromInfo = "The Array.from() method returns an Array object from any object with a length property or any iterable object."
console.log(`Array.from("ABCDEFG") : ` + Array.from("ABCDEFG"));
console.log(Array.from("ABCDEFG"));

printLine();
printSubject("keys()");

let keysInfo = "The Array.keys() method returns an Array Iterator object with the keys of an array."
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits)
const keys = fruits.keys();
let text = "";
for (let x of keys) {
    text += x + "<br>";
}
console.log('text : ' + text)
console.log(keys)

printLine();
printSubject("entries()");

const f = fruits.entries();

for (let x of f) {
    //   document.getElementById("demo").innerHTML += x;
    console.log(x)
}

printLine();
printSubject("includes()");
console.log(`fruits.includes("Banana") : ` + fruits.includes("Banana"));
console.log(`fruits.includes("Strawberry") : ` + fruits.includes("Strawberry"));

printLine();
printSubject("spread()");
let spreadInfo = "The \"...\" operator expands an iterable (like an array) into more elements. ";
console.log(spreadInfo)
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const yearHalfSpread = [q1, q2, ...q3, ...q4];
console.log("q1 : "); console.log(q1)
console.log("q2 : "); console.log(q2)
console.log("q3 : "); console.log(q3)
console.log("q4 : "); console.log(q4)
console.log("year half spread = [q1, q2, ...q3, ...q4]; : ");
console.log(yearHalfSpread);