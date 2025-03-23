import React from 'react'
import './Projects.css';

export const Projects = () => {
  return (
    <div>
      <h1 className='Projectstitle'>Proyectos</h1>
      <div className='Projectcontainer'> 
        <div className='Project1'>
          <img className="Portrait" alt='Portrait' src='https://i.pinimg.com/736x/05/d6/6b/05d66b0be22dc80463dff27174911f1b.jpg' />
          <div className='Projectinfo1'>
              <h2 className='Project1title'>E.V.E 01/E.V.E 03</h2>
              <h3 className='Project2subt'>Scripts para AfterEffects</h3>
              <p className='p1tec'>ExtendScript</p>
              <p className='pfProjectinfo1'>Desarrolle estos scripts para after effects, los cuales se integran con la interfaz de AfterEffects a modo de paneles.<br/><br/>
                  E.V.E 01 es un script el cual inyecta expresiones en diferentes propiedades de una capa.<br/><br/>
                  E.V.E 02 por su parte es un script creado para avanzar en la linea de tiempo una cantidad especifica de frames.<br/><br/>
                  Ambos codigos fueron creados en ExtendScript, lenguaje el cual esta basado en JavaScript.<br/><br/>
                  2020</p>
                  <div className='p1buttons'>
                    <a href='www.gumroad.com' className='p1gumroad'>gumroad</a>
                    <a href='www.github.com' className='p1github'>github</a>
                  </div>
          </div>
        </div>
      </div>
    </div>
  )
}
