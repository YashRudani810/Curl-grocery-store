import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Product from "./components/Product";
import ContactUs from "./components/ContactUs";
import Blog from "./components/Blog";
import { Cart } from "./components/Cart";


function App() {
  return (
    <>
     <BrowserRouter>
      
      <Routes>
        <Route exact path="/" element={<HomePage />}/>
        <Route exact path="/Product" element={<Product />}/>
        <Route exact path="/Contect" element={<ContactUs />}/>
        <Route exact path="/Blog" element={<Blog />}/>
        <Route exact path="/Cart" element={<Cart />}/>
          
       
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
