import ProjectCard from "./ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { Project } from "../types";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

type Props = {
  projects: Project[];
};

function Github({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative mx-auto flex h-screen max-w-7xl flex-row items-center justify-evenly"
    >
      <h3 className="dark:gradient-gold absolute top-20 z-50 text-2xl font-light text-primary dark:uppercase dark:tracking-[20px] sm:top-24">
        <a
          href="https://www.github.com/achalupa27"
          className="flex items-center justify-center"
          target="_blank"
        >
          Github
          <ArrowTopRightOnSquareIcon className="h-6 w-6 dark:text-amber-600" />
        </a>
      </h3>
      <div>
        <div className="block h-fit lg:hidden">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper w-[600px]"
          >
            {projects?.map((project) =>
              project.isShowcase ? null : (
                <SwiperSlide key={project?._id}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>
        <div className="hidden grid-cols-3 lg:grid">
          {projects?.map((project) =>
            project.isShowcase ? null : (
              <ProjectCard key={project._id} project={project} />
            )
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default Github;
