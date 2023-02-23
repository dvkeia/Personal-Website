import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Project from './components/Project';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Router>
      <Navbar/> //putting it above makes it available for all routes, not just links with / at end
        <Routes>
          <Route path="/" element={<Navbar/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/project" element={<Project/>}></Route>
          <Route path="/experiences" element={<Experience/>}></Route>
        </Routes>
        <Footer/> // like with navbar, but you want it at bottom 
      </Router>
    </div>
  );
}

export default App;
