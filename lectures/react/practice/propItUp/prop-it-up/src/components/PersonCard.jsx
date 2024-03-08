import {useState} from 'react';

const PersonCard = props => {
    const [age, setAge] = useState(props.age)
    console.log(age)


    return(
        <>
        <h1>{props.firstName} {props.lastName}</h1>
        <p>age: {age}</p>
        <p>hair: {props.hairColor}</p>
        <button onClick={()=> setAge(prev => prev + 1)}>birthday</button>
        </>
    )
}

export default PersonCard;