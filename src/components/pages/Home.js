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
          <LinkedInIcon onClick={() => window.open('https://www.linkedin.com/in/')}/>
          <GitHubIcon onClick={() => window.open('https://github.com/')}/>
          <EmailIcon onClick={() => window.location = 'mailto:devikak475@gmail.com'}/>
        </div>
      </div>

      <div className= 'skills'>
        <h2>Skills</h2>
        <ol className="list">
          
        </ol>
      </div>

    </div>
  )
}

export default Home