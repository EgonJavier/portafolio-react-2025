import React from 'react'
import './Presentation.css';
import IconCV from './Icons/IconCV.png';
import IconGithub from './Icons/IconGithub.png';
import IconLinked from './Icons/IconLinkedin.png';
import IconMail from './Icons/IconMail.png';

export const Presentation = () => {
  return (
    <div className="container">
    <div className="content">
      <div>
        <h1 className="name">Javier Oyarzún</h1>
        <h5 className="title">Desarrollador de Software</h5>
      </div>
      <div className="buttons">
        <a className="email" href="mailto:javieregon@outlook.com">
        <img alt='IconMail' src={IconMail}/>
          javieregon@outlook.com</a>
        <a className="cv" href="mailto:javieregon@outlook.com">
          <img alt='IconCV' src={IconCV}/>
        </a>
        <a className="github" href="https://github.com/EgonJavier">
          <img alt='IconGithub' src={IconGithub}/>
        </a>
        <a className="linkedin" href="https://www.linkedin.com/in/javier-egon-oyarzun-apablaza-19b3a1356/">
          <img alt='IconLinkedin' src={IconLinked}/>
        </a>
      </div>
    </div>
    <img className="Portrait" alt='Portrait' src='https://i.pinimg.com/736x/05/d6/6b/05d66b0be22dc80463dff27174911f1b.jpg' />
  </div>
)
}
