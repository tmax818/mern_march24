import {useState, useEffect} from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const BookDetails = () => {
    const [book, setBook] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();
    console.log(id)

    useEffect(() =>{
        axios.get(`http://localhost:8000/api/books/${id}`)
            .then(res => {
                console.log(res.data);  
                setBook(res.data);
                console.log(book.name)
            })
            .catch((err) => {
                console.log(err);
            });
    }, [])

    const deleteBook = () => {
        axios.delete(`http://localhost:8000/api/books/${id}`)
            .then(res => {
                console.log(res.data);
                navigate("/")
            })
    }

  return (
    <Card>
      <Card.Header>{book.title}</Card.Header>
      <Card.Body>
        <Card.Title>{book.author}</Card.Title>
        <Card.Text>
            Available: {"   "}
          {book.isAvailable ? "yes" : "no"}
        </Card.Text>
        <Card.Text>
          pages: {book.pages}
 
        </Card.Text>
        <Button onClick={deleteBook} variant="danger">delete</Button>
      
        <Button onClick={() => navigate(`/books/${book._id}/edit`, {state: book})}>edit: {book.title}</Button>
      </Card.Body>
    </Card>
  )
}

export default BookDetails;