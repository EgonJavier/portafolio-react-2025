import React from 'react'
import './Presentacion.css';

export const Presentacion = () => {
  return (
    <div className="container">
    <div className="content">
      <div>
        <h1 className="name">Javier Oyarzún</h1>
        <h5 className="tittle">Desarrollador de Software</h5>
      </div>
      <div className="buttons">
        <a className="email" href="mailto:javieregon@outlook.com">Correo</a>
        <a className="cv" href="#">CV</a>
        <a className="github" href="https://github.com/EgonJavier">GitHub</a>
      </div>
    </div>
    <img className="Portrait" alt='Portrait' src='https://i.pinimg.com/736x/05/d6/6b/05d66b0be22dc80463dff27174911f1b.jpg' />
  </div>
);
};
