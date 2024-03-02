//! var vs let and "hoisting"

console.log(a)
var a = "Alice"
let b = "Bob"
console.log(b)

//! LOCAL SCOPE

function fd(){}

const fe = function(){}

//! GLOBAL SCOPE