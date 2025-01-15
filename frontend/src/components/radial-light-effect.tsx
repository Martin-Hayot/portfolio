import { motion } from "motion/react";
import { useState } from "react";

const RadialLightEffect = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event: React.MouseEvent) => {
        const { clientX, clientY } = event;
        setCursorPosition({ x: clientX, y: clientY });
    };

    return (
        <div
            className="h-full bg-transparent overflow-hidden"
            onMouseMove={handleMouseMove}
        ></div>
    );
};

export default RadialLightEffect;
