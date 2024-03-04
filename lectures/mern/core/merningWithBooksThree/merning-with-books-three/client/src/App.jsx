import {BrowserRouter, Routes, Route} from 'react-router-dom';

import React from 'react'
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './views/Home'
import BookDetails from './views/BookDetails';
import BookForm from './views/BookForm';

  
const App = () => {
  return (
    <Container>
      <BrowserRouter>
         <Header/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/:id/details" element={ <BookDetails /> }/>
      <Route path="/books/new" element={ <BookForm /> }/>
      <Route path="/books/:id/edit" element={ <BookForm /> }/>
      </Routes>
      </BrowserRouter>
    </Container>
  )
}

export default App;