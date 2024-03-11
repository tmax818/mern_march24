


const BASE_URL = "https://rickandmortyapi.com/api/character"

const data = fetch("https://rickandmortyapi.com/api/character")

console.log(data.then(data => data.json()).then(res => console.log(res)))