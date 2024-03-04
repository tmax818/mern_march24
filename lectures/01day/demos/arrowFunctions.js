
//? implicit

const impFunc = p => console.log(`hello ${p}`)

const double = p => p*2;

impFunc("Vitoria")
console.log(double(9))

const retMyObj = () => {name: "Tyler"};
const retMyObjimp = () => ({name: "Tyler"});

console.log(retMyObj())

//? explicit

expDouble = p => {
    return p * 2
}

const cb = (n) => n*n 

[1,2,3,4].map(cb)

(() => {console.log("iffee")})();

console.log(expDouble(8))

const expObjRet = () => {
    return ({name: "Tyler"})
}

console.log("what is this", expObjRet())