import { images } from "../assets/Images";
import { downloadCv } from "../assets/resume";
import { motion } from "framer-motion";
import type { TargetAndTransition } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number): TargetAndTransition => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.3, // stagger each item
      ease: "easeOut",
    },
  }),
};

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 text-white px-6 flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-col lg:flex-row lg:gap-x-16 relative z-10 pt-20 md:pt-32 lg:pt-0 items-center">
        {/* Text Content */}
        <div className="md:w-1/2 flex flex-col justify-center items-center md:items-center lg:items-start text-center lg:text-left">
          <motion.h1
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={0}
            className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-extrabold mb-4 md:whitespace-nowrap"
          >
            Alvin Kris Hermosilla
          </motion.h1>

          <motion.p
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-base sm:text-lg md:text-xl mb-8 max-w-xl mx-auto"
          >
            A passionate educator dedicated to guiding students in building
            strong foundations in learning.
          </motion.p>

          <motion.button
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={2}
            className="bg-white text-indigo-700 font-semibold text-sm sm:text-base md:text-lg px-4 sm:px-6 py-2 sm:py-3 rounded-md shadow-md hover:bg-gray-100 transition w-auto self-center md:self-center lg:self-start"
          >
            <a href={downloadCv} download="Alvin-Kris-Resume">
              Download CV
            </a>
          </motion.button>
        </div>

        {/* Image Container */}
        <div className="flex justify-center w-full md:w-auto relative">
          <img
            src={images.heroImage}
            alt="Hero Illustration"
            className="w-64 sm:w-80 md:w-96 lg:w-150 max-w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
