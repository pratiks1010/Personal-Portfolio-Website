import React from 'react'
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsMedium } from 'react-icons/bs';
import './Footer.css'


const Footer = () => {
  return (
    <>

    <footer>
        <a href="#home" className='footer-logo'></a>
        <ul className='links'>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">Contact Me</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
        </ul>

        <div className="footer-social">
            <a href=""><BsLinkedin/></a>
            <a href=""><BsGithub/></a>
            <a href=""><BsMedium/></a>
        </div>

        <div className="footer-copyright">
            <small>&copy ; Pratik Sawant, All Rights Reserved.</small>
        </div>
    </footer>
      
    </>
  )
}

export default Footer
