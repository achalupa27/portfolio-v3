import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { urlFor } from "../sanity";
import { useState } from "react";

type Props = {
  experience: any;
};

const experienceCard = ({ experience }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <div className="scene flex items-center justify-center p-2 py-6 xl:p-6">
      {/* CARD */}
      <div
        className={`card relative flex h-[420px] w-[300px] cursor-pointer flex-col items-center justify-center rounded-md  bg-white text-center text-2xl font-extralight text-primary shadow-xl transition duration-500 hover:shadow-gray-900/20 dark:rounded-none dark:border dark:border-primary-dark dark:bg-gray-900 dark:uppercase dark:tracking-[8px] dark:text-primary-dark dark:hover:bg-[#111827] dark:hover:shadow-amber-700/20 sm:w-[420px] sm:text-3xl md:w-[700px] xl:h-[420px] ${
          isFlipped ? "is-flipped" : ""
        }`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* FRONT CARD */}
        <div className={`face ${isFlipped ? "z-0" : "z-50"} `}>
          <div className="mb-8 flex justify-center">
            <img
              className="h-24 w-32 xl:h-36 xl:w-44"
              src={urlFor(experience?.companyImage).url()}
              alt={`${experience?.title} logo`}
            />
          </div>
          <div className="text-2xl">Software Engineer</div>
        </div>

        <h4
          className={
            "face back absolute -top-8 rounded-md border-primary bg-secondary text-2xl font-extralight lowercase text-primary shadow dark:rounded-none dark:border dark:border-primary-dark dark:bg-secondary-dark dark:uppercase dark:tracking-[8px] dark:text-primary-dark lg:-top-12"
          }
        >
          <div className="flex h-16 w-16 items-center justify-center md:h-24 md:w-24">
            <img
              className="h-16 w-20"
              src={urlFor(experience?.companyImage).url()}
              alt={`${experience?.title} logo`}
            />
          </div>
        </h4>
        {/* BACK CARD */}
        <div className="face back flex flex-col items-center justify-center text-base font-light">
          <div className="space-y-2">
            <div>-Built an ERP system from scratch</div>
            <div>-Automated data retrieval from lightspeed, quickbooks</div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {experience?.technologies?.map((technology: any) => (
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

export default experienceCard;
