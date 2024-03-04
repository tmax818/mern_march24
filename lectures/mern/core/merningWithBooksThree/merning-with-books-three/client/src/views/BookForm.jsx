import {useState, useEffect} from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

import axios from 'axios';

const BookForm = () => {
    const [newBook, setNewBook] = useState({title: "", author: "", pages: 0, isAvailable: false});
    const navigate = useNavigate();
    const {state} = useLocation()
    console.log("state: ",state)

    useEffect(()=> {
      console.log("there's state")
      if(state){setNewBook(prev => ({...state}))}
  
    }, [])


    const handleSubmit = e => {
        e.preventDefault();
        if(state){
          axios.put(`http://localhost:8000/api/books/${state._id}`, {...newBook})
          .then(res => {
              console.log(res);
              console.log(res.data);
              navigate("/")
          })
        } else {

          axios.post("http://localhost:8000/api/books", {...newBook})
          .then(res => {
            console.log(res);
            console.log(res.data);
            navigate("/")
          })
        }
    }
  return (

 
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>title</Form.Label>
        <Form.Control type="text" onChange={(e) => setNewBook(prev => ({...prev, title: e.target.value}))} value={newBook.title} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>author</Form.Label>
        <Form.Control type="text" onChange={(e) => setNewBook(prev => ({...prev, author: e.target.value}))} value={newBook.author} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>pages</Form.Label>
        <Form.Control type="number" onChange={(e) => setNewBook(prev => ({...prev, pages: e.target.value}))} value={newBook.pages} />
      </Form.Group>

      <Form.Group>
      <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        label="available"
        onChange={(e) => setNewBook(prev => ({...prev, isAvailable: !prev.isAvailable}))} 
        />
        </Form.Group>



        <input type="submit" value="add or edit book" />

    </Form>

  )
}

export default BookForm;