import { projects } from "data";
import Card from "./Card";
import { useRef } from "react";
import { useScroll, motion, useTransform } from "motion/react";

const Projects = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"],
    });

    const { scrollYProgress: opacityScroll } = useScroll({
        target: container,
        offset: ["start end", "end end"],
    });

    const opacity = useTransform(opacityScroll, [0, 0.35], [0, 1]);

    return (
        <motion.section
            id="projects"
            ref={container}
            initial={{ opacity: 0 }}
            style={{ opacity: opacity }}
            className="md:mb-64 pt-64 bg-gradient-to-b from-neutral-950 via-violet-900/15 via-[80%] to-transparent"
        >
            {projects.map((project, index) => {
                const targetScale = 1 - (projects.length - index) * 0.05;
                return (
                    <Card
                        key={index}
                        index={index}
                        range={[index * 0.25, 1]}
                        targetScale={targetScale}
                        progress={scrollYProgress}
                        {...project}
                    />
                );
            })}
        </motion.section>
    );
};

export default Projects;
