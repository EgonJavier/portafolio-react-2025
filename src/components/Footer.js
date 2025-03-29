import React from 'react'
import './Footer.css';
import IconCV from './Icons/IconCV.png';
import IconGithub from './Icons/IconGithub.png';
import IconLinked from './Icons/IconLinkedin.png';
import IconMail from './Icons/IconMail.png';

export const Footer = () => {
  return (
    
      <div className="buttons2">
        <a className="email2" href="mailto:javieregon@outlook.com">
        <img alt='IconMail' src={IconMail}/>
          javieregon@outlook.com</a>
        <a className="cv2" href="mailto:javieregon@outlook.com">
          <img alt='IconCV' src={IconCV}/>
        </a>
        <a className="github2" href="https://github.com/EgonJavier">
          <img alt='IconGithub' src={IconGithub}/>
        </a>
        <a className="linkedin2" href="https://www.linkedin.com/in/javier-egon-oyarzun-apablaza-19b3a1356/">
          <img alt='IconLinkedin' src={IconLinked}/>
        </a>
      </div>
)
}