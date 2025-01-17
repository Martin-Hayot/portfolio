import React, { useEffect, useRef, useState } from "react";
import { MobileToggle } from "./mobile-toggle";
import { useScroll, motion, useAnimation, useTransform } from "motion/react";

const NavBar: React.FC = () => {
    const ref = useRef(null);
    const controls = useAnimation();
    const { scrollY } = useScroll();
    const blur = useTransform(scrollY, [0, 500], [0, 20]);

    useEffect(() => {
        const unsubscribe = scrollY.on("change", (value) => {
            if (value > 250) {
                controls.start({
                    backdropFilter: `blur(${blur.get()}px)`,
                    backgroundColor: "rgba(0,0,0,0.3)",
                });
            } else {
                controls.start({
                    backdropFilter: "blur(0px)",
                    backgroundColor: "rgba(0,0,0,0)",
                });
            }
        });
        return () => unsubscribe();
    }, [scrollY, controls]);

    return (
        <motion.div
            ref={ref}
            animate={controls}
            className={`fixed overflow-hidden top-0 w-full z-50 `}
        >
            <nav className="flex poppins-regular items-center text-xl justify-between text-white py-6 px-2 md:px-6 mx-5 md:mx-10">
                <a
                    href="/"
                    className="z-30 text-2xl md:text-3xl ease-out transition-all duration-300"
                >
                    Martin Hayot
                </a>
                <div className="hidden lg:flex space-x-10 lg:space-x-12 xl:space-x-16">
                    <a href="/projects">Projects</a>
                    <a href="/blog">Blog</a>
                    <a href="/contact">Contact me</a>
                </div>
                <div className="lg:hidden z-20">
                    <MobileToggle />
                </div>
            </nav>
        </motion.div>
    );
};

export default NavBar;
