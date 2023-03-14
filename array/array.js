var text = "Hello World";
let arr = text.split(" ");
console.log(arr);


const cars = ["Volvo", "BMW"];
console.log(cars);
cars.push("Audi")
console.log(cars);

const cars2 = { "name": "BMW", "year": 2023 }
console.log(cars2);
cars2.color = "red"
console.log(cars2);
console.log("cars2.color : " + cars2.color);
console.log('cars2["color"] : ' + cars2["color"]);


console.log("created a house arr : const house = []; ")
const house = [];
console.log("adding item CORRECT format : house[0] = \"dublex\" ")
house[0] = "dublex" // --> is correct using
console.log("adding item INCORRECT format : house[\"dublex\"] = \"dublex\" ")
house["dublex"] = "dublex" // --> is not correct using

