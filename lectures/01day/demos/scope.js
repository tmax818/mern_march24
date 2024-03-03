//! var vs let and "hoisting"

console.log(a)
var a = "Alice"
console.log(b)
let b = "Bob"

//! LOCAL SCOPE

function fd(){
    console.log(a);
    console.log(b);
}

const fe = function(){
    console.log(a);
    console.log(b);
}

//! GLOBAL SCOPE