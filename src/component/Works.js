import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Works.css';

// Import images
import hospitalImage from "../photos/hospital-management.png";
import todoImage from '../photos/todo.png';
import ticTacToeImage from '../photos/tic-tac-toe.png';
import ecommerce from "../photos/Screenshot 2024-07-10 155420.png"
const Works = () => {
  const works = [
    {
      image:ecommerce,
      title:"E-Commerce Site",
      desc:"Developed a fully-functional e-commerce website using React and Redux, featuring cart management, favorites, search functionality, and a comprehensive checkout process. Ensured a seamless user experience with responsive design and efficient state management.",
      link:"https://ecommerce-black-seven.vercel.app/"
    },
    {
      image: hospitalImage,
      title: "Hospital Management System",
      desc: "I developed a web app using JSP, Servlet, JSTL, MySQL, and iTextPDF for managing patient appointments. Patients can schedule appointments, get a confirmation PDF with a QR code. Doctors can view appointments, add comments. Admin interface allows doctor registration, enhancing appointment scheduling and communication.",
      link: "https://github.com/Ruds162700/Hospital-Management-System"
    },
    {
      image: todoImage,
      title: "Todo App",
      desc: "I created a Todo List application using React, CSS, HTML, and JavaScript. It allows users to manage their tasks efficiently with features such as adding, editing, and deleting tasks. The application also includes options to select all tasks at once or delete them all. It provides a user-friendly interface for organizing tasks effectively.",
      link: "https://todo-list-plum-rho-36.vercel.app/"
    },
    {
      image: ticTacToeImage,
      title: "Tic-Tac-Toe Game",
      desc: "Developed a fully functional Tic Tac Toe game utilizing React.js for the frontend, along with CSS for styling and HTML for structure. This project showcases my proficiency in creating interactive web applications with a focus on clean, modular, and reusable code.",
      link: "https://tic-tac-toe-blond-alpha.vercel.app/"
    }
  ];

  return (
    <div className="work" id="works">
      <div className="d-flex flex-wrap justify-content-center">
        {works.map((work, index) => (
          <Card key={index} className="work-card">
            <Card.Img variant="top" src={work.image} alt={work.title} />
            <Card.Body className="d-flex flex-column">
              <Card.Title>{work.title}</Card.Title>
              <Card.Text className="flex-grow-1">{work.desc}</Card.Text>
              <Button variant="primary" href={work.link} target="_blank">Go to Project</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Works;
