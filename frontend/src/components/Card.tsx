import type { ProjectsProps } from "data";
import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

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
    return (
        <div className="h-screen flex justify-center items-center sticky top-0">
            <motion.div
                style={{
                    scale,
                    backgroundColor: color,
                    top: ` ${35 * index}px`,
                }}
                className="relative w-full mx-4 md:mx-0 md:w-[1000px] h-[600px] rounded-2xl shadow-2xl"
            >
                <p className="flex justify-center items-center text-center w-full h-full text-4xl font-bold text-white shadow-2xl">
                    Currently in construction
                </p>
            </motion.div>
        </div>
    );
};

export default Card;
