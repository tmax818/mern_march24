// const sayHello = name => console.log(`Hello ${name}`);


// const square = n => n * n;


// const funcObj = {
//     name: "Tyler",
//     theFunc: function(){console.log(this)}
// }

// const arrowObj = {
//     name: "John",
//     theFunc: () => console.log(this)

// }




// //? implicit

// const impfunc = p => p

// const func =  p => ({name: p});

// console.log(impfunc("hello"))
// console.log(func("test"))

// //? explicit

// const expfunc = p => {
//     return p;
// }

// const func2 = p => {
//     return ({name: p});
// }
// console.log(expfunc("hello"))
// console.log(func2("Tyler"))


//? THIS


function f(){
    console.log("this in fd",this);
}

const f2 = () => {
    console.log("this in arrow", this);
}

f()
f2()

console.log("this is this", this)