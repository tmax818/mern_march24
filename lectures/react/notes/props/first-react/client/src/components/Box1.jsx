
const Box1 = (props) => {
    console.log("this is props",props)

    return(
        <div style={props.theStyle}>
        {props.theStyle.text}
        </div>

    )
}

export default Box1;