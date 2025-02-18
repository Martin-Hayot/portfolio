import type { ProjectsProps } from "data";
import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";

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
                className="relative w-full mx-4 md:mx-0 md:w-[1000px] h-[600px] rounded-2xl overflow-hidden bg-neutral-900"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Background Image */}
                <motion.img
                    src={projectImg}
                    alt="Project Preview"
                    className="absolute inset-0 w-full h-full md:h-fit object-cover z-0 transition-opacity duration-300"
                    style={{
                        opacity: isHovered ? 0.2 : 1,
                        filter: isHovered ? "brightness(0.8)" : "brightness(1)",
                    }}
                />

                {/* Button (Appears on Hover) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex justify-center items-center"
                >
                    <motion.button
                        whileTap={{ backgroundColor: "#fff" }}
                        className="border-2 border-white text-white px-5 py-2 rounded-lg text-xl bg-transparent"
                    >
                        Learn more
                    </motion.button>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Card;
