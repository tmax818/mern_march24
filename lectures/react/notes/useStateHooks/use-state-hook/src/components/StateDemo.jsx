import {useState} from 'react'

const StateDemo = (props) => {


    console.log(props)

    // props.message = "I have changed!!"
    const [display, setDisplay] = useState(props.data.message)
    const [count, setCount] = useState(props.data.number)
  return (
    <div>StateDemo
        
        <input type="text" onChange={(e) => setDisplay(e.target.value)} />
        <p>
        display: {display}
        </p>

        <p>
            count: {count}
        </p>

        <button onClick={() => setCount(count + 1)}>up</button>
    </div>
  )
}

export default StateDemo