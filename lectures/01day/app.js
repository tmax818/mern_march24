//! VARIABLES and SCOPE
let blockName = "block scoped";

// function f(){
//     var functionName = "function scoped";
// }

if(true){
    var functionName = "function scoped";
}

console.log("blockName: ", blockName)
console.log("functionName: ", functionName)

//! SYNTAX ERRORS

let x = 1;
let y = 2;
let z == 3;
console.log(x + x);
console.log(y - z);
console.log(z * x);


