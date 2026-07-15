import Banner from "./components/Banner";
import About from "./components/AboutSection";
import Skill from "./components/SkillSection";
import Project from "./components/ProjectSection";
import Contact from "./components/ContactSection";

import ExperienceSection from "./components/ExperienceSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Skill></Skill>
      <ExperienceSection />
      <Project></Project>
      <Contact></Contact>
      <Footer />
    </div>
  );
}
