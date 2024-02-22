
// {
//     var beatles = ['Paul', 'George', 'John', 'Ringo'];
// }

// {
    //     var rollingStones = ['Mick', 'Keith', 'Charlie', 'Ronnie', 'Brian', 'Bill' ]
    // }
    
function defBeatles(){
    var beatles = ['Paul', 'George', 'John', 'Ringo'];
}
var rollingStones = ['Mick', 'Keith', 'Charlie', 'Ronnie', 'Brian', 'Bill' ]
function printNames(names) {
	console.log(names[2]) 
}
// printNames(beatles); // Output: "John"
printNames(rollingStones); // Output: "John"
                     
function printNames2(names) {
    beatles = ['Paul', 'George', 'John', 'Ringo'];
    console.log(names[2]) 
}
// printNames2(beatles); //Output: ReferenceError: printName is not defined         

var beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
   var innerScope = "what can access me?"
   console.log(deepScope);
   return function innerFunction() {
      var deepScope = "can innerScope access me?"
      console.log(innerScope);
  }
}
printNames(beatles)(); 

