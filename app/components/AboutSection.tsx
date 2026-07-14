import { styles } from "@/app/styles";
import Image from "next/image";
import aboutImage from "../../public/assets/about-image.jpg";

const About = () => {
    return (
        <section className={`${styles.sectionBg} flex relative mt-10`} id="about">
            <div className="md:px-10  border">
                <div className="">
                    <h1 className="font-extenda text-[22vw] md:text-[27vw] lg:text-[25.6vw] xl:text-[10vw] 2xl:text-[20vw]  leading-[0.5] flex p-0 z-20 absolute top-[20%]">RIAZULL JANNAT</h1>
                </div>
                <div className="flex items-end  h-full">
                    <div className="mb-2 lg:mb-20">
                        <div className='mb-1 lg:mb-4 text-[2vw] font-extrabold'>
                            <h3 className="">About Me</h3>
                        </div>
                        <p className="text-[1.5vw] md:text-xl mb-1">
                            Curious from a young age, I’ve always enjoyed understanding how things work—starting with taking apart toys and evolving into building web applications. Through the Programming Hero Level-1 course, I gained hands-on experience with the MERN stack and developed several projects, including a parcel management system that earned recognition from my mentors.
                        </p>
                        <p className="text-[1.8vw] md:text-xl  mb-1">
                            I'm currently focused on mastering core programming concepts, data structures, algorithms, OOP, and databases, with a goal to solve 500+ coding problems and become a world-class developer.
                        </p>
                        <p className="text-[1.5vw] md:text-xl mb:2">
                            I'm always open to collaborating on innovative, user-focused web projects. Let’s connect!<br />
                            📧 ramimk097@gmail.com
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <Image src={aboutImage} alt="Rjannat" className="relative w-[130vw] lg:w-[100%]" />
            </div>
        </section>
    );
};

export default About;