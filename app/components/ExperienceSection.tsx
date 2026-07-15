'use client'
import { motion } from "motion/react";
import { experiences } from "../constants";
import { styles } from "@/app/styles";

const ExperienceSection = () => {
    return (
        <section id="experience" className={`${styles.sectionBg} py-12 md:py-24 flex justify-center items-center`}>
            <div className="relative w-[95%] md:w-[80%] lg:w-[70%] max-w-5xl mx-auto py-12 px-4 md:px-10">                
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className='text-center mb-20 text-4xl md:text-5xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-gray-500'
                >
                    <h3>Experience</h3>
                </motion.div>

                <div className="relative border-l border-white/20 ml-4 md:ml-8 flex flex-col gap-12">
                    {experiences.map((exp, index) => (
                        <motion.div 
                            key={exp.id}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute w-6 h-6 bg-[#0a0a0a] border-4 border-white rounded-full -left-[13px] top-2 shadow-[0_0_15px_rgba(255,255,255,0.8)]" />

                            <div className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md p-6 md:p-8 hover:bg-white/10 transition-colors duration-500 shadow-2xl">
                                <div className="relative z-10 flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                                    <div>
                                        <h4 className="text-2xl md:text-3xl font-bold text-white mb-1">
                                            {exp.role}
                                        </h4>
                                        <div className="text-lg text-gray-300 font-semibold mb-2">
                                            {exp.company}
                                        </div>
                                        <div className="text-sm text-gray-400 flex flex-col sm:flex-row sm:gap-4 mb-4">
                                            <span>{exp.duration}</span>
                                            <span className="hidden sm:inline">•</span>
                                            <span>{exp.location}</span>
                                        </div>
                                        
                                        <p className="text-gray-300 leading-relaxed mb-6">
                                            {exp.description}
                                        </p>

                                        {/* Skills/Tags */}
                                        <div className="flex flex-wrap gap-2">
                                            {exp.skills.map(skill => (
                                                <span key={skill} className="px-3 py-1 text-xs font-medium text-white bg-white/10 rounded-full border border-white/20">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
