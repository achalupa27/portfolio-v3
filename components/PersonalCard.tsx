import { motion } from "framer-motion";

function PersonalCard() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative cursor-pointer shadow-md transition duration-500 hover:shadow-gray-900/20 dark:hover:shadow-amber-700/20"
    >
      <div className="flex h-[335px] w-[669px] flex-col justify-center rounded-md bg-white">
        <h1 className="sm:font-extrathin cursor-pointer select-none px-10 text-xl font-extralight text-primary dark:uppercase dark:tracking-[7px] dark:text-amber-600 sm:text-3xl md:text-5xl md:font-thin">
          <span className="dark:gradient-gold">Andrew Chalupa</span>
        </h1>
        <h2 className="cursor-pointer select-none pt-1 font-sans text-xs font-light text-primary dark:uppercase dark:tracking-[9px] dark:text-amber-600 sm:text-sm dark:sm:tracking-[15px] md:pt-4">
          <span className="dark:gradient-gold">Software Engineer</span>
        </h2>
      </div>
    </motion.div>
  );
}

export default PersonalCard;
