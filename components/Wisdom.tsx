import { motion } from "framer-motion";
import Skill from "./Skill";
import { Skill as SkillType } from "../types";
import SkillCases from "./SkillCases";
import { useState } from "react";

type Props = {
  skills: SkillType[];
};

function Skills({ skills }: Props) {
  const [show, setShow] = useState<boolean>(false);
  const [showSkill, setShowSkill] = useState<SkillType>(skills[0]);
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="relative mx-auto flex h-screen min-h-screen flex-col items-center justify-center text-center xl:px-10"
      >
        <h3 className="absolute top-24 text-2xl font-light text-primary dark:uppercase dark:tracking-[20px] dark:text-amber-600">
          Wisdom
        </h3>
        <div className="grid grid-cols-1 gap-x-12 gap-y-3 lg:grid-cols-2">
          <div className="flex space-x-3">
            {skills.map((skill) => {
              if (skill.isShowcase && skill.category === "frontend")
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
          <div className="flex space-x-3">
            {skills.map((skill) => {
              if (skill.isShowcase && skill.category === "database")
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
          <div className="flex space-x-3">
            {skills.map((skill) => {
              if (skill.isShowcase && skill.category === "backend")
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
          <div className="flex space-x-3">
            {skills.map((skill) => {
              if (skill.isShowcase && skill.category === "api")
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
          <div className="flex space-x-3">
            {skills.map((skill) => {
              if (skill.isShowcase && skill.category === "version control")
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
          <div className="flex">
            {skills.map((skill) => {
              if (skill.isShowcase && skill.category === "testing")
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
          <div className="flex">
            {skills.map((skill) => {
              if (skill.isShowcase && skill.category === "ide")
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

export default Skills;
