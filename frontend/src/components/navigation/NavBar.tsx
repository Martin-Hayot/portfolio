import React, { useState } from "react";
import { MobileToggle } from "./mobile-toggle";

const NavBar: React.FC = () => {
    return (
        <>
            <nav className="flex items-center text-2xl justify-between text-white h-20 mx-5 md:mx-10">
                <a
                    href="/"
                    className="hover:scale-105 z-30 text-3xl ease-out transition-all duration-300"
                >
                    Martin Hayot
                </a>
                <div className="hidden lg:flex h-10 space-x-10 lg:space-x-12 xl:space-x-16 lg:pr-6 xl:pr-12">
                    <a
                        href="/projects"
                        className="hover:scale-105 z-30 transition-all duration-100"
                    >
                        Projects
                    </a>
                    <a
                        href="/blog"
                        className="hover:scale-105 z-30 transition-all duration-100"
                    >
                        Blog
                    </a>
                    <a
                        href="/contact"
                        className="hover:scale-105 z-30 transition-all duration-100"
                    >
                        Contact me
                    </a>
                </div>
                <div className="lg:hidden mt-2 z-20">
                    <MobileToggle />
                </div>
            </nav>
        </>
    );
};

export default NavBar;
