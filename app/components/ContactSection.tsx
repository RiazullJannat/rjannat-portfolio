
'use client'
import Email from './Email';
import PhoneNumber from './PhoneNumber';
import { styles } from "@/app/styles";
import { motion } from "motion/react";

const Contact = () => {
    return (
        <section id='contact' className={`${styles.sectionBg} py-12 md:py-24 flex justify-center items-center`}>
            <div className="relative w-[95%] md:w-[90%] lg:w-[80%] max-w-6xl mx-auto py-12 px-4 md:px-10">
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className='text-center mb-16 text-4xl md:text-5xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-gray-500'
                >
                    <h3>Let's Connect</h3>
                </motion.div>

                <div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-20 bg-black/40 border border-white/20 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-[0_8px_32px_0_rgba(255,255,255,0.05)] overflow-hidden">
                    {/* Background glow for the contact card - grayscale */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] pointer-events-none" />

                    <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-8 z-10">
                        <div>
                            <h4 className="text-3xl md:text-4xl font-bold text-white mb-4">Get in touch</h4>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                Whether you have a question, a project in mind, or just want to say hi, I'd love to hear from you. I'm always open to discussing new opportunities!
                            </p>
                        </div>
                        
                        <div className="bg-black/60 p-6 rounded-2xl border border-white/10">
                            <PhoneNumber />
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 z-10">
                        <Email />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;