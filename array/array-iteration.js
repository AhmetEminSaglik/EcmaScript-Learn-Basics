//could not run this js page.

const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunctionSort);
console.log("after sort  : "+txt)

function myFunctionSort(value, index, array) {
    txt += value + "<br>";
}
function printFunction(variable) { // don't know how to run this
    // variable.document.write("txt : " + txt);
    variable.document.getElementById("demo").innerHTML=txt;
}

