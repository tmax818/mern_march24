

//? REST

function add(a, b){
    return a + b
}

console.log(add(2,3))

function betterAdd(...args){
    console.log(args)
    let sum = 0;
    for(let i = 0; i < args.length; i++){
        sum += args[i];
    }

    return sum;
}

console.log(betterAdd(1,2,3,4))

//? SPREAD

const arr = [1,2,3,4,5,6]

const [first, second, ...sp] = arr;


