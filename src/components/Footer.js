import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../styles/Footer.css"

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
      <LinkedInIcon/>
          <FacebookIcon/>
          <InstagramIcon/>
          <GitHubIcon/>
      </div>
      <p> &copy; 2023   hamrodai@gmail.com</p>
    </div>
  )
}

export default Footer
