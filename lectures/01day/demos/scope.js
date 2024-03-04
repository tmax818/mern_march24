//! var vs let and "hoisting"

console.log(a)
var a = "Alice"
console.log(a)
{
var b = "Bob"
}
console.log(b)

//! LOCAL SCOPE

function func(){
    var c = "Charlie";
}

console.log(c)

for(let i = 0; i < 3; i++){
    console.log(i)
}
console.log(i)



function fd(){
    console.log(a);
    console.log(b);
}

fd();

const fe = function (){
    console.log(a);
    console.log(b);
    return "Hello Everybody"
}

fe()

console.log();

//! GLOBAL SCOPE