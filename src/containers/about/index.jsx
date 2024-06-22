import React from "react";
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from 'react-simple-animate';
import './styles.scss';
import { RiFlutterFill } from 'react-icons/ri'
import { FaPython, FaJava,FaDev } from 'react-icons/fa'
import { FaC, FaDatabase } from 'react-icons/fa6'
import { DiAndroid, DiApple } from 'react-icons/di'
const personalDetails = [
    {
        label: "Name",
        value: "Sanin Mohammed N",
    },
    {
        label: "Age",
        value: "23",
    },
    {
        label: "Email",
        value: "saninmohammedn@gmail.com",
    },
    {
        label: "Contact No",
        value: "+91 8848068690",
    },
    {
        label: "Address",
        value: "Kerala,India",
    },

];

const jobSummary = "I am a passionate developer proficient in Java, Python, and C, with a strong inclination towards problem-solving. As a fast learner, I thrive in adapting to new technologies and have foundational experience with Flutter and Firebase development. My skill set also includes HTML, CSS, and JavaScript, enabling me to build dynamic and visually appealing web applications. I am always eager to learn and take on new challenges, continually enhancing my expertise in the ever-evolving field of software development.";

const About = () => {
    return (
        <section id="about" className="about">

            <PageHeaderContent
                headerText="About Me"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="about__content">
                <div className="about__content__personalWrapper">
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{ transform: 'translateX(-900px)' }}
                        end={{ transform: 'translatex(0px)' }}
                    >
                        <h3>Software Developer</h3>
                        <p>{jobSummary}</p>
                    </Animate>
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{ transform: 'translateX(1700px)' }}
                        end={{ transform: 'translatex(0px)' }}
                    >
                        <h3 className="personalInformation">Personal Information</h3>
                        <ul>
                            {
                                personalDetails.map((item, i) => (
                                    <li key={i}>
                                        <span className="title">{item.label}</span>
                                        <span className="value">{item.value}</span>
                                    </li>
                                )
                                )}
                        </ul>
                    </Animate>
                </div>
                <div className="about__content__servicesWrapper">
                <Animate 
             play
             duration={1.5} 
             delay={1} 
             start={{transform: 'translateX(600px)'}} 
             end={{transform: 'translatex(0px)'}} 
             >
                    <div className="about__content__servicesWrapper__innerContent">
                        <div>
                            <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
                        </div>
                        <div>
                            <DiApple color="var(--yellow-theme-main-color)" size={60} />
                        </div>
                        <div>
                            <DiAndroid size={60} color="var(--yellow-theme-main-color)" />
                        </div>
                        <div>
                            <RiFlutterFill color="var(--yellow-theme-main-color)" size={60} />
                        </div>
                        <div>
                            <FaC color="var(--yellow-theme-main-color)" size={60} />
                        </div>
                        <div>
                            <FaJava color="var(--yellow-theme-main-color)" size={60} />
                        </div>
                        <div>
                            <FaPython color="var(--yellow-theme-main-color)" size={60} />
                        </div>
                        <div>
                            <FaDev color="var(--yellow-theme-main-color)" size={60}/>
                        </div>
                    </div>

                </Animate>                
                </div>


            </div>


        </section>

    )

}

export default About;