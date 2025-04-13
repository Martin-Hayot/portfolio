import type { ProjectsProps } from "data";
import { motion, MotionValue, useTransform } from "motion/react";
import { useState } from "react";

interface CardProps extends ProjectsProps {
    index: number;
    range: number[];
    targetScale: number;
    progress: MotionValue<number>;
}

const Card = ({
    body,
    description,
    href,
    projectImg,
    techStack,
    title,
    linkMessage,
    linkToPreview,
    color,
    index,
    range,
    progress,
    targetScale,
}: CardProps) => {
    const scale = useTransform(progress, range, [1, targetScale]);
    const [isHovered, setIsHovered] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="h-screen flex justify-center items-center sticky top-0">
            <motion.div
                style={{ scale, top: `${35 * index}px` }}
                animate={{ rotateX: isOpen ? -180 : 0 }}
                transition={{ duration: 0.6 }}
                className="relative w-full mx-4 md:mx-0 md:w-[1000px] h-[600px] xl:h-[720px] xl:w-[1280px]  rounded-2xl overflow-hidden bg-neutral-800"
            >
                {/* Front Side */}
                <motion.div
                    className={`absolute inset-0 w-full h-full flex flex-col justify-center items-center p-6 transition-opacity duration-300 ${isOpen ? "pointer-events-none opacity-0" : "opacity-100"}`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <motion.img
                        src={projectImg}
                        alt="Project Preview"
                        className="absolute inset-0 w-full h-full md:h-fit object-cover z-0 transition-opacity duration-300"
                        style={{
                            opacity: isHovered ? 0.5 : 1,
                            filter: isHovered
                                ? "brightness(0.4)"
                                : "brightness(1)",
                            transition: "filter 0.4s",
                        }}
                    />
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isHovered ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 flex justify-center items-center"
                    >
                        <motion.button
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: "#fff",
                                color: "#000",
                            }}
                            onClick={() => setIsOpen(true)}
                            className="border-2 border-white text-white px-5 py-2 rounded-lg text-xl bg-transparent"
                        >
                            Learn more
                        </motion.button>
                    </motion.div>
                </motion.div>

                {/* Back Side */}
                <motion.div
                    className={`absolute inset-0 w-full lg:w-[90%] mx-auto h-full p-6 px-10 flex flex-col justify-center items-center text-white transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                    style={{ transform: "rotateX(180deg)" }}
                >
                    <h2 className="text-4xl font-bold mb-5">{title}</h2>
                    <p className="text-base mb-2">{body}</p>
                    <p className="text-sm opacity-75 mb-4">{description}</p>
                    <div className="flex gap-2 flex-wrap mb-4">
                        {techStack.map((tech) => (
                            <a
                                key={tech.name}
                                href={tech.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 border border-neutral-700 px-3 py-1 rounded-lg hover:bg-neutral-700 transition-all duration-100"
                            >
                                <img
                                    src={tech.icon}
                                    alt={tech.name}
                                    className="w-5 h-5"
                                />
                                {tech.name}
                            </a>
                        ))}
                    </div>
                    <div className="mt-4 flex flex-col gap-3 md:flex-row">
                        <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 underline"
                        >
                            Git Repository
                        </a>
                        <a
                            href={linkToPreview}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 underline"
                        >
                            {linkMessage}
                        </a>
                    </div>

                    <button
                        onClick={() => setIsOpen(false)}
                        className="mt-8 px-5 py-2 border-2 border-white rounded-lg hover:bg-white hover:text-neutral-900 transition-all duration-150"
                    >
                        Back
                    </button>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Card;
