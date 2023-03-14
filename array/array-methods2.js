function printLine() {
    console.log("--------------------------------------------")
}
function printSubject(value) {
    console.log("--> SUBJECT : " + value)
}

printSubject("filter()")
let filterInfo = "The filter() method creates a new array with array elements that pass a test."
console.log(filterInfo);

const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunctionBiggerValueThan18);

function myFunctionBiggerValueThan18(value, index, array) {
    return value > 18;
}
console.log("numbers : " + numbers);
console.log("over18 : " + over18);

printLine();
printSubject("reduce()")
let reduceInfo = "The reduce() method runs a function on each array element to produce (reduce it to) a single value.\nThe reduce() method works from left-to-right in the array. See also reduceRight().\nTotal paramter is the first index value of array"
console.log(reduceInfo);

let sum = numbers.reduce(myFunctionNoTotalValue);
printLine();
printSubject("reduce(arr,total_paramater_initialize_value)  with total value parameter")
let sumWithTotalValueParamter = numbers.reduce(myFunctionWithTotalValue, 1000)
function myFunctionNoTotalValue(total, value, index, array) {
    console.log('total : ' + total)
    return total + value;
}

function myFunctionWithTotalValue(total, value, index, array) {
    console.log('total : ' + total)
    return total + value;
}
console.log("sum : " + sum);
console.log("sumWithTotalValueParamter: " + sumWithTotalValueParamter);

printLine();
printSubject("reduceRight()")
let sumReduceRight = numbers.reduceRight(myFunction);

function myFunction(total, value, index, array) {
    console.log('total : ' + total)
    return total + value;
}
console.log("sumReduceRight : " + sumReduceRight);

printLine();
printSubject("every()");

let everyInfo = "The every() method checks if all array values pass a test.";
console.log(everyInfo);

let allOver18 = numbers.every(everyFunctionOver18);

function everyFunctionOver18(value, index, array) {
    return value > 18;
}
console.log("allOver 18 : " + allOver18);

printLine();
printSubject("some()");
let someOver18 = numbers.some(someFunctionOver18);

function someFunctionOver18(value, index, array) {
    return value > 18;
}
console.log("someOver 18 : " + someOver18);

printLine();
printSubject("find()");
let findInfo = "The find() method returns the value of the first array element that passes a test function."
console.log(findInfo);

let first = numbers.find(findFunction);

function findFunction(value, index, array) {
    return value > 18;
}
console.log("first (over 18) : " + first)

printLine();
printSubject("findIndex()");
let findIndexInfo = "The find() method returns the value of the first array element that passes a test function."
console.log(findIndexInfo);

let firstIndex = numbers.findIndex(findFunction);

console.log("firstIndex (over 18) : " + firstIndex)

printLine();
