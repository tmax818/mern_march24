import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom';
import Table from 'react-bootstrap/Table';

import axios from 'axios';
const Home = () => {
  const [books, setBooks] = useState([]);


  useEffect(() => {
    axios.get("http://localhost:8000/api/books")
      .then((res) => {
        console.log(res.data);
        setBooks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])

  return (
    <div>
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Author</th>
          <th>Pages</th>
          <th>Available</th>
          <th>Page</th>
        </tr>
      </thead>
      <tbody>

        {books.map((book, i) => {
          return ( 
        <tr>
          <td>{i}</td>
          <td>{book.title}</td>
          <td>{book.author}</td>
          <td>{book.pages}</td>
          <td>{book.isAvailable ? "yes": "no"}</td>
          <td>
          <Link to={`/books/${book._id}/details`}> view:  {book.title}</Link>
          </td>
        </tr>
          )
        })}
      </tbody>
    </Table>

    <Link to={"/books/new"}>new Book</Link>
    </div>
  )
}

export default Home;