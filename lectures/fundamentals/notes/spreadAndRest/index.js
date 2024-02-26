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