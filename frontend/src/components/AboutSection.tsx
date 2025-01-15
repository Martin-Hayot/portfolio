import {
    motion,
    MotionValue,
    scroll,
    useScroll,
    useTransform,
} from "motion/react";
import { useEffect, useRef } from "react";

function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
}

const AboutSection = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 300);

    return (
        <motion.div className="w-full mt-32 flex flex-col justify-center items-center z-10">
            <main
                className="mx-auto mt-20 bg-neutral-900 bg-opacity-80 w-[80%] rounded-3xl shadow-1xl overflow-hidden"
                id="about-me"
            >
                <div className="flex flex-col xl:flex-row justify-between items-center">
                    <div className="p-8 md:pr-20 pb-16">
                        <h2 className="text-4xl 3xl:text-5xl text-white text-left">
                            About me
                        </h2>
                        <p className="text-xl 3xl:text-2xl pt-8">
                            Hi, my name is Martin. I'm passionate about coding
                            and learning new things.
                            <br />
                            I'm currently studying computer science at{" "}
                            <a
                                href="https://ephec.be"
                                target="_blank"
                                className="text-violet-600"
                            >
                                EPHEC
                            </a>
                            .
                            <br />
                            <br />
                            I'm also a self-taught developer. I'm always looking
                            for new challenges and opportunities to learn new
                            things.
                            <br />
                            <br />
                            My goal is to become a full-stack developer. But I
                            particularly love APIs and backend development.
                            <br />
                            Recently, I've been using{" "}
                            <a
                                href="https://go.dev"
                                target="_blank"
                                className="text-violet-600"
                            >
                                Go
                            </a>{" "}
                            a lot and I'm really looking forward to implement it
                            in my future projects.
                        </p>
                    </div>

                    <img
                        src="/astro_on_computer.jpg"
                        className="md:mb-10 md:h-auto md:rounded-full 2xl:w-[32em] 3xl:w-[32em] 2xl:my-0 2xl:mr-0 2xl:rounded-none md:w-60 xl:mr-16 2xl:h-[32em]"
                    />
                </div>
            </main>
        </motion.div>
    );
};

export default AboutSection;
