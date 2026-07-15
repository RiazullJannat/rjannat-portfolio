import Banner from "./components/Banner";
import About from "./components/AboutSection";
import Skill from "./components/SkillSection";
import Project from "./components/ProjectSection";
import Contact from "./components/ContactSection";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Skill></Skill>
      {/* <Project></Project> */}
      {/* <Contact></Contact> */}
    </div>
  );
}
