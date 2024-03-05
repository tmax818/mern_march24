const func1 = () => null;
console.log(func1())

const func2 = () => {null};
console.log(func2())

const func3 = () => {
    return [1,2,3,4]
}
console.log(func3())

const func4 = () => {
    return () => 5;
}
console.log(func4())
console.log(func4()())

const func5 = par => {
    return par;
}
console.log(func5(func4));
console.log(func5(func4)());
console.log(func5(func4)()());