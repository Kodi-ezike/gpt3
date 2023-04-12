import React from "react";
import Feature from "../../components/feature/Feature";
import "./features.css";

const featuresData = [
  {
    title:'Improving end distrusts instantly ',
    text:'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.'
  },
  {
    title:'Improving end distrusts instantly ',
    text:'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.'
  },
  {
    title:'Improving end distrusts instantly ',
    text:'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.'
  },
  {
    title:'Improving end distrusts instantly ',
    text:'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.'
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
