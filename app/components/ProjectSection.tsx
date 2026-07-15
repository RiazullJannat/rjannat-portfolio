'use client'
import { motion } from "motion/react";
import { projects } from "../constants";
import ProjectShowcase from "./ProjectShowcase";
import { styles } from "@/app/styles";

const Project = () => {
    return (
        <section id="projects" className={`${styles.sectionBg} py-12 md:py-24 flex justify-center items-center`}>
            <div className="relative w-[95%] md:w-[90%] lg:w-[90%] max-w-7xl mx-auto py-12 px-4 md:px-10">                
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className='text-center mb-24 text-4xl md:text-5xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-gray-500'
                >
                    <h3>Featured Projects</h3>
                </motion.div>

                <div className="flex flex-col gap-16 md:gap-32 relative z-10">
                    {projects.map((project, index) => (
                        <ProjectShowcase key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Project;