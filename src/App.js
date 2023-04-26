import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './pages/Footer';
import "./App.css";

function App() {

  return (
    <div className='app'>
      <Router>
        <Navbar />
        <div className='main'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </div>
  )
}

export default App
