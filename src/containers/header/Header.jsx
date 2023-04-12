import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/Illustration.png";
const Header = () => {
  return (
    <div className="gpt3_header">
      <div className="gpt3_header-container">
        <div className="gpt3_header-content">
          <h1 className="gradient_text">
            Let's Build Something amazing with GPT3 OpenAI
          </h1>
          <p>
            The next generation of apps are powered by GPT-3. Through our API,
            more than 300 applications are providing advanced AI services like
            search, conversation, text completion, and more that are powered by
            GPT-3.
          </p>
        </div>
        <div className="gpt3_header-content-input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3_header-content-people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gpt3_header-image">
        <img src={ai} alt="Header-Illustration" />
      </div>
    </div>
  );
};

export default Header;
