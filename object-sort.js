// Sorting Object
const cars = [
    { type: "Volvo", year: 2016 },
    { type: "Saab", year: 2001 },
    { type: "BMW", year: 2010 }
];

console.log(cars);
cars.sort(function (a, b) { return a.year - b.year });
console.log(cars);


// We can compare String using  `<` or `>`  in Javascript
cars.sort(function (a, b) {
    let x = a.type;
    let y = b.type;
    if (x < y) { return -1; }
    if (x > y) { return 1; }
    return 0;
});


// console.log(cars);