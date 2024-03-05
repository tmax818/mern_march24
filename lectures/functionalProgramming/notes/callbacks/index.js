// const func1 = () => null;
// console.log(func1())

// const func2 = () => {null};
// console.log(func2())

// const func3 = () => {
//     return [1,2,3,4]
// }
// console.log(func3())

// const func4 = () => {
//     return () => 5;
// }
// console.log(func4())
// console.log(func4()())

// const func5 = par => {
//     return par;
// }
// console.log(func5(func4));
// console.log(func5(func4)());
// console.log(func5(func4)()());

//! CALLBACKS

const cb = n => n*n;

const arr = [1,2,3,4]
const students = ["Oriel", "Austin", "Peter"]

const squareArr = arr.map(n => {
    return n*n
});

const isEvenCB = n => n % 2 === 0;

const evens = arr.filter(isEvenCB);

students.forEach(student => console.log(`${student} is my favorite student!`))

console.log(squareArr)
console.log(evens)