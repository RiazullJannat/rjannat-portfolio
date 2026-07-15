'use client'
import Image from "next/image";
import { motion, Variants } from "motion/react";
import { technologies } from "../constants";
import { styles } from "@/app/styles";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 10
        }
    }
};

const Skill = () => {
    return (
        <section id="skills" className={`${styles.sectionBg} py-12 md:py-20 flex justify-center items-center`}>
            <div className="relative w-[95%] md:w-[90%] lg:w-[90%]  mx-auto overflow-hidden rounded-2xl border border-white/20 bg-black/20 shadow-[0_8px_32px_0_rgba(255,255,255,0.05)] backdrop-blur-xl py-12">
            
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className='text-center mb-16 text-4xl md:text-5xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-gray-500'
            >
                <h3>My Arsenal</h3>
                {/* <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4 rounded-full" /> */}
            </motion.div>

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 px-4 md:px-8 relative z-10"
            >
                {technologies.map((technology, index) => (
                    <motion.div 
                        key={technology.name} 
                        variants={itemVariants}
                        whileHover={{ y: -5, scale: 1.05 }}
                        className="group relative flex flex-col items-center justify-center p-3 md:p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer overflow-hidden"
                    >
                        {/* Hover Gradient Overlay */}
                        {/* <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" /> */}
                        
                        <div className="relative w-10 h-10 md:w-14 md:h-14 flex items-center justify-center mb-2 transition-transform duration-500 group-hover:rotate-[360deg]">
                            <Image 
                                src={technology.icon} 
                                alt={technology.name} 
                                width={56} 
                                height={56}
                                className="object-contain grayscale group-hover:grayscale-0 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] group-hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.5)] transition-all duration-300"
                            />
                        </div>
                        
                        <span className="text-xs md:text-sm font-semibold text-gray-300 group-hover:text-white transition-colors duration-300 text-center">
                            {technology.name}
                        </span>
                    </motion.div>
                ))}
            </motion.div>
        </div>
        </section>
    );
};

export default Skill;