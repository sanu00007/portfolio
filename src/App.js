
import './App.scss';
import {Routes,Route,useLocation} from 'react-router-dom'
import Home from './containers/home';
import About from './containers/about';
import Resume from './containers/resume';
import Skills from './containers/skills';
import Contact from './containers/contact';
import Portfolio from './containers/portfolio';
import Navbar from './components/navBar';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import particles from './utils.js/particles';
function App() {

  const location = useLocation();

  const handleInit = async (main)=>{
    await loadFull(main)
  }

  const renderpaticleJsInHomePage = location.pathname == "/";

  return (
    <div className="App">
      {/* particles js */}
      {renderpaticleJsInHomePage &&  (<Particles id="particles" options={particles} init={handleInit}/>)
    }
     
      {/* nav bar */}
      <Navbar>
        
      </Navbar>

      {/* main page content */}

    <div className='App__main-page-content'>

    <Routes>
      <Route index path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/resume' element={<Resume/>} />
      <Route path='/skills' element={<Skills/>} />
      <Route path='/' element={<Portfolio/>} />
      <Route path='/contact' element={<Contact/>} />
    </Routes>

    </div>  


     

    </div>
  );
}

export default App;
