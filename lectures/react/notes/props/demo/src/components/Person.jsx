const Person = ({person}) => {
    // console.log(props)
    const {firstName,lastName} = person
    const {name, breed, toys} = person.pet
    console.log(person)

    return (
       <div>
        <p>{firstName}</p>
        <p>{lastName}</p>
        <p>{name}</p>
        <p>{breed}</p>
        {toys.map((toy, i) => {
            return(
                <p key={i}>{toy}</p>
            )
        })}
       </div>
      )
  }
  export default Person;
  