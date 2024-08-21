

import React, { useEffect, useState } from 'react';
import '../index.css'; // Ensure your CSS file is imported
import myPhoto from '../img/4T8A1138 copy 3.jpg'
import email from '../img/ig.png'

const About = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <>
      <div className={`about-text ${visible ? 'visible' : ''}`}>
      <img
          src={myPhoto}
          alt="Headshot of Mason"
          className='headshot'
          width="300" // optional, adjust as needed
          height="auto" // optional, adjust as needed
        />
        <div className='about-details'>
        <p>
          Mason is an Atlanta-based web developer,
          working in frontend and fullstack development implementing
          3D animation, design and user accessibility.
        </p>
        <p>
          contact
        </p>
        </div>
       

      </div>
    </>
  );
};

export default About;
