import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../styles/Home.css'
import image5 from "../assets/image5.png"
import image6 from "../assets/image6.png"

function Home() {
  return (
    <div className='home'>
      <div className='left_section'></div>
      <div className='about'>
        <h2 >Home Service Provider for
          <br/> Your Convenience</h2>
        <div className='prompt'>
          <p>Welcome to HamroDai, your one-stop solution 
            for all your home service needs, connecting
            you with trusted professionals in the field of
            repair, painting, gardening,
            movers, carpentry, aluminum, and more.
            </p>
          <LinkedInIcon/>
          <FacebookIcon/>
          <InstagramIcon/>
          <GitHubIcon/>
        </div>
      <div className='right_section'>
         <img className='img_about' src={image5} />
      </div>
      </div>
      
      <div className='skills'>
        <div className="left">
        <h1 className='header' >Features & Benefits</h1>   
          <ol className='list'>
            <li className='item'> 
              <h2>Features</h2>
                <span>
                  1. Ability to request and schedule various home services online<br/>
                  2. Access to a network of trusted home service providers<br/>
                  3. Comprehensive range of home services, covering everything from repairs to gardening <br/>
                  4. User-friendly interface for easy navigation and service selection<br/>
                  5. Transparent pricing and quotes for all services provided              <br/>                                   
                </span>
            </li>

            <li className='item'> 
              <h2>Benefits</h2>
              <span>       
               1. Convenient access to a variety of home services from trusted professionals<br/> 
                2. Streamlined scheduling and booking process for home services<br/> 
                3.Quality workmanship and expertise in a range of home service areas<br/> 
                4.Time-saving solutions for busy homeowners seeking reliable home services<br/> 
                5. Peace of mind knowing that all home services are completed to a high standard of excellence<br/> 
              </span>
            </li>
          </ol>
        </div>
        <div className="right">
        <img className='img' src={image6} />
        
        </div>
        </div>
      </div>
  )
}

export default Home
