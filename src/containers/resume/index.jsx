import React from "react";
import { IoIosDocument } from "react-icons/io";
import PageHeaderContent from "../../components/pageHeaderContent";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { data } from "./utils";
import './styles.scss'
import 'react-vertical-timeline-component/style.min.css'
import {MdWork} from 'react-icons/md';
import { IoIosSchool } from "react-icons/io";

const Resume=()=>{
    return(
        <section id="resume" className="resume">

            <PageHeaderContent 
             headerText = "My Resume" 
             icon={<IoIosDocument size={40}/>}
             />
            <div className="timeline">

                <div className="timeline__education">

                    <h3 className="timeline__education__header" >

                        Education
                    
                    </h3>
                    <VerticalTimeline
                    layout={'1-column'}
                    lineColor="var(--yellow-theme-main-color)"

                    >
                    {
                        data.education.map((item,i)=>(
                            <VerticalTimelineElement
                            key={i}
                            className="timeline__education__vertiical-timeline-element"
                            contentStyle={{
                                background: 'none', color: 'var(--yellow-theme-sub-text-color)',border:'1.5px solid var(--yellow-theme-main-color)'

                            }}
                            date={item.date}
                            icon={<IoIosSchool />}
                            iconStyle={{
                                background:'#181818',
                                color: 'var(--yellow-theme-main-color)'

                            }}
                            >
                                <div className="vertical-timeline-element-title-wrapper">
                                    <h3 className="vertical-timeline-element-title">
                                    {item.title}
                                    </h3>
                                    <h4 className="vertical-timeline-element-subtitle">
                                    {item.subtitle}
                                    </h4>
                                   

                                </div>
                                <p className="vertical-timeline-element-para">
                                        {item.description}
                                    </p>
                            </VerticalTimelineElement>
                        ))
                    }

                    </VerticalTimeline>
                </div>
                <div className="timeline__experience">

                    <h3 className="timeline__experience__header">

                        Experience
                    
                    </h3>
                    <VerticalTimeline
                    layout={'1-column'}
                    lineColor="var(--yellow-theme-main-color)"

                    >
                    {
                        data.experience.map((item,i)=>(
                            <VerticalTimelineElement
                            key={i}
                            className="timeline__experience__vertiical-timeline-element"
                            contentStyle={{
                                background: 'none',
                                 color: 'var(--yellow-theme-sub-text-color)',
                                 border:'1.5px solid var(--yellow-theme-main-color)'

                            }}
                            date="2018-2020"
                            icon={<MdWork/>}
                            iconStyle={{
                                background:'#181818',
                                color: 'var(--yellow-theme-main-color)'

                            }}
                            >
                                <div className="vertical-timeline-element-title-wrapper">
                                    <h3 className="vertical-timeline-element-title">
                                    {item.title}
                                    </h3>
                                    <h4 className="vertical-timeline-element-subtitle">
                                    {item.subtitle}
                                    </h4>
                                   
                                    

                                </div>
                                <h5 className="vertical-timeline-element-h5">
                                        {item.description}
                                    </h5>
                                <p className="vertical-timeline-element-para">
                                        {item.content}
                                    </p>
                            </VerticalTimelineElement>
                        ))
                    }

                    </VerticalTimeline>

                </div>
            </div>
           

        </section>

    )

}

export default Resume;