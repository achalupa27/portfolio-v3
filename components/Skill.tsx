import { motion } from "framer-motion";
import React from "react";
import { urlFor } from "../sanity";
import { Skill } from "../types";

type Props = {
  skill: Skill;
  setShow: any;
  setShowSkill: any;
};

function Skill({ skill, setShow, setShowSkill }: Props) {
  return (
    <div
      className="group relative flex cursor-pointer"
      onClick={() => {
        setShow(true);
        setShowSkill(skill);
      }}
    >
      <div className="absolute bottom-[100%] z-50 hidden w-auto rounded-md border bg-white px-2 py-1 text-center text-primary group-hover:block dark:rounded-none dark:border-amber-500 dark:bg-gray-900 dark:text-amber-500">
        {skill.title}
      </div>
      <div className="flex h-12 w-12 items-center justify-center rounded-md p-2 dark:rounded-none dark:border-amber-500/80 dark:bg-gray-900 md:h-20 md:w-20 xl:h-20 xl:w-20">
        <img
          className="object-cover filter"
          src={urlFor(skill.image).url()}
          alt=""
        />
      </div>
      <div className="absolute z-0 h-12 w-12 rounded-md opacity-0 transition duration-300 ease-in-out group-hover:bg-primary group-hover:opacity-100 dark:rounded-none dark:group-hover:bg-amber-500/80  md:h-20 md:w-20 xl:h-20 xl:w-20 ">
        <div className="flex h-full items-center justify-center">
          <p className="text-stroke-white text-2xl font-bold text-white opacity-100 dark:text-gray-900 lg:text-3xl">
            {skill.progress}%
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
