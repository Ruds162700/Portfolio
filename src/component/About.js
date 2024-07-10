import React from "react";
import profilephoto from "../photos/photo_2024-06-25_14-58-08.jpg";
import "./About.css";

const About = () => {
  return (
    <div className="about-me" id="aboutme">
      <div className="title">
        <h1>About Me</h1>
      </div>
      <div className="imagea">
        <img src={profilephoto} alt="Photo Of Rudra" />
      </div>
      <div className="datas">
        <p>
          Hi there! I'm Rudra Panchal, currently in my 4th year at LDCE,
          exploring various facets of technology with a focus on web
          development and machine learning. I'm currently interning in the
          React.js field, honing my skills in HTML, CSS, and JavaScript to
          create dynamic web applications.
        </p>
        <p>
          In addition to my technical pursuits, I have a strong academic
          foundation in subjects like Object-Oriented Programming (OOPs),
          Computer Networks (CN), Database Management Systems (DBMS), and Data
          Structures (DS).
        </p>
        <p>
          Outside of coding and academics, I'm an avid cricket enthusiast and a
          movie buff. I enjoy spending my free time playing cricket and catching
          up on the latest movies.
        </p>
      </div>
    </div>
  );
};

export default About;
