import React, { useState } from 'react';
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Navbar from "./components/Navbar.js";
import Projects from "./components/Projects.js";
import Footer from "./components/Footer.js";
import Head from './components/Head.js';
 // import "./App.css"; //


function App() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />
    }
    if (currentPage === 'Portfolio') {
      return <Projects />
    }
    if (currentPage === 'Contact') {
      return <Contact />
    }
    
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Head />
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer /> 
    </div>
  );
}

export default App;
