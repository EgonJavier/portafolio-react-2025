import React from 'react'
import './Tech.css';
import JavaScript from './Techs/js.png';
import ReactJS from './Techs/react.png';
import Html from './Techs/html.png';
import Css from './Techs/css.png';
import Flutter from './Techs/flutter.png';
import Figma from './Techs/figma.png';

export const Techs = () => {
  return (
    <section className='techs'>
      <div className='JS'>
        <img className='JavaScript' alt='JavaScript' src={JavaScript}/>
        <h2 className='techText'>JavaScript</h2>
      </div>
      <div className='RJ'>
      <img className='ReactJS' alt='ReactJS' src={ReactJS}/>
      <h2 className='techText'>React</h2>
      </div>
      <div className='H'>
      <img className='Html' alt='Html' src={Html}/> 
      <h2 className='techText'>Html</h2>
      </div>
      <div className='C'>
      <img className='Css' alt='Css' src={Css}/>
      <h2 className='techText'>Css</h2>
      </div>
      <div className='Fl'>
      <img className='Flutter' alt='Flutter' src={Flutter}/>
      <h2 className='techText'>Flutter</h2>
      </div>
      <div className='Fg'>
      <img className='Figma' alt='Figma' src={Figma}/>
      <h2 className='techText'>Figma</h2>
      </div>     
    </section>
  )
}
