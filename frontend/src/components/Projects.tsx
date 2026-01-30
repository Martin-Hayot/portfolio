import { projects } from "data";
import Card from "./Card";
import { useRef } from "react";
import { useScroll, motion, useTransform } from "motion/react";
import { Layers } from "lucide-react";

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

    const opacity = useTransform(opacityScroll, [0, 0.3], [0, 1]);

    // make opacity 0 from a certain treshold and go to 1
    const opacityMin = useTransform(opacity, [0.5, 1], [0, 1]);

    return (
        <motion.section
            id="projects"
            ref={container}
            initial={{ opacity: 0 }}
            style={{
                opacity: opacityMin,
                background: `linear-gradient(to bottom,
          rgb(10, 10, 10) 0%,
          rgba(76, 29, 149, 0.06) 10%,
          rgba(76, 29, 149, 0.10) 20%,
          rgba(76, 29, 149, 0.13) 35%,
          rgba(76, 29, 149, 0.15) 50%,
          rgba(76, 29, 149, 0.13) 65%,
          rgba(76, 29, 149, 0.10) 80%,
          rgba(76, 29, 149, 0.05) 90%,
          transparent 100%)`,
            }}
            className="md:mb-64 pt-32 relative"
        >
            <div className="w-[80%] lg:max-w-7xl mx-auto mb-16">
                <div className="flex items-center gap-3">
                    <Layers className="w-6 h-6 text-purple-400" />
                    <h2 className="text-3xl font-bold text-white">Projects</h2>
                    <div className="h-px bg-white/10 flex-1 ml-4" />
                </div>
            </div>

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
