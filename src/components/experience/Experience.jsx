import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import './Experience.css'

const Experience = () => {
  return (
    <>
      <section id="experience">
        <h5>The Skills I Have</h5>

        <h2>My Experience</h2>

        <div className="container experience-container">
          <div className="experience-fontend">
            <h3>FrontEnd Development</h3>

            <div className="experience-content">
              <article className="experience-detail">
                <BsFillPatchCheckFill className="experience-icon" />

                <div>
                  <h4>HTML</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience-detail">
                <BsFillPatchCheckFill className="experience-icon" />

                <div>
                  <h4>HTML</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience-detail">
                <BsFillPatchCheckFill className="experience-icon" />

                <div>
                  <h4>CSS</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience-detail">
                <BsFillPatchCheckFill className="experience-icon" />

                <div>
                  <h4>JAVASCRIPT</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience-detail">
                <BsFillPatchCheckFill className="experience-icon" />

                <div>
                  <h4>BOOTSTRAP</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience-detail">
                <BsFillPatchCheckFill className="experience-icon" />

                <div>
                  <h4>REACT.js</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
            </div>
          </div>

          <div className="experience-fontend">
            <h3>Backend Development</h3>

            <div className="experience-content">
              <article className="experience-detail">
                <BsFillPatchCheckFill className="experience-icon" />

                <div>
                  <h4>NODE.js</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience-detail">
                <BsFillPatchCheckFill className="experience-icon" />

                <div>
                  <h4>EXPRESS.js</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience-detail">
                <BsFillPatchCheckFill className="experience-icon" />

                <div>
                  <h4>MYSQL</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience-detail">
                <BsFillPatchCheckFill className="experience-icon" />

                <div>
                  <h4>MONGODB</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience-detail">
                <BsFillPatchCheckFill className="experience-icon" />

                <div>
                  <h4>SPRINGBOOT</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
             
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Experience;
