import React from 'react';
import './possibility.css';
import possibilityImage from '../../assets/possibilityImage.png'
const Possibility = () => {
  return (
    <div className='gpt3_possibility section_padding'>
      <div className='gpt3_possibility-image'>
        <img className='possibility-image' src={possibilityImage} alt="possibilityImage" />
      </div>
      <div className='gpt3_possibility-content'>
        <h2 className='gradient_text'>The possibilities are beyond your imagination</h2>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
};

export default Possibility;