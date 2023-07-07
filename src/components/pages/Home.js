import React from 'react'

import './Home.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const Home = () => {
  return (
    <div className= 'home'>
      <div className= 'about'>
        <h1>Hi, I'm Devika!</h1>
        <div className= 'prompt'>
          <p>A computer engineering student at the University of Florida</p>
          <LinkedInIcon onClick={() => window.open('https://www.linkedin.com/in/devika-kumar-uf/')}/>
          <GitHubIcon onClick={() => window.open('https://github.com/dvkeia')}/>
          <EmailIcon onClick={() => window.location = 'mailto:devikak475@gmail.com'}/>
        </div>
      </div>

      <div className= 'skills'>
        <h2>Skills</h2>
        <ol className = 'list'>
          <li>
            <h2>Programming Languages:</h2>
            <span>Java, C++, Python, JavaScript, TypeScript, HTML, CSS, Matlab</span>
          </li>
          <li>
            <h2>Frameworks/Tools:</h2>
            <span><span>Frameworks/Tools: Git, Angular, React, Windows OS, Linux, Visual Studio, IntelliJ</span></span>
          </li>
        </ol>
      </div>

    </div>
  )
}

export default Home