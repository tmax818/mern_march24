
//! Array destructuring

// const students = ["Dennis", "Tyler", "Vitoria", "Z"]

// let student = students[2]
// console.log(student)

// const [student1, ,student2, student3 ] = students
// console.log(student1)
// console.log(student2)
// console.log(student3)


//! Object destructuring

// const firstName = person['first']
// console.log(firstName)


// const {first: givenName} = person
// console.log(givenName)

// const {name, status, species} = whatever






//! Nested destructuring

const rasta_person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
      {
        address: '1600 Pennsylvania Avenue',
        city: 'Washington, D.C.',
        zipcode: '20500',
      },
      {
        address: '221B Baker St.',
        city: 'London',
        zipcode: 'WC2N 5DU',
      }
    ],
    createdAt: 1543945177623
  };
  
  const {addresses: [obj]} = rasta_person
  console.log(obj)
  
  //! Deep and Shallow Copies
  
  const person1 = {first: "Tyler", last: "Maxwell", hobbies: []}
  const person2 = {...person1, hobbies: []}

person2.first = "Christian"
person2 

// person1.hobbies.push("coding")
// person2.hobbies.push("ice skating")


// console.log(person1)
// console.log(person2)


  
  
