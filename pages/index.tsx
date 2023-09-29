import type { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Contact from "../components/Contact/Contact";
import Work from "../components/Work";
import Header from "../components/Header";
import Hero from "../components/Landing/Hero";
import Websites from "../components/Websites";
import Skills from "../components/Wisdom";
import { Skill, Project, Experience } from "../types";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchExperiences } from "../utils/fetchExperiences";
import { ThemeProvider } from "next-themes";
import ScrollToTop from "../components/ScrollToTop";
import Github from "../components/Github";
import MoreSkills from "../components/MoreSkills";
import LightSuite from "../components/LightSuite";

type Props = {
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
};

const Home = ({ experiences, projects, skills }: Props) => {
  return (
    <ThemeProvider enableSystem={false} attribute="class" defaultTheme="dark">
      <Head>
        <title>Andrew Chalupa - Portfolio</title>
      </Head>
      <div className="dark:gradient-to-br to-teal-gray/60 z-0 h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth bg-gray-200 bg-gradient-to-br lowercase text-white overflow-x-hidden scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-primary dark:from-gray-900 dark:to-gray-800 dark:uppercase dark:scrollbar-thumb-amber-600/80 ">
        <Header />

        <section id="hero" className="snap-start">
          <Hero />
        </section>

        <section id="work" className="snap-center">
          <Work experiences={experiences} />
        </section>

        <section id="websites" className="snap-center">
          <Websites projects={projects} />
        </section>

        {/* <section id="lightsuite" className="snap-center">
          <LightSuite projects={projects} />
        </section> */}

        <section id="wisdom" className="snap-center">
          <Skills skills={skills} />
        </section>

        <section id="contact" className="snap-center">
          <Contact />
        </section>

        <section id="more" className="snap-center">
          <MoreSkills skills={skills} />
        </section>

        {/* <ScrollToTop /> */}
      </div>
    </ThemeProvider>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();

  return {
    props: {
      experiences,
      skills,
      projects,
    },
    revalidate: 10,
  };
};
