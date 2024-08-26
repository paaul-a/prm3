import React, { useEffect, useState } from 'react';
import '../index.css';

const Projects = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <>
      <div className={`project-div ${visible ? 'visible' : ''}`}>
      <a 
          href="https://github.com/paaul-a/Ratamovie"
          target="_blank" 
          rel="noopener noreferrer" 
          className="link-title"
        >
          RATAMOVIE
        </a>
        <p>
          Dec 2023 / Capstone / Developer
        </p>
        <a 
          href="https://github.com/paaul-a/odd-boy"
          target="_blank" 
          rel="noopener noreferrer" 
          className="link-title"
        >
          ODD-BOY
        </a>
        <p>
          April 2024 / Portfolio / Developer
        </p>
        <a 
          href="https://github.com/paaul-a/ECH"
          target="_blank" 
          rel="noopener noreferrer" 
          className="link-title"
        >
          ECH Immigration
        </a>
        <p>
          Feb 2024 / Business / Developer
        </p>


      </div>



    </>
  )
}

export default Projects