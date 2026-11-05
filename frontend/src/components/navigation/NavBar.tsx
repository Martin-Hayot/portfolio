import React, { useEffect, useRef, useState } from "react";
import { MobileToggle } from "./mobile-toggle";
import { useScroll, motion, useAnimation, useTransform } from "motion/react";

const getPageName = () => {
    const path = window.location.pathname;
    const pageName = path.split("/").filter(Boolean).pop() || "";
    return pageName;
};

const NavBar: React.FC = () => {
    const ref = useRef(null);
    const controls = useAnimation();
    const { scrollY } = useScroll();
    const [pageName, setPageName] = useState(getPageName);
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

    // Listen for Astro client-side navigation events
    useEffect(() => {
        const handleNavigation = () => {
            setPageName(getPageName());
        };

        // Astro's ClientRouter fires this event after navigation completes
        document.addEventListener("astro:page-load", handleNavigation);

        return () => {
            document.removeEventListener("astro:page-load", handleNavigation);
        };
    }, []);

    const links = [
        { href: "/", label: "Home", key: "" },
        { href: "/blog", label: "Blog", key: "blog" },
    ];

    return (
        <motion.div
            ref={ref}
            animate={controls}
            className="fixed overflow-hidden top-0 w-full z-30"
        >
            <style>{`
                .mh-nav-link { display:inline-flex; align-items:center; gap:9px; color:rgba(255,255,255,0.55); text-decoration:none; transition:color .25s ease; }
                .mh-nav-link:hover { color:#fff; }
                .mh-nav-link.is-active { color:#fff; }
                .mh-nav-cta { display:inline-flex; align-items:center; gap:8px; padding:10px 20px; border-radius:999px; background:#8B5CF6; color:#0b0a06; text-decoration:none; transition:transform .25s ease, box-shadow .25s ease, background .25s ease; }
                .mh-nav-cta:hover { transform:translateY(-2px); background:#9d76f8; box-shadow:0 10px 26px rgba(139,92,246,0.4); }
                .mh-nav-cta .mh-nav-cta-arrow { transition:transform .25s ease; }
                .mh-nav-cta:hover .mh-nav-cta-arrow { transform:translateX(3px); }
            `}</style>
            <nav
                className="flex items-center justify-between text-white py-6 px-6 md:px-12"
                style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
            >
                <a href="/" className="z-30" style={{ textDecoration: "none" }}>
                    <span
                        style={{
                            fontSize: "26px",
                            fontWeight: 700,
                            letterSpacing: "-0.01em",
                            color: "#fff",
                        }}
                    >
                        MH<span style={{ color: "#8B5CF6" }}>.</span>
                    </span>
                </a>
                <div
                    className="hidden lg:flex items-center"
                    style={{
                        gap: "clamp(22px, 2.6vw, 40px)",
                        fontSize: "13px",
                        fontWeight: 600,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                    }}
                >
                    {links.map((link) => {
                        const active = pageName === link.key;
                        return (
                            <a
                                key={link.href}
                                href={link.href}
                                className={`mh-nav-link${active ? " is-active" : ""}`}
                            >
                                {active && (
                                    <span
                                        style={{
                                            width: "6px",
                                            height: "6px",
                                            borderRadius: "50%",
                                            background: "#8B5CF6",
                                            boxShadow: "0 0 10px #8B5CF6",
                                        }}
                                    />
                                )}
                                {link.label}
                            </a>
                        );
                    })}
                    {/* Contact is a section of the home page, not a page:
                        shown as a call to action rather than a nav link */}
                    <a href="/#contact" className="mh-nav-cta">
                        Contact
                        <span
                            className="mh-nav-cta-arrow"
                            style={{ fontFamily: "'Space Mono', monospace" }}
                        >
                            →
                        </span>
                    </a>
                </div>
                <div className="lg:hidden z-20">
                    <MobileToggle />
                </div>
            </nav>
        </motion.div>
    );
};

export default NavBar;
