import { useNavigate } from "react-router-dom"
import { deleteOneThing } from "../services/ThingService"


const DeleteButton = ({ thing }) => {


    const navigate = useNavigate()

    const deleteThing = (thingId) => {
        // axios.delete(`http://localhost:8000/api/things/${thingId}`)
            deleteOneThing(thingId)
            .then(res => {
                navigate("/things")
            })
    }
    return (
        <div>
            <button onClick={() => deleteThing(thing._id)} className="btn btn-danger">delete</button>
        </div>
    )
}

export default DeleteButton