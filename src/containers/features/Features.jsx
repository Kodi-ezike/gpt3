import React from "react";
import Feature from "../../components/feature/Feature";
import "./features.css";

const featuresData = [
  {
    title:'Human-like Text',
    text:"Create text that seems human with ChatGPT, users interacting with the AI won't be able to tell if a human or AI is doing it."
    
  },
  {
    title:'Interactive Responses',
    text:'It can produce responses in real time because it uses the Human Feedback model and Reinforcement Learning.'
  },
  {
    title:'Translation of Texts',
    text:'ChatGPT can be used to translate text between languages thanks to the rapidly advancing technology.'
  },
  {
    title:'Personalized Content',
    text:'It can offer precise and personalized responses to a user, increasing user engagement and conversion rates for organizations.'
  },
]

const Features = () => {
  return (
    <div className="gpt3_features section_padding" id="features">
      <div className="gpt3_features-heading">
        <h2 className="gradient_text">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h2>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3_features-container">
        {featuresData.map((item, index) => (
          <div className="features-item"><Feature title={item.title} text={item.text} key={item.title + index}/></div>
          
        ))}
      </div>
    </div>
  );
};

export default Features;
