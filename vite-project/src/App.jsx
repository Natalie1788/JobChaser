import './App.css'
import React, { createContext, useState } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Homepage from './components/Homepage';
import About from './components/About';
import Contact from './components/Contact';
import Signup from './components/Signup';
import Signin from './components/Singin';
import { useContext } from 'react';
import { AuthContext } from './AuthContext';
import Joblist from "./components/Jobslist"
import { useTheme } from './components/ThemeContext';



function ProtectedRoute() {
  const authContext = useContext(AuthContext);
  const isAuthenticated = authContext && authContext.user !== null;
  console.log("isAuthenticated", isAuthenticated)
  return isAuthenticated ? <Outlet /> : <Navigate to="/signin" replace />;
}



function App() {
  const authContext = useContext(AuthContext);
  const isAuthenticated = authContext && authContext.user !== null;
 
  const {isDark} = useTheme()
  
  return (

<BrowserRouter>
<div className={`app ${isDark ? "dark" : "light"}`}>
    <Navbar/>
    <Routes>
    
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />}/>
        <Route path="/signin" element={<Signin />}/>
      <Route path="/joblist" element={<ProtectedRoute/>}>
                 <Route path="/joblist" element={<Joblist/>}/>
                 </Route>
                          
    </Routes>   
    </div>
  </BrowserRouter>

  )
}

export default App
