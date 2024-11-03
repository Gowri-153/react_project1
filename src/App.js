import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Login from './Login';
import Signup from './Signup'; // Import Signup component
import Products from './Products';
import Services from './Services';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import DrawerComp from './DrawerComp'; // Import DrawerComp


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Manage login state

  return (
    <Router>
      {!isLoggedIn ? ( // Show Login component without Navbar if not logged in
        <Routes>
          <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        </Routes>
      ) : ( 
        <>
        <DrawerComp setIsLoggedIn={setIsLoggedIn} />
          <Navbar setIsLoggedIn={setIsLoggedIn} />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<Signup />} /> {/* Add Signup route */}
          </Routes>
        </>
      )}
    </Router>
  );
};

export default App;
