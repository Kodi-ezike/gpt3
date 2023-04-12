import React from 'react';
import './possibility.css';
import possibilityImage from '../../assets/possibilityImage.png'
const Possibility = () => {
  return (
    <div className='gpt3_possibility section_padding' id='possibility'>
      <div className='gpt3_possibility-image'>
        <img className='possibility-image' src={possibilityImage} alt="possibilityImage" />
      </div>
      <div className='gpt3_possibility-content'>
        <h2 className='gradient_text'>The possibilities are beyond your imagination</h2>
        <p>ChatGPT is a still-evolving AI technology with its robust and flexible Natural Language Processing tool that has the potential to revolutionize the way we interact with technology. With regular updates, it can be improved in areas lacking as there is ongoing research and development which is happening in the field of Natural Language Processing, and it is likely to continue to improve the capabilities and performance of these mods.</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
};

export default Possibility;
