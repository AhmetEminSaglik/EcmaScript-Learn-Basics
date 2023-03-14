
let mapInfo="The map() method creates a new array by performing a function on each array element.\nThe map() method does not execute the function for array elements without values.\nThe map() method does not change the original array."
console.log(mapInfo);
const numbers1 = [45, 4, 9, 16, 25];
console.log("numbers1 before any process : "+numbers1);

const numbers2 = numbers1.map(myFunction);
console.log("after numbers1.map(myFunction) : "+numbers2);

function myFunction(value, index, array) {
    return value * 2;
}