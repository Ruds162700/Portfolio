import React from 'react';
import emailIcon from "../contacts/email_2669570.png";
import linkedinIcon from "../contacts/linkedin_3536569.png";
import instaIcon from "../contacts/instagram_1400829.png";
import twitterIcon from "../contacts/twitter.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./contacts.css";

const Contact = () => {
    const contacts = [
        {
            icon: emailIcon,
            link: "mailto:rudrapanchal1604ext@gmail.com",
            text: "Email"
        },
        {
            icon: linkedinIcon,
            link: "https://www.linkedin.com/in/rudrapanchal27/",
            text: "LinkedIn"
        },
        {
            icon: instaIcon,
            link: "https://www.instagram.com/panchal27rudra/",
            text: "Instagram"
        },
        {
            icon: twitterIcon,
            link: "https://twitter.com/PanchalRudrak1",
            text: "Twitter"
        }
    ];

    return (
        <div className="container mt-5" id="contact">
            <div className="idsc">
                {contacts.map((contact, index) => (
                    <div className="col-md-3 mb-4" key={index}>
                        <div className="row justify-content-center">
                            <a href={contact.link} target="_blank" rel="noopener noreferrer">
                                <img src={contact.icon} className="card-img-top contact-icon" alt={contact.text} />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Contact;
