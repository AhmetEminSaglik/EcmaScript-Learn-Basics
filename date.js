function printLine() {
    console.log("--------------------------------------------")
}
function printSubject(value) {
    console.log("--> SUBJECT : " + value)
}
printSubject("new Date()")
let d1 = new Date();
console.log(d1);
printLine()

printSubject("new Date(\"2022-03-25\")")
let d2 = new Date("2022-03-25");
console.log("d2: "+d2);

printLine()

printSubject("new Date(\"October 13, 2014 11:13:00\")")
let d3 = new Date("2022-03-25");
console.log("d3: "+d3);

printLine()

printSubject("new Date(2018, 11, 24, 10, 33, 30, 0)")
let d4 = new Date(2018, 11, 24, 10, 33, 30, 0);
console.log("d4: "+d4);
printLine()

printSubject("new Date(2019, 3, 24, 10, 33, 30)  : over time increase next step. For example 25 hourse increase 1 day and prints 1 hour")
let d5 = new Date(2019, 2, 22, 23, 33, 30);
console.log("d5: "+d5);
printLine()

printSubject("toDateString() : converts more readable format")
let d6 = new Date(2019, 2, 22, 23, 33, 30);
console.log("d6: "+d6.toDateString());
printLine()

printSubject("toUTCString() : The toUTCString() method converts a date to a string using the UTC standard: ")
let d7 = new Date(2019, 2, 22, 23, 33, 30);
console.log("d7: "+d7.toUTCString());
printLine()

printSubject("toISOString() : The toISOString() method converts a date to a string using the ISO standard:")
let d8 = new Date(2019, 2, 22, 23, 33, 30);
console.log("d8: "+d8.toISOString());
/**
 * new Date()
new Date(date string)

new Date(year,month)
new Date(year,month,day)
new Date(year,month,day,hours)
new Date(year,month,day,hours,minutes)
new Date(year,month,day,hours,minutes,seconds)
new Date(year,month,day,hours,minutes,seconds,ms)

new Date(milliseconds)
 */