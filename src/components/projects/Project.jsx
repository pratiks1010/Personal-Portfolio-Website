import React from 'react'
import Img1 from '/images/1.jpg'
import Img2 from '/images/2.jpg'
import Img3 from '/images/3.jpg'
import Img4 from '/images/4.jpg'

import './Project.css'


const Project = () => {
  return (
    <>

    <section id="projects">
        <h5>My Recent Works/Projects</h5>
        <h2>Projects</h2>

        <div className="container project-container">
            <article className="project-item">
                <div className="project-item-img">

                    <img src={Img1} alt="" />

                </div>

                <h3>Project Title</h3>
                <small className='text-light'>Project Technology</small>
                <small className='text-light'>Project Details </small>
                <div className="project-item-btn">
                    <a href="" className="btn">GitHub</a>
                </div>
            </article>
            <article className="project-item">
                <div className="project-item-img">

                    <img src={Img2} alt="" />

                </div>

                <h3>Project Title</h3>
                <small className='text-light'>Project Technology</small>
                <small className='text-light'>Project Details </small>
                <div className="project-item-btn">
                    <a href="" className="btn">GitHub</a>
                </div>
            </article>
            <article className="project-item">
                <div className="project-item-img">

                    <img src={Img3} alt="" />

                </div>

                <h3>Project Title</h3>
                <small className='text-light'>Project Technology</small>
                <small className='text-light'>Project Details </small>
                <div className="project-item-btn">
                    <a href="" className="btn">GitHub</a>
                </div>
            </article>

            <article className="project-item">
                <div className="project-item-img">

                    <img src={Img2} alt="" />

                </div>

                <h3>Project Title</h3>
                <small className='text-light'>Project Technology</small>
                <small className='text-light'>Project Details </small>
                <div className="project-item-btn">
                    <a href="" className="btn">GitHub</a>
                </div>
            </article>
            <article className="project-item">
                <div className="project-item-img">

                    <img src={Img4} alt="" />

                </div>

                <h3>Project Title</h3>
                <small className='text-light'>Project Technology</small>
                <small className='text-light'>Project Details </small>
                <div className="project-item-btn">
                    <a href="" className="btn">GitHub</a>
                </div>
            </article>
            <article className="project-item">
                <div className="project-item-img">

                    <img src={Img1} alt="" />

                </div>

                <h3>Project Title</h3>
                <small className='text-light'>Project Technology</small>
                <small className='text-light'>Project Details </small>
                <div className="project-item-btn">
                    <a href="" className="btn">GitHub</a>
                </div>
            </article>
        </div>
    </section>
      
    </>
  )
}

export default Project
