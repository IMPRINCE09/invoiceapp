import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Pages/Header/Navbar";
import Footer from "./Components/Pages/Footer/Footer";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Blog from "./Components/Blog";
import Allprojects from "./Components/Allprojects";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/allproject" element={<Allprojects />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
