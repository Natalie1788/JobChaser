import './App.css'
import React, { useState } from 'react';
import SearchInput from './components/SearchInput'
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route, Navigate, Link, Outlet } from 'react-router-dom';
import Homepage from './components/Homepage';
import About from './components/About';
import Contact from './components/Contact';
import Signup from './components/Signup';



function App() {
  
  const [filteredJobs, setFilteredJobs] = useState([]);

  return (
<BrowserRouter>
   
    <Navbar/>

    <Routes>
    
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />}/>
   
    </Routes>
           <SearchInput jobs={filteredJobs} setFilteredJobs={setFilteredJobs} />
  </BrowserRouter>
  )
}

export default App
