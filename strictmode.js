"use strict";
console.log("STRICT MODE ENABLED : While this is enabled then variables without  declaring it cause errors");
let x= 10;
console.log("Variable x is declared (let) : "+ x);

var y= 20;
console.log("Variable y is declared (var) : "+ y);

console.log("Variable z is not declared : ");
z = 30;  // This will cause an error (x is not defined).
console.log("x :  "+x);


    