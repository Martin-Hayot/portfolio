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
                        className="fixed h-screen w-screen z-50 bg-neutral-950 flex flex-col gap-2 justify-center items-center"
                    >
                        <svg
                            className="animate-spin h-10 w-10 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            ></circle>
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.009 8.009 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                        </svg>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Loader;
