import React from "react";
import { Brand, CTA, Navbar } from "../../components";
import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  WhatGPT3,
} from "../../containers";
const Home = () => {
  return (
    <div>
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default Home;
