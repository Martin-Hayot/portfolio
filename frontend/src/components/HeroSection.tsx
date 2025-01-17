import StarField from "./StarField";
import "./HeroSection.css";
import { useScroll, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

const HeroSection = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event: React.MouseEvent) => {
        const { clientX, clientY } = event;
        setCursorPosition({ x: clientX, y: clientY });
    };
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "end start"],
    });

    // Parallax translation
    const translateY = useTransform(scrollYProgress, [0.1, 1], [0, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.5]);

    return (
        <motion.div
            ref={ref}
            className="h-screen overflow-hidden top-0 w-full z-10"
            style={{
                translateY: translateY,
                opacity: opacity,
            }}
            onMouseMove={handleMouseMove}
        >
            <motion.div
                className="absolute z-50 w-[500px] h-[500px] bg-gradient-radial from-orange-500/20 via-transparent to-transparent rounded-full opacity-90 blur-3xl pointer-events-none"
                style={{
                    top: cursorPosition.y - 250, // Offset by half the size of the light
                    left: cursorPosition.x - 250,
                }}
                animate={{
                    top: cursorPosition.y - 250,
                    left: cursorPosition.x - 250,
                }}
                transition={{
                    type: "tween",
                    duration: 0.1,
                }}
            />
            <header className="h-screen overflow-x-hidden">
                <div className="relative">
                    <StarField />
                    <div className="absolute w-full h-screen">
                        <div className="absolute top-0 left-0 h-[134px] w-[134px] md:h-[200px] md:w-[200px] lg:w-[300px] lg:h-[300px] 3xl:w-[380px] 3xl:h-[380px] rounded-full bg-orange-500 blur-[150px] md:blur-[350px] opacity-70"></div>
                        <div className="absolute bottom-0 right-20 h-[134px] w-[134px] md:w-[300px] md:h-[300px] 3xl:w-[380px] 3xl:h-[380px] rounded-full bg-violet-500 blur-[150px] md:blur-[350px] opacity-70"></div>
                    </div>
                </div>

                <motion.div
                    style={{
                        opacity: opacity,
                        scale,
                    }}
                    className="flex flex-col justify-center items-center mx-2 lg:flex-row"
                >
                    <h1 className="text-6xl xl:text-8xl 3xl:text-[10rem] md:text-8xl text-white text-center pt-10 lg:text-left lg:pt-40 lg:mt-20 lg:ml-20 z-10">
                        <span>Welcome to</span>
                        <br />
                        <span className="lg:pl-20 bg-gradient-to-br from-orange-500 from-10% to-purple-600 inline-block text-transparent bg-clip-text">
                            Martin's space
                        </span>
                    </h1>
                    <div className="flex relative mx-auto mt-20 md:mt-32 lg:mt-60 3xl:mt-72">
                        <img
                            src="astro_earth.png"
                            className="h-48 w-48 md:w-60 md:h-60 3xl:w-80 3xl:h-80"
                        />
                        <img
                            src="martin-circle.jpg"
                            className="absolute w-16 h-16 left-16 top-16 rounded-full animate-orbit-sm z-0 md:hidden cursor-pointer"
                        />
                        <img
                            src="martin-circle.jpg"
                            className="hidden absolute w-20 h-20 left-20 top-20 md:block xl:hidden rounded-full animate-orbit-md z-0 cursor-pointer"
                        />
                        <img
                            src="martin-circle.jpg"
                            className="hidden xl:block 3xl:hidden w-24 h-24 animate-orbit-lg rounded-full absolute left-20 top-20 z-0 cursor-pointer"
                        />
                        <img
                            src="martin-circle.jpg"
                            className="hidden 3xl:block w-24 h-24 animate-orbit-xl rounded-full absolute left-24 top-24 z-0 cursor-pointer"
                        />
                    </div>
                </motion.div>
            </header>
            <div
                className="cursor-pointer hidden lg:block -mt-32 3xl:-mt-32"
                onClick={() =>
                    document
                        .getElementById("about")
                        ?.scrollIntoView({ behavior: "smooth" })
                }
            >
                <div className="loader relative mx-auto"></div>
                <p className="hidden relative text-neutral-200 md:block md:text-xl md:text-center md:mt-2">
                    scroll down
                </p>
            </div>
        </motion.div>
    );
};

export default HeroSection;
