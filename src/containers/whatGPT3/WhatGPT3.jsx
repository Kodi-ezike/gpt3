import React from "react";
import Feature from "../../components/feature/Feature";
import "./whatGPT3.css";

const WhatGPT3 = () => {
  return (
    <div className="gpt3_whatgpt3 section_margin" id="whatgpt3">
      <div className="gpt3_whatgpt3-feature">
        <Feature
          title="What is GPT-3"
          text="Generative Transformer 3 (GPT-3) is a pre-trained autoregressive language model that was published in 2020 and employs deep learning to generate text that resembles human speech. It will produce text that answers questions when provided a cue. It can be challenging to tell whether or not a human was the author of the content produced by GPT-3 because of its exceptionally excellent writing quality.
          ."
        />
      </div>
      <div className="gpt3_whatgpt3-heading">
        <h2 className="gpt3_whatgpt3-heading-text gradient_text">
          The possibilities are beyond your imagination
        </h2>
        <a href="#blog">Explore The Library</a>
      </div>
      <div className="gpt3_whatgpt3-container">
        <div className="gpt3_whatgpt3-feature-container">
          <Feature
            title="Chatbots"
            text="It allows you to have human-like conversations and much more with the chatbot."
          />
        </div>
        <div className="gpt3_whatgpt3-feature-container">
          <Feature
            title="Knowledgebase"
            text="It gives you the information you need to carry out tasks more effectively and quickly."
          />
        </div>
        <div className="gpt3_whatgpt3-feature-container">
          <Feature
            title="Education"
            text="ChatGPT is a helpful tool to teach students effectively and explain difficult concepts.
            "
          />
        </div>
      </div>
    </div>
  );
};

export default WhatGPT3;
