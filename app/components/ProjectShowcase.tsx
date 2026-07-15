'use client'
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { motion } from 'motion/react';
import { FaExternalLinkAlt } from 'react-icons/fa';

interface Project {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    link: string;
    image: StaticImageData | string;
    icon?: string;
}

const ProjectShowcase = ({project, index}: {project: Project, index: number}) => {
    const isEven = index % 2 === 0;

    return (
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 lg:gap-16 items-center relative w-full rounded-3xl p-6 lg:p-12 bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10  duration-500 shadow-2xl`}
        >
            {/* Project Info */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6 z-10">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/20 bg-black/50 p-1">
                        <img src={project.icon} alt={project.title} className="w-full h-full rounded-full object-cover" />
                    </div>
                    <span className=" font-mono text-sm uppercase tracking-widest">{project.subtitle}</span>
                </div>
                
                <h3 className="text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                    {project.title}
                </h3>
                
                <p className="text-gray-300 text-lg leading-relaxed">
                    {project.description}
                </p>
                
                <div className="pt-6 flex gap-4">
                    <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-transform hover:scale-105"
                    >
                        Live Demo <FaExternalLinkAlt size={14} />
                    </a>
                </div>
            </div>

            {/* Project Image - 3D / Floating effect */}
            <div className="w-full lg:w-1/2 relative group">
                <div className="absolute inset-0 rounded-2xl blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                <motion.div 
                    whileHover={{ scale: 1.02, rotateY: isEven ? -2 : 2, rotateX: 2 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
                    style={{ transformPerspective: 1000 }}
                >
                    <Image
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </motion.div>
            </div>
        </motion.div>
    );
};

export default ProjectShowcase;
