import './App.css';
import { About } from './components/About.js';
import { Presentation } from './components/Presentation.js';
import { Projects } from './components/Projects.js';
import { Techs } from './components/Techs.js';
import { Footer } from './components/Footer.js';

function App() {
  return (
    <div className="Portf">
      <body className='Portf-body'>
        <div className='Portf-Presentation'>
        <Presentation></Presentation>
        </div>
        <div className='Portf-About'>
        <About></About>
        </div>
        <div className='Portf-Techs'>
        <Techs></Techs>
        </div>
        <div className='Port-Projects'>
          <Projects></Projects>
        </div>
        <div className='Port-footer'>
          <Footer></Footer>
        </div>
      </body>
    </div>
  );
}

export default App;
