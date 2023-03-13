const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("fruits: " + fruits.toString()); //fruits: Banana,Orange,Apple,Mango
console.log(fruits.join(" <*> ")); // do not change original array values
console.log("fruits: " + fruits.toString());
console.log("fruits.pop() : " + fruits.pop()); //removes last element
console.log("fruits.pop() : " + fruits.pop());
console.log("fruits.pop() : " + fruits.pop());
console.log("fruits.pop() : " + fruits.pop());
console.log("fruits.pop() : " + fruits.pop());
console.log("fruits: " + fruits.toString());

console.log("fruits.push() : " + fruits.push("Kiwi"));
console.log("fruits.push() : " + fruits.push("Strawberry")); //returns total index of array
console.log("fruits: " + fruits.toString());
console.log("fruits.shift() : " + fruits.shift());  // removes first element
console.log("fruits.shift() : " + fruits.shift());

console.log("fruits: " + fruits.toString());
console.log("fruits.unshift() : " + fruits.unshift("Kiwi"));
console.log("fruits.unshift() : " + fruits.unshift("Strawberry")); //returns total index of array
fruits[fruits.length] = "Banana";
fruits[fruits.length] = "Apple";
fruits.unshift("Orange")
console.log("fruits: " + fruits.toString());
delete fruits[0];
delete fruits[1];
console.log("fruits: " + fruits.toString());
console.log("fruits: " + fruits.toString());

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
console.log("------->  Array splice() method" );
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
console.log("------->  Array slice() method" );
const fruits4 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits4.slice(-4); // +n --> removes first n elements, -n --> removes except last n elements
console.log("fruits4 : " + fruits4)
console.log("citrus : " + citrus)

const citrus2 = fruits4.slice(2, 3); // +n --> removes first n elements, -n --> removes except last n elements
console.log("citrus2 : " + citrus2)

console.log("-------> Result  : \n -) The slice() method creates a new array.\n -) The slice() method does not remove any elements from the source array."  );