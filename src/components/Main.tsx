import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Profile from '../assets/images/profile.png';
import '../assets/styles/Main.scss';


function Main() {

  return (
    <div className="container">
      <div className="about-section">
      <div className="light-rays"></div>
        <div className="image-wrapper">
        
          <img src={Profile} alt="Sri Satya VenkataSai Siri Sudheeksha Vavila" />
        </div>
        <div className="content">
          {/* <div className="social_icons">
            <a href="https://github.com/sirisudheeksha" target="_blank" rel="noopener noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/sri-satya-venkatasai-siri-sudheeksha-vavila-5552b5204/" target="_blank" rel="noopener noreferrer"><LinkedInIcon/></a>
          </div> */}

          <h1 style={{ fontSize: "3rem" }}>Vavila Sri Satya VenkataSai Siri Sudheeksha</h1>
          <p>Computer Science Graduate</p>

          <div>
          {/* Social Icons Section */}
          <div className="social_icons">
            <a href="https://github.com/sirisudheeksha" target="_blank" rel="noopener noreferrer">
              <GitHubIcon/>
            </a>
            <a href="https://www.linkedin.com/in/sri-satya-venkatasai-siri-sudheeksha-vavila-5552b5204/" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon/>
            </a>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;