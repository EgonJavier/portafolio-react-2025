import React from 'react'
import './Presentation.css';

export const Presentation = () => {
  return (
    <div className="container">
    <div className="content">
      <div>
        <h1 className="name">Javier Oyarzún</h1>
        <h5 className="title">Desarrollador de Software</h5>
      </div>
      <div className="buttons">
        <a className="email" href="mailto:javieregon@outlook.com">javieregon@outlook.com</a>
        <a className="cv" href="https://github.com/EgonJavier">CV</a>
        <a className="github" href="https://github.com/EgonJavier">GitHub</a>
      </div>
    </div>
    <img className="Portrait" alt='Portrait' src='https://i.pinimg.com/736x/05/d6/6b/05d66b0be22dc80463dff27174911f1b.jpg' />
  </div>
)
}
