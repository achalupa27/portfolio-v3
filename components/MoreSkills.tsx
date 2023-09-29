import { motion } from "framer-motion";
import Skill from "./Skill";
import { Skill as SkillType } from "../types";
import SkillCases from "./SkillCases";
import { useState } from "react";

type Props = {
  skills: SkillType[];
};
const skillCategories = ["frontend", "database", "backend", "language"];

function MoreSkills({ skills }: Props) {
  const [show, setShow] = useState<boolean>(false);
  const [showSkill, setShowSkill] = useState<SkillType>(skills[0]);
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="relative mx-auto flex h-screen min-h-screen max-w-[2000px] flex-col items-center justify-center text-center xl:px-10"
      >
        <h3 className="absolute top-24 text-2xl font-light text-primary dark:uppercase dark:tracking-[20px] dark:text-amber-600">
          More Wisdom
        </h3>
        <div className="mt-4 grid max-h-[420px] grid-cols-1 gap-x-12 gap-y-8 overflow-y-auto py-3 lg:max-h-full ">
          {skillCategories.map((category) => (
            <div
              key={category}
              className="rounded border-primary bg-white p-2 shadow dark:rounded-none dark:border dark:border-primary-dark dark:bg-secondary-dark"
            >
              <span className="relative -top-5 rounded bg-white px-2 text-primary shadow dark:rounded-none dark:border dark:border-primary-dark dark:bg-secondary-dark dark:tracking-widest dark:text-primary-dark">
                {category}
              </span>
              <div className="flex justify-center space-x-3 bg-white dark:bg-transparent">
                {skills.map((skill) => {
                  if (!skill.isShowcase && skill.category === category)
                    return (
                      <Skill
                        key={skill._id}
                        skill={skill}
                        setShow={setShow}
                        setShowSkill={setShowSkill}
                      />
                    );
                })}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      <SkillCases skill={showSkill} show={show} close={() => setShow(false)} />
    </>
  );
}

export default MoreSkills;
