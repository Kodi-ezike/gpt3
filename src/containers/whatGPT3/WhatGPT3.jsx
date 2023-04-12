import React from "react";
import Feature from "../../components/feature/Feature";
import "./whatGPT3.css";

const WhatGPT3 = () => {
  return (
    <div className="gpt3_whatgpt3 section_margin" id="whatgpt3">
      <div className="gpt3_whatgpt3-feature">
        <Feature
          title="What is GPT-3"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
        />
      </div>
      <div className="gpt3_whatgpt3-heading">
        <h2 className="gpt3_whatgpt3-heading-text gradient_text">
          The possibilities are beyond your imagination
        </h2>
        <a href="#library">Explore The Library</a>
      </div>
      <div className="gpt3_whatgpt3-container">
        <div className="gpt3_whatgpt3-feature-container">
          <Feature
            title="Chatbots"
            text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
          />
        </div>
        <div className="gpt3_whatgpt3-feature-container">
          <Feature
            title="Knowledgebase"
            text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments."
          />
        </div>
        <div className="gpt3_whatgpt3-feature-container">
          <Feature
            title="Education"
            text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments."
          />
        </div>
      </div>
    </div>
  );
};

export default WhatGPT3;
