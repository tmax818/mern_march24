//! VARIABLES

// ES5 Variable
var helloVarES5 = "Hello"

// Modern JS Variable
let helloVarES6 = "Hello"
	

//! FUNCTIONS

// ES5 Function
function helloWorldES5 (a){
    console.log(this)
    console.log(helloVarES5 + a)
}

// Modern JS Function
const helloWorldES6 =  (a) => {
    console.log(this)
console.log(helloVarES6 + a)
}


//! OBJECTS

// ES5 Object literal
var donDuckES5 = {
    firstName: "Donald",
    lastName: "Duck",
    age: 80,
 }

 // Modern JS Object literal
const donDuckES6 = {
    firstName: "Donald",
    lastName: "Duck",
    age: 80,
 }


 //! ARRAYS
 
// ES5 Array
var seaCreaturesES5 = ["crab", "swordfish", "jellyfish", "squid"]

// Modern JS Array
const seaCreaturesES6 = ["crab", "swordfish", "jellyfish", "squid"]

// Modern JS Setting Object Literal Properties to Variables
// Destructuring
const [crab, swordfish, jellyfish, squid] = seaCreaturesES6;


