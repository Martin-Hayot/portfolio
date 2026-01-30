import StarField from "./StarField";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white flex flex-col items-center justify-center">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <StarField starCount={5000} speedFactor={0.02} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 md:px-6 text-center max-w-5xl mx-auto mt-[-5vh]">
        {/* Intro Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="flex items-center px-3 py-1 mb-6 text-sm font-medium tracking-widest text-orange-400 uppercase border border-orange-500/20 rounded-full bg-orange-500/5 backdrop-blur-md">
            Software Architect & Developer
          </span>
        </motion.div>

        {/* Name Title */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight mb-8 leading-tight poppins-bold"
          initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            MARTIN
          </span>
          <br className="md:hidden" />
          <span className="ml-0 md:ml-6 bg-gradient-to-r from-orange-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-sm">
            HAYOT
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="max-w-2xl text-lg md:text-xl text-gray-300/90 mb-10 leading-relaxed font-light tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Developing innovative solutions across the stack.
          <br className="hidden md:block" />
          Based in <span className="text-white font-medium">Belgium</span>,
          creating complex applications <br></br>with care and precision.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a href="#projects">
            <Button
              size="lg"
              className="h-12 px-8 text-base bg-white text-black hover:bg-gray-200 hover:scale-105 transition-all duration-300 rounded-full font-medium"
            >
              View My Work
            </Button>
          </a>
          <a href="/contact">
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-8 text-base border-white/20 text-white bg-white/5 hover:bg-white/10 hover:border-white/40 backdrop-blur-sm rounded-full transition-all duration-300"
            >
              Contact Me
            </Button>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator - Bottom Fixed, Original Style */}
      <div
        className="hidden lg:block absolute bottom-8 left-1/2 -translate-x-1/2 z-20 cursor-pointer"
        onClick={() => {
          const projects = document.getElementById("projects");
          if (projects) projects.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <div className="loader relative mx-auto" />
        <p className="hidden relative text-neutral-200 md:block md:text-xl md:text-center md:mt-2 poppins-regular">
          scroll down
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
