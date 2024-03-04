const animal = {
	type:"bird"
}
const animalShallowCopy = animal
const animalDeepCopy = {...animal}


const person = {
	name: "Tyler",
	hobbies: ['sleeping', 'coding']
}

const personDeepCopy = {...person}




//? REST

function sum(a, b){
    return a + b
}

function betterSum(...args){
    console.log(args);
}




//? SPREAD

const arr = [1,2,3,4,5];

const [first, second, ...spread] = arr