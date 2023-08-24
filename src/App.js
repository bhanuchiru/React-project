// import logo from './logo.svg';
import './App.css';
import About from './component/About';
import Home from './component/Home';
import React from 'react';
import Work from './component/Work';
import Testimonial from './component/Testimonial';
import Contact from './component/Contact';
import Footer from './component/Footer';


function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Work />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
