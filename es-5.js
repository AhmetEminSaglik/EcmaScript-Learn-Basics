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

const cars2 = { "name": "BMW", "year": 2023}
console.log(cars2);
cars2.color="red"
console.log(cars2);