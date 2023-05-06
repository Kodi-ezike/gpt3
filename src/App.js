import React from "react";
import "./App.css";
import { ScrollManager } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./containers/home/Home";
import BlogPage from "./containers/blog/BlogPage";

const App = () => {
  return (
    <div className="App">
      <Router>
        <ScrollManager>
          <Routes>
            <Route path="/" element={<Home />} />

            {/* <Route path="/#whatgpt3" element={<WhatGPT3 />} />
            <Route path="/#possibility" element={<Possibility />} />
            <Route path="/#features" element={<Features />} />
            <Route path="/#blog" element={<Blog />} />
            <Route path="/#contact" element={<Footer />} /> */}

            <Route path="/BlogPage" element={<BlogPage />} />
          </Routes>
        </ScrollManager>
      </Router>
    </div>
  );
};

export default App;
