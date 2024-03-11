const fs = require('node:fs');


//!A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.


const myPromise = new Promise((res, rej) => {
    
    const data = fs.readFile('./data.jso', 'utf-8', (e, d) => {
        if(d) {res(d)} else {rej(e)}
    })


});
myPromise.then(p => console.log(p))
myPromise.catch(e => console.error(e.message))
myPromise.finally(console.log("I run no matter what"))