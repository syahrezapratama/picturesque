import React from 'react';
// Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Components
import Navbar from './components/Navbar';
import Home from './components/Home';
import Image from './components/Image';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/:imageId' element={<Image />} />
      </Routes>
    </Router>
  );
}

export default App;
