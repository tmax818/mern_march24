import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import NotFound from './components/NotFound';
import LandingPage from './components/LandingPage';
import DisplayBoardGames from './components/DisplayBoardGames';
import DisplayDinosaurs from './components/DisplayDinosaurs';

function App() {

  const data = ["item1", 42]

  return (
    <>
<BrowserRouter>
  <Header data={data} />
  <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dinosaurs" element={<DisplayDinosaurs />} />
      <Route path="/boardgames" element={<DisplayBoardGames />}  />
      <Route path="*" element={<NotFound />} /> 

  </Routes>
  <Footer />
</BrowserRouter>
    </>
  )
}

export default App
