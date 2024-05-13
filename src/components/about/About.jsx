import React from "react";
import MyImage1 from "/images/profile.png";
import { GiGraduateCap } from "react-icons/gi";
import { BsTelephoneForward } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";
import './About.css';

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-img">
            <img src={MyImage1} alt="" />
          </div>
        </div>
        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
              <GiGraduateCap className="about-icons"></GiGraduateCap>
              <h5>Degree</h5>
              <small>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, aperiam? <br />
                <i>Shivaji University</i>
              </small>
            </article>
            <article className="about-card">
              <TfiWorld className="about-icons"></TfiWorld>
              <h5>Location</h5>
              <small>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Atque inventore 
              </small>
            </article>
            <article className="about-card">
              <BsTelephoneForward className="about-icons"></BsTelephoneForward>
              <h5>Contact</h5>
              <small>
                <ul>
                  <li>Phone</li>
                  <li>Email</li>
                </ul>
              </small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus,
            iste voluptatum aliquam ipsum vero magni, quisquam cum nulla
            soluta fuga vitae sint blanditiis voluptatem provident fugiat.
            Possimus facere totam molestias, architecto facilis fugiat tempora
            cumque corporis iure, delectus unde corrupti eveniet nisi harum
            debitis. Eum voluptatibus ut nesciunt modi doloremque perspiciatis
            deleniti aperiam iure. Qui laborum, natus eveniet minima deserunt
            reiciendis, officia quasi eum nobis doloribus adipisci vero quod
            quis consectetur quam? Aut, voluptates enim fuga totam hic magni
            delectus. Harum tempore hic error modi minima impedit ad fuga
            asperiores, maxime mollitia perspiciatis beatae illum ipsa animi
            commodi numquam ducimus?
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
