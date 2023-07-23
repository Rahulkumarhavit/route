import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import List from './Component/List';

//const App = () => {
  function App(){
  return (
    <div>
      
      <List>ifhweifewifewi</List>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
          </div>
  );
};

export default App;
