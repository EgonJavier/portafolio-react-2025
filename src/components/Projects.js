import React from 'react'
import './Projects.css';
import Scripts from './Projects/Scripts.png';
import Consulta from './Projects/Consulta.png';
import Anya from './Projects/anyagestor.png';

export const Projects = () => {
  return (
    <div className='Projects'>
      <h1 className='Projectstitle'>Proyectos</h1>
      <div className='Projectcontainer'> 
        <div className='Project'>
          <img className="ImageProject" alt='Scripts' src={Scripts} />
          <div className='Projectinfo'>
              <h2 className='Projecttitle'>E.V.E 01/E.V.E 03</h2>
              <h3 className='Projectsubt'>Scripts para AfterEffects</h3>
              <p className='ptec'>ExtendScript</p>
              <p className='pfProjectinfo'>Desarrolle estos scripts para after effects, los cuales se integran con la interfaz de AfterEffects a modo de paneles.<br/><br/>
                  E.V.E 01 es un script el cual inyecta expresiones en diferentes propiedades de una capa.<br/><br/>
                  E.V.E 02 por su parte es un script creado para avanzar en la linea de tiempo una cantidad especifica de frames.<br/><br/>
                  Ambos codigos fueron creados en ExtendScript, lenguaje el cual esta basado en JavaScript.<br/><br/>
                  2020</p>
                  <div className='pbuttons'>
                    <a href='www.gumroad.com' className='pgumroad'>gumroad</a>
                    <a href='www.github.com' className='pgithub'>github</a>
                  </div>
          </div>
        </div> 
      </div>
      <div className='Projectcontainer'>
        <div className='Project'>
        <img className="ImageProject" alt='Consulta' src={Consulta} />
          <div className='Projectinfo'>
              <h2 className='Projecttitle'>Consulta Precios</h2>
              <h3 className='Projectsubt'>Versión Móvil y Pantalla de verificación de precios</h3>
              <p className='ptec'>Capacitor</p>
              <p className='ptec'>HTML, CSS, JavaScript</p>
              <p className='ptec'>UI / UX</p>
              <p className='pfProjectinfo'>Esta es una aplicación web progresiva(PWA) creada utilizando Capacitor como herramienta para personal del mundo Retail.<br/><br/>
                  Gracias a la integración de la libreria quaggajs podemos transformar nuestro celular en un consulta precios,
                  escaneando codigos de barra con la camara de nuestro celular.<br/><br/>
                  Además usé la libreria Text-to-Speech, gracias a la cual la version de pantalla anclada es capaz de leer los precios en voz alta,
                  ademas de destacar si el producto esta en promoción.<br/><br/>
                  2024</p>
                  <div className='pbuttons'>
                    <a href='www.gumroad.com' className='pgumroad'>gumroad</a>
                    <a href='www.github.com' className='pgithub'>github</a>
                  </div>
          </div>
        </div>
        </div>
        <div className='Projectcontainer'> 
        <div className='Project'>
          <img className="ImageProject" alt='Anya' src={Anya} />
          <div className='Projectinfo'>
              <h2 className='Projecttitle'>Anyagestor</h2>
              <h3 className='Projectsubt'>Gestor de Inventario</h3>
              <p className='ptec'>Flutter</p>
              <p className='ptec'>Dart</p>
              <p className='ptec'>UI / UX</p>
              <p className='ptec'>Supabase</p>
              <p className='pfProjectinfo2'>Anyagestor, es una aplicación pensada para mejorar la gestión en almacenes, supermercados,
                  tiendas y negocios de retail, optimizando tareas diarias dentro de estos mismos.<br/><br/>
                  La aplicación se desarrolla en Flutter, con el lenguaje de programación Dart.<br/><br/>
                  Sistema de registro por cargo, lo cual permite que cada cargo tenga sus propias funciones.<br/><br/>
                  La app cuenta con una base de datos en Supabase en la cual se le pueden agregar productos n de hacer inventarios,
                  notificar anomalias de los mismos y llevar control sobre los mismos.<br/><br/>
                  2025</p>
                  <div className='pbuttons'>
                    <a href='www.gumroad.com' className='pgumroad'>gumroad</a>
                    <a href='www.github.com' className='pgithub'>github</a>
                  </div>
          </div>
        </div> 
      </div>
    </div>
  )
}
