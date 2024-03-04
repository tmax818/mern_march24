
let raining = true;

function isRaining(raining){
    if(raining){
        console.log("bring umbrella");
    } else {
        console.log("the sun is out");
    }
}
const isRainingArrow = raining => console.log(raining ? "bring umbrella": "the sun is out")

isRaining(raining)
isRainingArrow(raining)

const isOdd = num => !!(num % 2)

console.log(isOdd(13))
console.log(isOdd(42))