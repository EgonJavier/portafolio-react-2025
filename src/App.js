import './App.css';
import { About } from './components/About.js';
import { Presentation } from './components/Presentation.js';
import { Projects } from './components/Projects.js';


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
        <div>
          <Projects></Projects>
        </div>

      </body>
    </div>
  );
}

export default App;
