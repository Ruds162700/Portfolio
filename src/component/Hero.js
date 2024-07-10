import React, { useState, useEffect } from "react";
import profilephoto from "../photos/photo_2024-05-28_22-05-24.jpg";
import "./hero.css";

const words = ["Web Development", "Machine Learning", "Software Development"];

const Hero = () => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isErasing, setIsErasing] = useState(false);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        let typingInterval;
        if (!isErasing) {
            typingInterval = setInterval(() => {
                if (charIndex < words[currentWordIndex].length) {
                    setDisplayedText((prev) => prev + words[currentWordIndex][charIndex]);
                    setCharIndex((prev) => prev + 1);
                } else {
                    clearInterval(typingInterval);
                    setTimeout(() => setIsErasing(true), 1000); // Pause before erasing
                }
            }, 150);
        } else {
            typingInterval = setInterval(() => {
                if (charIndex > 0) {
                    setDisplayedText((prev) => prev.slice(0, -1));
                    setCharIndex((prev) => prev - 1);
                } else {
                    clearInterval(typingInterval);
                    setIsErasing(false);
                    setCurrentWordIndex((prev) => (prev + 1) % words.length);
                }
            }, 100);
        }

        return () => clearInterval(typingInterval);
    }, [charIndex, isErasing, currentWordIndex]);

    return (
        <div className="hero" id="hero">
            <div className="image">
                <img src={profilephoto} alt="Profile Photo" />
            </div>
            <div className="content">
                <h1>Hi There,</h1>
                <h1>I'm Rudra <span id="na">Panchal</span></h1>
                <h4>I'm Into <span id="web">{displayedText}</span><span className="cursor">|</span></h4>
                <a href="#aboutme"><button id="abm">About Me</button></a>
            </div>
        </div>
    );
};

export default Hero;
