import {useState} from 'react'

const Counter = (props) => {
    console.log(props)
    const {start} = props
    const [state, setState] = useState(start)
  return (
    <div>
         <p>
  {state}

    </p>

  <button onClick={() => setState(prev => prev + 1)}>increase</button>
  <button onClick={() => setState(0)}>reset</button>
  <button onClick={() => setState(prev => prev - 1)}>decrease</button>
    </div>
  )
}

export default Counter