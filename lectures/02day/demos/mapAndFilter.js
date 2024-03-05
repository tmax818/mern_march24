//! CALLBACKS


//! MAP

const numbers = [1,2,3,4,5]

const students = ['dennis', 'tyler', 'jesse', 'binyam']

// const capStudenfunc = student => student.toUpperCase()

// console.log(capStudenfunc("christian"))

// const Capstudents = students.map((student, i) => student.toUpperCase())

// console.log(Capstudents)

// let squareCB = num => num * num 

// console.log(squareCB(5))

// let squarNums = numbers.map(squareCB)

// squarNums = numbers.map(num => num*num)

// console.log(squarNums)



//!FILTER

//const numbers = [1,2,3,4,5]

const evenNums = numbers.filter(number => number % 2 === 0 )
const oddsNums = numbers.filter(number => number % 2 !== 0 )

console.log(evenNums)
console.log(oddsNums)