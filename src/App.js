import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Todo from './components/Todo';
import ShoppingCart from './components/ShoppingCart';
import Api from './components/Api';

function App() {
  return (
    <Router>   
     <Routes>
      <Route  path="/" element={<Home/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/Contact" element={<Contact/>} />
      <Route path="/Todo" element={<Todo/>} />
      <Route path="/ShoppingCart" element={<ShoppingCart/>} />
      <Route path="/Api" element={<Api/>} />
    </Routes>
    </Router>

  );
}

export default App;
