import { motion } from "framer-motion";
import { Project } from "../types";
import AppCard from "./AppCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

type Props = {
  projects: Project[];
};

function LightSuite({ projects }: Props) {
  projects.reverse();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative mx-auto flex h-screen max-h-screen w-screen flex-row items-center justify-evenly"
    >
      <h3 className="dark:gradient-gold absolute top-20 text-2xl font-light text-primary dark:uppercase dark:tracking-[20px] sm:top-24">
        lightsuite
      </h3>
      <div className="absolute top-40 h-24 w-24 xl:h-48 xl:w-48">
        <img
          className="h-24 w-24 cursor-pointer rounded-full shadow-xl transition duration-500 hover:shadow-white/20 xl:h-48 xl:w-48"
          src="logo.png"
          alt={`lightsuite logo`}
        />
      </div>
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
              project.title.includes("light") ? (
                <SwiperSlide key={project?._id}>
                  <AppCard project={project} />
                </SwiperSlide>
              ) : null
            )}
          </Swiper>
        </div>
        <div className="hidden space-x-6 lg:flex">
          {projects?.map((project) =>
            project.title.includes("light") ? (
              <AppCard project={project} />
            ) : null
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default LightSuite;
