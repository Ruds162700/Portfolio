import React from 'react';
import reactLogo from "../SKILLS/React.png";
import htmlLogo from "../SKILLS/HTML,CSS.png";
import jsLogo from "../SKILLS/JS.png";
import javaLogo from "../SKILLS/java.png";
import pythonLogo from "../SKILLS/python.png";
import pandasLogo from "../SKILLS/Pandas.png";
import mysqlLogo from "../SKILLS/mysql.png";
import numpyLogo from "../SKILLS/numpy.png";
import matplotlibLogo from "../SKILLS/matplotlib.png";
import bootstrapLogo from "../SKILLS/bootstrap.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: "React", logo: reactLogo },
    { name: "HTML & CSS", logo: htmlLogo },
    { name: "JavaScript", logo: jsLogo },
    { name: "Java", logo: javaLogo },
    { name: "Python", logo: pythonLogo },
    { name: "Pandas", logo: pandasLogo },
    { name: "MySQL", logo: mysqlLogo },
    { name: "NumPy", logo: numpyLogo },
    { name: "Matplotlib", logo: matplotlibLogo },
    { name: "Bootstrap", logo: bootstrapLogo }
  ];

  return (
    <div className="container mt-5" id='skills'>
      <div className="row">
        {skills.map((skill, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card">
              <img src={skill.logo} className="card-img-top" alt={skill.name} />
              <div className="card-body">
                <h5 className="card-title">{skill.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
