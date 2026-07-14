import Image from "next/image";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { styles } from "@/app/styles";
import bannerImage from "../../public/assets/banner-image.png";
import { Luckiest_Guy } from "next/font/google";
import Link from "next/link";

const luckiestGuy = Luckiest_Guy({
    weight: "400",
    subsets: ["latin"],
});
const Banner = () => {
    return (
        <section id="home" className={`${styles.sectionBg}  overflow-hidden lg:px-8  mx-auto`}>
            <div className="relative  mx-auto ">
                <div className="mb-8 mt-4 flex justify-between items-center">
                    <div className="text-[3vw] font-black ">PROGRAMMER</div>
                    <div className="flex justify-center items-center gap-3">
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
                <h1 className="  font-extenda text-[27vw] md:text-[27vw] md:mt-14 lg:text-[25.6vw] xl:text-[26vw] 2xl:text-[26.8vw]  leading-[0.5] text-center sm:mt-24  lg:mt-24 relative p-0">RIAZULL JANNAT</h1>
                <div
                    className="w-[70vw] md:w-[50vw] lg:w-[50vw] mx-auto h-[18vh] md:h-[19vh] lg:h-[35vh] xl:h-[40vh] 2xl:h-[47vh] relative flex justify-between"
                >

                    <Image
                        src={bannerImage} alt="rjannat"
                        className="mx-auto absolute -bottom-[0%] md:-bottom-[7%]    transform-translate-x-1/2 w-full"
                        data-aos="fade-up"
                    />

                </div>
                <div className="text-[2.4vw] md:text-xs lg:text-xl w-[35%]   text-left absolute top-[50%] md:top-[60%]">
                    "Full-stack developer specializing in building high-performance, scalable web applications.
                    I craft seamless digital experiences using React, Next.js, Django, Node.js, and MongoDB."
                </div>
                <div className="text-[2.4vw] md:text-xs lg:text-xl w-[35%]   text-right absolute  right-[0%] top-[50%]  md:top-[60%]">
                    "From solving algorithmic challenges as a 2-star CodeChef coder to building intelligent AI/ML systems, I thrive on high-performance code.
                    I leverage C/C++, Python, and modern tech to build scalable, data-driven applications."
                </div>
            </div>
        </section>
    );
};
export default Banner;