import Image from "next/image";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { styles } from "@/app/styles";
import bannerImage from "../../public/assets/banner-image.png";
import { Luckiest_Guy } from "next/font/google";
import Link from "next/link";
import TypingText from "./TypingText";

const luckiestGuy = Luckiest_Guy({
    weight: "400",
    subsets: ["latin"],
});
const Banner = () => {
    return (
        <section id="home" className={`${styles.sectionBg} p-1 overflow-hidden lg:px-8  mx-auto`}>
            <div className="relative  mx-auto ">
                <div className="mb-8 mt-4 flex justify-between items-center">
                    <div className="text-[3vw] font-black" data-aos="fade-right" data-aos-duration="600">PROGRAMMER</div>
                    <div className="flex justify-center items-center gap-3" data-aos="fade-left" data-aos-duration="600" data-aos-delay="200">
                        <Link href={'https://www.linkedin.com/in/riazull-jannat/'} target="_blnck" className="md:text-4xl text-blue-700">
                            <FaLinkedin />
                        </Link>
                        <Link href={'https://github.com/RiazullJannat'} target="_blnck" className="md:text-4xl">
                            <FaGithub />
                        </Link>
                        <Link href={'https://mybdjobs.bdjobs.com/mybdjobs/masterview.asp'} target="_blnck">
                            <img src={'https://play-lh.googleusercontent.com/uVZQl-dRvg7rMWp8EhmLQa-avQx5erJgQ5Mu6mac2du4lOpV-35Qifv63fltE-uEqjw'} alt="bd jobs" className="h-4 md:h-10 rounded-full" />
                        </Link>
                    </div>
                </div>
                <h1
                    className="font-extenda text-[27vw] md:text-[27vw] md:mt-14 lg:text-[25.6vw] xl:text-[26vw] 2xl:text-[26.8vw] leading-[0.5] text-center sm:mt-24 lg:mt-24 relative p-0"
                    data-aos="zoom-in"
                    data-aos-duration="700"
                >
                    RIAZULL JANNAT
                </h1>
                <div
                    className="w-[70vw] md:w-[50vw] lg:w-[50vw] mx-auto h-[18vh] md:h-[19vh] lg:h-[35vh] xl:h-[40vh] 2xl:h-[47vh] relative flex justify-between"
                >

                    <Image
                        src={bannerImage} alt="rjannat"
                        className="mx-auto absolute -bottom-[5%] md:-bottom-[7%]    transform-translate-x-1/2 w-full"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    />

                </div>
                <div
                    className="text-[2.4vw] md:text-xs lg:text-xl w-[35%] text-left absolute top-[50%] md:top-[60%]"
                    data-aos="fade-right"
                    data-aos-duration="600"
                    data-aos-delay="500"
                >
                    <TypingText
                        sequence={[
                            '"Specializing in architecting robust full-stack platforms from ground zero to final deployment. I combine the dynamic capabilities of React and Next.js with the solid backend power of Django and Node.js."',
                            3000,
                            '"I thrive on optimizing system performance, handling complex APIs, and ensuring flawless database integration with MongoDB. My goal is to engineer high-performance web applications that are not only user-friendly but also future-proof"',
                            3000,
                        ]}
                        speed={60}
                    />
                </div>
                <div
                    className="text-[2.4vw] md:text-xs lg:text-xl w-[35%] text-right absolute right-[0%] top-[50%] md:top-[60%]"
                    data-aos="fade-left"
                    data-aos-duration="600"
                    data-aos-delay="700"
                >
                    <TypingText
                        sequence={[
                            '"My journey in tech began with intense algorithmic problem-solving, achieving a 2-star rating on CodeChef. Today, I am channeling that same analytical mindset into learning and exploring Artificial Intelligence and Machine Learning"',
                            3000,
                            '"Using C/C++ and Python, I am building a solid foundation in data engineering, neural networks, and predictive modeling. I love taking on new challenges, constantly refining my skills to transition from core competitive programming to smart software solutions."',
                            3000,
                        ]}
                        speed={60}
                    />
                </div>
            </div>
        </section>
    );
};
export default Banner;