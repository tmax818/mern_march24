

const promiseRejected = new Promise((resolve, rejects) => {

    rejects("something went wrong")
})

console.log(promiseRejected.then(data => console.log(data)).catch(err => console.log(err)))