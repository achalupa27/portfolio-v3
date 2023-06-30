import { motion } from "framer-motion";
import { Project } from "../types";
import ProjectCard from "./ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

type Props = {
  projects: Project[];
};

function Websites({ projects }: Props) {
  projects.reverse();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative mx-auto flex h-screen max-h-screen w-screen flex-row items-center justify-evenly"
    >
      <h3 className="dark:gradient-gold absolute top-20 text-2xl font-light text-primary dark:uppercase dark:tracking-[20px] sm:top-24">
        Websites
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
              project.isShowcase ? (
                <SwiperSlide key={project?._id}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              ) : null
            )}
          </Swiper>
        </div>
        <div className="hidden lg:flex">
          {projects?.map((project) =>
            project.isShowcase ? (
              <ProjectCard project={project} key={project._id} />
            ) : null
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default Websites;
