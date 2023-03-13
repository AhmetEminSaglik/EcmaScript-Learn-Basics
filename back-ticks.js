let firstName = "Ahmet Emin"
let lastName = "Saglik"

//define strings with back-ticks rather then the quotes as follow
// back-ticks get values of ${property}
let fullName = `Welcome ${firstName}, ${lastName}`;
console.log("fullName is defined with `${variable}` so it gaves value of variables : "+fullName)


let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`; // to fixed means digit value after dot.
console.log(total)