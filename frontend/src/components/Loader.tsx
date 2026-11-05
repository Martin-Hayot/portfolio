import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const Loader = () => {
    const [isPageLoaded, setIsPageLoaded] = useState(false);

    useEffect(() => {
        const handleLoad = () => {
            setTimeout(() => {
                setIsPageLoaded(true);
            }, 200);
        };

        // Check if the page is already loaded
        if (document.readyState === "complete") {
            handleLoad();
        } else {
            // Listen for the load event
            window.addEventListener("load", handleLoad);
        }

        // Cleanup event listener
        return () => {
            window.removeEventListener("load", handleLoad);
        };
    }, []);
    return (
        <div>
            <AnimatePresence>
                {isPageLoaded ? null : (
                    <motion.div
                        // exit animation
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="fixed h-screen w-screen z-50 bg-[#04060d] flex flex-col gap-2 justify-center items-center"
                    >
                        {/* Eclipse: a dark planet with a crescent of light
                            sweeping around its rim. Plain CSS animations, so
                            it moves before React hydrates. */}
                        <div
                            className="relative w-16 h-16"
                            aria-label="Loading"
                            role="status"
                        >
                            <div
                                className="absolute -inset-[2px] rounded-full animate-spin [animation-duration:1.8s]"
                                style={{
                                    background:
                                        "conic-gradient(from 0deg, transparent 0deg, rgba(255,255,255,0.9) 60deg, transparent 140deg)",
                                    filter: "blur(1px)",
                                }}
                            />
                            <div
                                className="absolute inset-0 rounded-full"
                                style={{
                                    background:
                                        "radial-gradient(circle at 40% 35%, #1c1c22, #07070a 70%)",
                                }}
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Loader;
