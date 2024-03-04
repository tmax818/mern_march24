
//! Ternary


let raining = true;

const isRaining = (raining) => {

    if(raining){
        console.log("Bring an umbrella")
    } else {
        console.log("the sun is shining!!")
    }
    
}

const isRainingArrow = raining => console.log(raining ? "Bring an umbrella": "The sun is out")

const isEven = num => console.log(num % 2 === 0 ? "even": "odd");
const isEvenShorter = num => !(num % 2)
const isOdd = num => !!(num % 2)

isEven(13)
isEven(42)
console.log(isEvenShorter(13))
console.log(isEvenShorter(42))
console.log(isOdd(13))
console.log(isOdd(4))
 
