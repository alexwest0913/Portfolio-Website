import React from 'react'
import {Link} from 'react-router-dom'
import './about.css'
import NYCPIC from '../../img/nyc.png'

const About = () => {
  return (
    <>
      <div className='about'>
        <div className='about-left'>
          <div className='about-card bg'></div>
          <div className='about-card'>
            <img src={NYCPIC} alt='image' className='about-img'/>
          </div>
        </div>
        <div className='about-right'>
          <h1 className='about-title'>About Me</h1>
          <p className='about-sub'>
            Frontend Web Developer
          </p>
          <p className='about-desc'>
            Audio Engineer turned Software Developer. I found that my passion
            for creating music and the programs to do this transcribed almost identically with developing software,
            sparking my interest in front end web development. I bring a unique capability to not only
            quickly learn new technologies, but also to translate the needs of users
            and companies in what they are looking for in a website.
          </p>
        </div>
      </div>
    </>
  );
}

export default About
