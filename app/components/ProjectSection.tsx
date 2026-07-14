'use client'
import { motion } from "motion/react";
import Image from "next/image";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { projects } from "../constants";
import ProjectShowcase from "./ProjectShowcase";
const Project = () => {

    return (
        <div id="projects" className="py-5 md:py-10 bg-black/10 backdrop-blur-3xl relative border border-white/50 shadow-lg rounded-lg mx-auto my-5">
            <div className='text-center mb-4 text-4xl md:text-5xl lg:text-6xl font-extrabold'>
                <h3>Projects</h3>
            </div>
            <div>
                <VerticalTimeline>
                    {
                        projects.map(project =>
                            <VerticalTimelineElement
                                key={project.id}
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: 'rgba(0, 0, 0, 0.1)', color: '#fff', backdropFilter: 'blur(24px)' }}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(243, 213, 181)' }}
                                date="2011 - present"
                                iconStyle={{ background: 'rgba(0, 0, 0, 0.1)', color: '#fff' }}
                                icon={
                                    <div className="flex justify-center items-center w-full h-full">
                                        <img src={project?.icon} alt={project?.title} className=" rounded-full" />
                                    </div>}
                            >
                                <ProjectShowcase project={project}></ProjectShowcase>
                            </VerticalTimelineElement>
                        )
                    }
                </VerticalTimeline>
            </div>
        </div>
    );
};

export default Project;