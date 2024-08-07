import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Men from './pages/Men';
import Women from './pages/Women';
import Kids from './pages/Kids';
import Cart from './pages/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ScrollToTop from './components/Scroll';
import { CartProvider } from './context/cartcontext'; // Import the CartProvider
function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
          <Route path="kids" element={<Kids />} />
          <Route path="cart" element={<Cart />} />
          </Route>
          
        </Routes>
      </BrowserRouter>
      </CartProvider>  
    
  );
}

export default App;
