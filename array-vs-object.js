var text = "Hello World";
let arr = text.split(" ");
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
console.log('array is created as : const arr3 = ["Ahmet", \'c\', 23, arr, person, new Date()] ');
console.log(arr3);
console.log("arr3.length : " + arr3.length);



/*! ! !  Object, Array difference : 

In JavaScript, arrays use numbered indexes.  

In JavaScript, objects use named indexes.

Arrays are a special kind of objects, with numbered indexes.


WHERE TO USE OBJECT :  You should use objects when you want the element names to be strings (text).
WHERE TO USE ARRAY  :  You should use arrays when you want the element names to be numbers.

*/

console.log('1-) Arrays use numbered indexes, \n2-) Objects use named indexes , \n3-) Arrays are a special kind of objects, with numbered indexes.')