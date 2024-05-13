import React from 'react';
import MyImage from '/images/profile.png';

import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsMedium } from 'react-icons/bs';
import './Home.css';

const Home = () => {
  return (
    <header id='home'>
      <div className="container home_container">
        <div className="home-content">
          <h5>Hello, I'm</h5>
          <h1>Pratik Sawant</h1>
          <h5 className="text-light">
          C-DAC certified Full Stack Developer
          </h5>
          
          <div className="home-btn">
            <a href="" download className="btn">
              Download Resume
            </a>
            <a href="#contact" className="btn btn-primary">
              Contact Me
            </a>
          </div>
        </div>

        <div className="home-social">
          <a href="">
            <BsLinkedin />
          </a>
          <a href="">
            <BsGithub />
          </a>
          <a href="">
            <BsMedium />
          </a>
        </div>

        <div className="home-img">
          <img src={MyImage} alt="profile" />
        </div>
      </div>
    </header>
  );
};

export default Home;
