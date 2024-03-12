import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Survey = () => {
    const [formData, setFormData] = useState({name: "", comment: ""})
    console.log(formData)
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault()
        navigate("/")
    }

    const handleChange = e => {
        setFormData(prev => ({...prev, [e.target.name]: e.target.value}))
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                Name: <input className="form-control"  type="text" name="name" value={formData.name} onChange={handleChange}/>
            </div>
            <div className="form-group">
                comments: <input className="form-control" type="text" name="comment" value={formData.comment} onChange={handleChange}/>
            </div>

            <input type="submit" value="submit" />
        </form>
        

    </div>
  )
}

export default Survey