function printLine() {
    console.log("--------------------------------------------")
}
function printSubject(value) {
    console.log("--> SUBJECT : " + value)
}
let obj = { name: "John", age: 30, city: "New York" };
console.log("obj : " + obj);
console.log(obj);

let myJSON = JSON.stringify(obj); //  converting an object into a JSON string.
console.log(myJSON);

let toJSON = JSON.parse(myJSON) //converting JSON strings into JavaScript objects.

console.log(toJSON);
printLine();

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getInfo() {
        console.log("name  : " + this.name + " age : " + this.age);
    }
}
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
}
let arr = []


arr.push(new Person("John", 30));
arr.push(new Car("BMW", "ix3", 2020))
console.log(arr);
let objArr= { name: "John", age: 30, city: "New York", person :{"name": "Emin","age": 22}};
arr.push(objArr)
let arrToJSON = JSON.stringify(arr); // print data in String format
console.log(arrToJSON);
printLine();
let JSONToObject = JSON.parse(arrToJSON)
console.log(JSONToObject); // print data in object format