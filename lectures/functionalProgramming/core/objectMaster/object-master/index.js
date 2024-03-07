const pokemon = require('./pokemon')


//TODO an array of pokémon objects where the id is evenly divisible by 3

const pokemonDivBythree = pokemon.filter(p => p.id % 3 === 0)
console.log(pokemonDivBythree)

//TODO an array of pokémon objects that are "fire" type

// const firePokemon = pokemon.filter(p => p.types.includes('fire'))
// console.log(firePokemon)


//TODO an array of pokémon objects that have more than one type
//TODO an array with just the names of the pokémon
//TODO an array with just the names of pokémon with an id greater than 99
//TODO an array with just the names of the pokémon whose only type is poison
//TODO an array containing just the first type of all the pokémon whose second type is "flying"
//TODO a count of the number of pokémon that are "normal" type
//TODO an array with all pokemon except the pokemon with the id of 148
//TODO an array with all pokemon and for pokemon id: 35 replacing "normal" with "fairy"