// ARRAY SORT
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log("fruits : " + fruits)
fruits.sort();
console.log("fruits  sorted : " + fruits)
fruits.reverse();
console.log("fruits reversed : " + fruits)

const numbers = [40, 100, 1, 5, 25, 10];
console.log("numbers : " + numbers)
numbers.sort();
console.log("numbers sorted : " + numbers)
numbers.sort(function (a, b) { return a - b });
console.log("numbers sorted sending function as paramter to sort(func...):  " + numbers)

numbers.sort(function (a, b) { return b - a });
console.log("numbers sorted descending :  " + numbers)


console.log("\n* function(a, b){return a - b}\n * If the result is negative, a is sorted before b.\n * If the result is positive, b is sorted before a.\n * If the result is 0, no changes are done with the sort order of the two values.\n ");