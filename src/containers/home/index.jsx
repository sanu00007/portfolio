import React from "react";
import './styles.scss';
import { useNavigate } from 'react-router-dom';
import { Animate } from 'react-simple-animate';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
const Home = () => {

    const navigate = useNavigate();

    const handleNavigateToContactMe = () => {
        navigate("/contact");
    }

    return (

        <section id="home" className="home">
            <div className="home__text-wrapper">
                <h1>
                    I'm Sanin Mohammed
                    <br />
                    Software Developer
                </h1>

            </div>
            <Animate 
             play
             duration={1.5} 
             delay={1} 
             start={{transform: 'translateY(550px)'}} 
             end={{transform: 'translatex(0px)'}} 
             >
                <div className="home__contact-me">
                    <button onClick={handleNavigateToContactMe}>Hire Me</button>
                </div>
            </Animate>
            <div className="home__social-icons">
                <a href="https://www.instagram.com/____.sanu._7_/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={40} />
                </a>
                <a href="https://github.com/sanu00007" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={40} />
                </a>
                <a href="https://www.linkedin.com/in/sanin-mohammed-n-9abb85271/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={40} />
                </a>
            </div>

        </section>

    )

}

export default Home;