

const promiseResolve = new Promise((resolve, reject) => {
    resolve({title: "meatloaf", description: "slab of meat"});
})

const promiseRejected = new Promise((resolve, reject) => {
    reject("Nope, sorry");
})

promiseResolve
.then(
    fulfilled => console.log("fulfilled: ", fulfilled)
    )
.catch(e => console.log("error", e))

promiseRejected
.then(
    fulfilled => console.log("fulfilled: ", fulfilled)
    )
.catch(e => console.log("error: ", e))
