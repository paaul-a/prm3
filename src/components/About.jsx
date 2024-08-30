

import React, { useEffect, useState } from 'react';
import '../index.css'; // Ensure your CSS file is imported
import myPhoto from '../img/4T8A1138 copy-2 copy 2.jpg'
import email from '../img/ig.png'

const About = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <>
      <div className={`about-text ${visible ? 'visible' : ''}`}>

        <div className='about-details'>
          <h3>
            Mason is an Atlanta-based web developer,
            working in frontend and fullstack development implementing
            3D animation, design and user accessibility.
          </h3>
          <p className='contact'>
            <a href="mailto:paaula.mason@gmail.com" className="contact-link">
              contact
            </a>
          </p>
        </div>
        <img
          src={myPhoto}
          alt="Headshot of Mason"
          className='headshot'
          width="300" // optional, adjust as needed
          height="100%" // optional, adjust as needed
        />


      </div>
    </>
  );
};

export default About;
