import { Intro } from "@/components/sections/introduction";
import { Experience } from "@/components/sections/experiences/experiences";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact/contact";

export default function Home() {
  return (
    <>
      <Intro />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}
