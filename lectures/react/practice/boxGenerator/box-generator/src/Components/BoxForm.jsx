import {useState} from 'react'

function BoxForm(props) {

    const [box, setBox] = useState({color: ""});

    const handleSubmit = e => {
        e.preventDefault()
        props.addBox(box)
        setBox({color: ""})
    }



  return (
    <>
    <h1>Box Generator</h1>

    <form onSubmit={handleSubmit}>
        Color: <input type="text" onChange={e => setBox({color: e.target.value})} value={box.color} />

        <input type="submit" value="add" />
    </form>
    </>
  )
}

export default BoxForm