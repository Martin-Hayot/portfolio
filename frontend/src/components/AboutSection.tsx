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
    return (
        <motion.div
            initial={{ scale: 0.95 }}
            whileInView={{
                scale: 1,
                transition: { duration: 0.5 },
            }}
            className="w-full flex flex-col justify-center items-center z-10"
        >
            <div
                className="mx-auto bg-neutral-900 bg-opacity-80 w-[80%] rounded-3xl shadow-1xl overflow-hidden"
                id="about-me"
            >
                <div className="flex flex-col xl:flex-row h-full">
                    <div className="p-8 md:pr-20 pb-16">
                        <h2 className="text-4xl 3xl:text-5xl text-white text-left">
                            About me
                        </h2>
                        <p className="text-xl 3xl:text-2xl pt-8">
                            Hey there! I'm Martin, a tech enthusiast who thrives
                            on solving problems through code. I love diving into
                            complex challenges, learning new technologies, and
                            continuously improving my skills.
                        </p>
                        {/* <p className="text-xl 3xl:text-2xl pt-6">
                            I recently completed my{" "}
                            <b>
                                Bachelor’s degree in Computer Science (IT
                                specialization)
                            </b>{" "}
                            at{" "}
                            <a
                                href="https://ephec.be"
                                target="_blank"
                                className="text-violet-600"
                            >
                                EPHEC
                            </a>
                            , where I developed strong skills in:
                        </p>
                        <div className="text-xl 3xl:text-2xl pt-8">
                            <ul className="list-disc list-inside">
                                <li>Fullstack web development</li>
                                <li>Low-level programming</li>

                                <li>Database management</li>
                                <li>Networking & cybersecurity</li>
                                <li>Electronics & project management</li>
                            </ul>
                        </div> */}
                        <p className="text-xl 3xl:text-2xl pt-8">
                            I'm also a <b>self-taught developer</b>, always
                            looking for new challenges and opportunities to
                            expand my knowledge.
                        </p>
                        <div className="text-xl 3xl:text-2xl pt-8">
                            💡 What I love working on:
                            <ul className="list-disc list-inside">
                                <li>APIs & backend development</li>

                                <li>
                                    Building scalable & efficient applications
                                </li>
                                <li>Experimenting with new technologies</li>
                            </ul>
                            <br />
                            Recently, I've been working a lot with{" "}
                            <a
                                href="https://go.dev"
                                target="_blank"
                                className="text-violet-600"
                            >
                                Go
                            </a>
                            , and I’m focused on building my expertise to create
                            high-performance backend systems.
                        </div>
                    </div>
                    <div className="bg-white flex justify-center items-center">
                        <img
                            src="/astro_on_computer.jpg"
                            className="md:w-[40em] rounded-3xl"
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default AboutSection;
