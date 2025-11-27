import StarField from "./StarField";
import "./HeroSection.css";
import { useScroll, useTransform, motion } from "motion/react";
import { useRef } from "react";

const CRAWL_CONFIG = {
  // Container height determines scroll duration (higher = slower crawl)
  containerHeight: "250vh",

  // 3D Perspective settings
  perspective: "400px",
  perspectiveOrigin: "50% 0%",

  // Tilt angle in degrees (higher = steeper tilt, looking more "down")
  tiltAngle: 65,

  // Animation mappings
  animation: {
    // How far the text travels (percentage of its height)
    yStart: "0%",
    yEnd: "-150%",

    // Scale reduction as text recedes (1 = full size, 0.4 = 40% of original)
    scaleStart: 1,
    scaleEnd: 0.4,

    // Opacity fade timing [start, holdUntil, end] mapped to scroll progress [0, 1]
    opacityKeyframes: [0, 0.8, 1] as const,
    opacityValues: [1, 1, 0] as const,
  },

  // Content width constraints
  contentWidth: "95%",
  contentMaxWidth: "1400px",

  // Vanishing point fade height (percentage of viewport)
  fadeHeight: "40%",
};

const CRAWL_PARAGRAPHS = [
  "A long time ago, in a galaxy not so far away, a passionate developer embarked on a journey through the vast universe of code...",
  "Welcome to my corner of the digital cosmos. I'm Martin, a software engineer who transforms ideas into reality through the power of programming.",
  "From crafting elegant frontend experiences to architecting robust backend systems, I navigate through the stars of technology with curiosity and determination.",
  "My mission: to build applications that make a difference, solve real problems, and push the boundaries of what's possible.",
  "Join me on this adventure through my portfolio, where you'll discover projects born from creativity, challenges overcome with perseverance, and solutions forged in the fires of innovation.",
  "The force of clean code is strong with this one...",
];

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Title animation - starts centered, moves up and fades
  const titleY = useTransform(scrollYProgress, [0, 0.15], ["0%", "-150%"]);
  const titleScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.6]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.1, 0.15], [1, 1, 0]);

  // The crawl animation - text moves up (starts after title fades)
  const crawlY = useTransform(
    scrollYProgress,
    [0.1, 1],
    [CRAWL_CONFIG.animation.yStart, CRAWL_CONFIG.animation.yEnd],
  );

  // Scale decreases as text moves up (simulates going into distance)
  const crawlScale = useTransform(
    scrollYProgress,
    [0.1, 1],
    [CRAWL_CONFIG.animation.scaleStart, CRAWL_CONFIG.animation.scaleEnd],
  );

  // Opacity fades out as text reaches the "vanishing point"
  const crawlOpacity = useTransform(
    scrollYProgress,
    [0.1, 0.15, 0.8, 1],
    [0, 1, 1, 0],
  );

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ height: CRAWL_CONFIG.containerHeight }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
        {/* Star background */}
        <header className="h-full w-full">
          <div className="relative">
            <StarField />
            <div className="absolute w-full h-screen">
              <div className="absolute top-0 left-0 h-[134px] w-[134px] md:h-[200px] md:w-[200px] lg:w-[300px] lg:h-[300px] 3xl:w-[380px] 3xl:h-[380px] rounded-full bg-orange-500 blur-[150px] md:blur-[350px] opacity-70" />
              <div className="absolute bottom-0 right-20 h-[134px] w-[134px] md:w-[300px] md:h-[300px] 3xl:w-[380px] 3xl:h-[380px] rounded-full bg-violet-500 blur-[150px] md:blur-[350px] opacity-70" />
            </div>
          </div>
        </header>

        {/* Centered Title - appears first */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-10"
          style={{
            y: titleY,
            scale: titleScale,
            opacity: titleOpacity,
          }}
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl poppins-bold text-center">
            <span className="bg-gradient-to-br from-orange-500 from-10% to-purple-600 inline-block text-transparent bg-clip-text">
              MARTIN'S SPACE
            </span>
          </h1>
        </motion.div>

        {/* Star Wars Crawl Effect */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            perspective: CRAWL_CONFIG.perspective,
            perspectiveOrigin: CRAWL_CONFIG.perspectiveOrigin,
          }}
        >
          {/* Crawl content wrapper with 3D tilt */}
          <div
            className="absolute inset-x-0 top-full origin-top"
            style={{
              transformStyle: "preserve-3d",
              transform: `rotateX(${CRAWL_CONFIG.tiltAngle}deg)`,
            }}
          >
            {/* Animated crawl content */}
            <motion.div
              className="mx-auto origin-top"
              style={{
                width: CRAWL_CONFIG.contentWidth,
                maxWidth: CRAWL_CONFIG.contentMaxWidth,
                y: crawlY,
                scale: crawlScale,
                opacity: crawlOpacity,
              }}
            >
              <div className="px-8">
                <div
                  className="poppins-bold text-center leading-relaxed tracking-wide text-white"
                  style={{
                    fontSize: "clamp(2rem, 5vw, 3rem)",
                  }}
                >
                  {CRAWL_PARAGRAPHS.map((paragraph, index) => (
                    <p key={index} className="mb-10">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Fade at the top - vanishing point */}
          <div
            className="absolute top-0 inset-x-0 pointer-events-none z-[5]"
            style={{
              height: CRAWL_CONFIG.fadeHeight,
              background:
                "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0) 100%)",
            }}
          />
        </div>

        {/* Scroll indicator */}
        <div className=" hidden lg:block absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
          <div className="loader relative mx-auto" />
          <p className="hidden relative text-neutral-200 md:block md:text-xl md:text-center md:mt-2 poppins-regular">
            scroll down
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
