//! var vs let and "hoisting"

console.log(a)
var a = "Alice"
console.log(a)
// console.log(b)
let b = "Bob"

//! LOCAL SCOPE


fd();

function fd(){
    console.log(a);
    console.log(b);
}

fe();


var fe = function funcName(){
    console.log(a);
    console.log(b);
}

console.log();

//! GLOBAL SCOPE