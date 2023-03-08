import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Project from './components/pages/Projects';
import Experience from './components/pages/Experience';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Router>
      <Navbar/> 
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/project" element={<Project/>}></Route>
          <Route path="/experiences" element={<Experience/>}></Route>
        </Routes>
        <Footer/> 
      </Router>
    </div>
  );
}

export default App;
