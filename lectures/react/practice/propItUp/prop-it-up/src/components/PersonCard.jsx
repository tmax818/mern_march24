const PersonCard = props => {

    return(
        <>
        <h1>{props.firstName} {props.lastName}</h1>
        <p>age: {props.age}</p>
        <p>hair: {props.hairColor}</p>
        </>
    )
}

export default PersonCard;