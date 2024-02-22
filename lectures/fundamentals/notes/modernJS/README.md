# [Modern JavaScript](https://login.codingdojo.com/m/754/16713/124463)

## Learning Objectives

- Apply the concepts of Modern JavaScript syntax, such as using `const` and `let` instead of `var`, to declare variables with specific scopes and reassignment restrictions.
- Apply object destructuring to extract properties from object literals and assign them to variables in Modern JavaScript.
- Differentiate between JavaScript and ECMAScript, understanding that ECMAScript serves as the standardization of JavaScript.

## A Syntax Overhaul

>The JavaScript language has standards that are maintained by the [European Computer Manufacturer’s Association (ECMA)](https://ecma-international.org/). For that reason, we'll see JavaScript referred to as ECMAScript at times. 

### code refresh (ES5)

#### variable and function declaration
```javascript
// ES5 Variable
var helloVar = "Hello"
	
// ES5 Function
function helloWorld(a){
   console.log(helloVar + a)
}
// To execute:
helloWorld(" world!")
```
#### objects and arrays

```javascript
// ES5 Object literal
var donDuck = {
   firstName: "Donald",
   lastName: "Duck",
   age: 80,
}
//ES5 Setting Object Literal Properties to Variables
var firstName = donDuck.firstName
var lastName = donDuck.lastName
var age = donDuck.age
// ES5 Logging Object Literal Properties
console.log(firstName, lastName, age)

// ES5 Array
var seaCreatures = ["crab", "swordfish", "jellyfish", "squid"]
//ES5 Setting Object Literal Properties to Variables
var crab = seaCreatures[0]
var swordfish = seaCreatures[1]
var jellyfish = seaCreatures[2]
var squid = seaCreatures[3]
// ES5 Logging Array Indices
console.log(crab, swordfish, jellyfish, squid)

```

### ES6 and Beyond

