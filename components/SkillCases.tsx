import { motion } from "framer-motion";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { Skill } from "../types";

type Props = {
  skill: Skill;
  show: boolean;
  close: any;
};

function SkillCases({ skill, show, close }: Props) {
  if (!show) {
    return null;
  }
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 bottom-0 z-40 flex items-center justify-center bg-gray-300/70 dark:bg-black/30"
      onClick={close}
    >
      <div
        className="relative z-50 h-auto w-[60rem] space-y-7 rounded-lg border border-primary bg-white p-12 shadow-2xl dark:rounded-none dark:border-amber-600 dark:bg-gray-900"
        onClick={() => {}}
      >
        <div className="flex flex-col items-center justify-center">
          <div className="font-light text-primary dark:tracking-[3px] dark:text-primary-dark">
            {skill.level} - {skill.progress}%
          </div>
          <div className="absolute -top-4 rounded-md border border-primary bg-secondary pl-4 pr-4 text-2xl font-extralight lowercase text-primary dark:rounded-none dark:border-primary-dark dark:bg-secondary-dark dark:pl-6 dark:uppercase dark:tracking-[8px] dark:text-primary-dark">
            {skill.title}
          </div>
        </div>
        {skill?.background && (
          <div className="flex flex-col items-center justify-center">
            <div className="font-light text-primary dark:tracking-[3px] dark:text-primary-dark">
              Background
            </div>
            <div className="text-center text-gray-800 dark:tracking-[3px] dark:text-gray-200">
              {skill?.background}
            </div>
          </div>
        )}
        <div className="flex flex-col items-center justify-center">
          <div className="font-light text-primary dark:tracking-[3px] dark:text-primary-dark">
            Use Cases
          </div>
          {skill?.usedCases?.map((useCase) => (
            <div className="flex space-x-3 text-center text-[rgb(36,36,36)] dark:tracking-[3px] dark:text-gray-200">
              <p>- {useCase.split("$")[0]}</p>
              {useCase.split("$")[1] && (
                <Link href={useCase.split("$")[1]} target="_blank">
                  <AiFillGithub className="h-6 w-6 text-gray-800 transition duration-300 ease-in-out hover:text-primary dark:text-gray-200 dark:hover:text-amber-600" />
                </Link>
              )}
            </div>
          ))}
        </div>
        {skill?.usedProjects !== undefined && (
          <div className="flex flex-col items-center justify-center">
            <div className="font-light text-primary dark:tracking-[3px] dark:text-primary-dark">
              Projects
            </div>
            <div className="flex flex-col items-center justify-center text-center text-gray-800 dark:tracking-[3px] dark:text-gray-200">
              {skill?.usedProjects?.map((project) => (
                <span>{project}</span>
              ))}
            </div>
          </div>
        )}
        {skill?.usedWork !== undefined && (
          <div className="flex flex-col items-center justify-center">
            <div className="font-light text-primary dark:tracking-[3px] dark:text-primary-dark">
              Work
            </div>
            <div className="flex flex-col items-center justify-center text-center text-gray-800 dark:tracking-[3px] dark:text-gray-200">
              {skill?.usedWork?.map((work) => (
                <span>{work}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default SkillCases;
