import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { urlFor } from "../sanity";
import { useState } from "react";

type Props = {
  project: any;
};

const ProjectCard = ({ project }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <div className="scene flex items-center justify-center p-2 py-6 xl:p-6">
      {/* CARD */}
      <div
        className={`card relative z-40 flex h-[200px] w-[350px] cursor-pointer flex-col items-center justify-center rounded-md border-primary bg-white p-4 shadow-xl transition duration-500 hover:shadow-gray-900/20 dark:rounded-none dark:border dark:border-primary-dark  dark:bg-gray-900  dark:hover:bg-[#111827] dark:hover:shadow-amber-700/20 sm:h-[200px] sm:w-[400px] md:h-[200px] md:w-[400px] md:p-12 lg:h-[200px] lg:w-[320px] xl:h-[250px] xl:w-[380px] 2xl:h-[265px] 2xl:w-[440px] ${
          isFlipped ? "is-flipped" : ""
        }`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* FRONT CARD */}
        <div className={`face ${isFlipped ? "z-0" : "z-50"} `}>
          <div className="flex justify-center p-5">
            <img
              className="h-24 w-24 xl:h-36 xl:w-36"
              src={urlFor(project?.image).url()}
              alt={`${project?.title} logo`}
            />
          </div>
        </div>

        <h4
          className={
            "face back absolute -top-4 rounded-md border-primary bg-secondary text-2xl font-extralight lowercase text-primary shadow dark:rounded-none dark:border dark:border-primary-dark dark:bg-secondary-dark dark:uppercase dark:tracking-[8px] dark:text-primary-dark"
          }
        >
          <img
            className="h-12 w-12"
            src={urlFor(project?.image).url()}
            alt={`${project?.title} logo`}
          />
        </h4>
        {/* BACK CARD */}
        <div className="face back flex flex-col items-center justify-center">
          <div className="flex w-full justify-between">
            {project.linkToCode && (
              <Link
                href={project?.linkToCode}
                target="_blank"
                className="flex items-center justify-center space-x-2 rounded-md border-primary p-1 px-2 text-primary shadow transition  duration-500 ease-in-out hover:bg-primary hover:text-secondary dark:rounded-none dark:border-amber-500 dark:text-amber-500 dark:hover:bg-primary-dark dark:hover:text-secondary-dark"
              >
                <AiFillGithub className="h-6 w-6" />
                <span>Code</span>
              </Link>
            )}
            {project.linkToBuild && (
              <Link
                href={project?.linkToBuild}
                target="_blank"
                className="flex items-center justify-center space-x-2 rounded-md border-primary p-1 px-2 text-primary shadow transition  duration-500 ease-in-out hover:bg-primary hover:text-secondary dark:rounded-none dark:border-amber-500 dark:text-amber-500 dark:hover:bg-primary-dark dark:hover:text-secondary-dark"
              >
                <i className="fi fi-rr-arrow-up-right-from-square"></i>
                <span>Live Demo</span>
              </Link>
            )}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {project?.technologies?.map((technology: any) => (
              <div
                key={technology._id}
                className="z-50 cursor-default rounded-md border-primary p-1 shadow-md transition duration-200 hover:bg-blue-400/20 dark:rounded-none dark:border dark:border-amber-500 dark:hover:bg-amber-500/20 sm:p-2"
                onClick={() => console.log("dont flip")}
              >
                <img
                  className="h-6 w-6 md:h-8 md:w-8 xl:h-10 xl:w-10"
                  src={urlFor(technology.image).url()}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
