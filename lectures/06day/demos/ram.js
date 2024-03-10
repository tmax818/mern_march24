

const BASE_URL = "https://rickandmortyapi.com/api"

const ramData = fetch(BASE_URL + '/character')


ramData
.then(p => p.json())
.then(p => console.log(p))



