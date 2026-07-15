'use client';
import { styles } from "@/app/styles";
import Image from "next/image";
import aboutImage from "../../public/assets/about-image.jpg";
import TypingText from "./TypingText";

const About = () => {
    return (
        <section className={`${styles.sectionBg} pl-1  max-h-[95vh] flex relative mt-10 overflow-hidden`} id="about">
            <div className="md:px-10 ">
                <div className="">
                    <h1 className="font-extenda text-[21vw] md:text-[27vw] lg:text-[20.6vw] xl:text-[20vw] 2xl:text-[21vw]  leading-[0.5] flex p-0 z-20 absolute top-[13%]" data-aos="fade-down" data-aos-duration="1000">RIAZULL JANNAT</h1>
                </div>
                <div className="flex mt-10 items-center md:items-end  h-full ">
                    <div className=" lg:mb-20 w-full">
                        <div className='mb-1 lg:mb-4 text-[2vw] font-extrabold'>
                            <h3 className="" data-aos="fade-right" data-aos-duration="600" data-aos-delay="200">About Me</h3>
                        </div>
                        {/* Mobile View: Typing Animation with Stable Height */}
                        <div className="relative w-full md:hidden">
                            {/* Invisible placeholder to reserve layout height and prevent layout shift while typing */}
                            <p className="text-[2.4vw] md:text-xl mb-1 opacity-0 select-none pointer-events-none">
                                Today, I am a software developer with 1+ years of industry experience, specializing in the MERN stack. I have a deep passion for problem-solving, which has driven me to become a 2-Star Rated Programmer on CodeChef, actively mastering DSA and core CS concepts using C, C++, and Python.
                            </p>
                            <div className="absolute inset-0" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
                                <TypingText
                                    sequence={[
                                        "My journey started with taking apart toys to see how they worked, which eventually led me to building full-stack web applications.",
                                        3000,
                                        "Today, I am a software developer with 1+ years of industry experience, specializing in the MERN stack. I have a deep passion for problem-solving, which has driven me to become a 2-Star Rated Programmer on CodeChef, actively mastering DSA and core CS concepts using C, C++, and Python.",
                                        3000,
                                        "Simultaneously, I am diving into AI Engineering to bridge the gap between robust web development and intelligent, data-driven systems.\nI love building clean, user-focused applications and solving complex engineering challenges. Let's collaborate!\nriazull.jannat.rj@gmail.com",
                                        3000,
                                    ]}
                                    speed={85}
                                    wrapper="p"
                                    className="text-[2.4vw] md:text-xl mb-1 whitespace-pre-line"
                                />
                            </div>
                        </div>

                        {/* Desktop View: Original Static Paragraphs */}
                        <div className="hidden md:block">
                            <p className="text-[2.4vw] md:text-xl mb-1" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
                                My journey started with taking apart toys to see how they worked, which eventually led me to building full-stack web applications.
                            </p>
                            <p className="text-[2.4vw] md:text-xl mb-1" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
                                Today, I am a software developer with 1+ years of industry experience, specializing in the MERN stack. I have a deep passion for problem-solving, which has driven me to become a 2-Star Rated Programmer on CodeChef, actively mastering DSA and core CS concepts using C, C++, and Python.
                            </p>
                            <p className="text-[2.4vw] md:text-xl mb-2" data-aos="fade-up" data-aos-duration="800" data-aos-delay="600">
                                Simultaneously, I am diving into AI Engineering to bridge the gap between robust web development and intelligent, data-driven systems.<br />
                                I love building clean, user-focused applications and solving complex engineering challenges. Let's collaborate!<br />
                                riazull.jannat.rj@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Image src={aboutImage} alt="Rjannat" className="relative w-[160vw] lg:w-[70vw]" data-aos="fade-left" data-aos-duration="1000" />
            </div>
        </section>
    );
};

export default About;