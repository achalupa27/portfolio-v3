import { motion } from "framer-motion";
import Skill from "./Skill";
import { Skill as SkillType } from "../types";
import SkillCases from "./SkillCases";
import { useState } from "react";

type Props = {
  skills: SkillType[];
};

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
        <h3 className="absolute top-24 text-2xl font-light tracking-[20px] text-primary dark:uppercase dark:text-amber-600">
          More Wisdom
        </h3>
        <div className="">
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => {
              if (!skill.isShowcase)
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
      </motion.div>
      <SkillCases skill={showSkill} show={show} close={() => setShow(false)} />
    </>
  );
}

export default MoreSkills;
