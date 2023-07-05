import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectDisplay from "./pages/ProjectDisplay";
import HireMe from './pages/HireMe';

function App() {
  return (
    <div className="App">
   
      <Router>
      <Navbar/>
        <Routes>
          <Route  path='/' element={<Home/>}/>
          <Route  path='/projects' element={<Projects/>}/>
          <Route  path='/project/:id' element={<ProjectDisplay/>}/>    
          <Route  path='/about' element={<About/>}/>   
          <Route path='/hireme' element={<HireMe/>}/> 
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
