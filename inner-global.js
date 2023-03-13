let a = 3;
console.log("(global) let a = " + a);
{
    let a;
    console.log("(re-defined, global value not assinged) let inner a : " + a)
}

var b = 3;
{
    var b;
    console.log("(re-defined, global value is assigned) var inner b : " + b)
}