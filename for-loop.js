function printLine() {
    console.log("--------------------------------------------")
}
function printSubject(value) {
    console.log("--> SUBJECT : " + value)
}

//// for loop 
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;
console.log("standart for loop : ");
let fruitText = "<ul>";
for (let i = 0; i < fLen; i++) {
    fruitText += "<li>" + fruits[i] + "</li>";
}
fruitText += "</ul>";
console.log(fruitText)

console.log("add new item to array using as : fruits[fruits.length] = \"Lemon\" ")
fruits[fruits.length] = "Lemon";  // add new item using arr.lengths

console.log("foreach loop : ");
console.log("using fruits.forEach(myFunction); so foreach it item and run the function : ");

let fruitText2 = "<ul>";
fruits.forEach(myFunction);
fruitText2 += "</ul>";

function myFunction(value) {
    fruitText2 += "<li>" + value + "</li>";
}
console.log(fruitText2)

printLine()
printSubject("for/of")
let forOfInfo = "for/of - loops through the values of an iterable object";
console.log(forOfInfo);
const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
    console.log("x : " + x)
    text += x;
}
console.log(text);

printLine()
printSubject("for/in")
let forInInfo = "for/in - loops through the properties of an object";
console.log(forInInfo);
const numbers = [45, 4, 9, 16, 25];

let txtIn = "";
for (let x in numbers) {
    console.log("x : " + x)
    txtIn += numbers[x];
}

