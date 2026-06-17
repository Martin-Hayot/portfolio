import StarField from "./StarField";
import "./HeroSection.css";

const ACCENT = "#8B5CF6";
const tick = (extra: React.CSSProperties): React.CSSProperties => ({
    position: "absolute",
    background: "rgba(255,255,255,0.35)",
    ...extra,
});

const HeroSection = () => {
    const scrollDown = () => {
        const el = document.getElementById("projects");
        if (el) window.scrollTo({ top: el.offsetTop, behavior: "smooth" });
        else window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
    };

    return (
        <section
            className="hero-grotesk"
            style={{
                position: "relative",
                width: "100%",
                height: "100vh",
                minHeight: "640px",
                overflow: "hidden",
                background: "#04060d",
                color: "#fff",
            }}
        >
            {/* Warp starfield (the site's existing component — same algorithm) */}
            <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
                <StarField
                    starCount={4000}
                    speedFactor={0.04}
                    backgroundColor="#04060d"
                />
            </div>

            {/* Vignette for text contrast */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 1,
                    pointerEvents: "none",
                    background:
                        "radial-gradient(120% 90% at 35% 45%, rgba(4,6,13,0) 30%, rgba(4,6,13,0.55) 78%, rgba(4,6,13,0.85) 100%)",
                }}
            />
            {/* Left scrim for legibility */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 1,
                    pointerEvents: "none",
                    background:
                        "linear-gradient(100deg, rgba(4,6,13,0.92) 0%, rgba(4,6,13,0.78) 30%, rgba(4,6,13,0.32) 56%, rgba(4,6,13,0) 78%)",
                }}
            />

            {/* Porthole with astronaut (right) */}
            <div
                className="hero-porthole"
                style={{
                    position: "absolute",
                    zIndex: 5,
                    right: "clamp(40px, 8vw, 170px)",
                    top: "48%",
                    transform: "translateY(-50%)",
                    width: "clamp(280px, 33vw, 460px)",
                    height: "clamp(280px, 33vw, 460px)",
                    pointerEvents: "none",
                }}
            >
                <div
                    style={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                        animation: "floaty 7s ease-in-out infinite",
                    }}
                >
                    {/* pulsing outer glow */}
                    <div
                        style={{
                            position: "absolute",
                            inset: "-46px",
                            borderRadius: "50%",
                            background:
                                "radial-gradient(circle, rgba(139,92,246,0.20) 0%, rgba(139,92,246,0) 66%)",
                            animation: "pulseGlow 5s ease-in-out infinite",
                        }}
                    />
                    {/* outer dashed ring + cardinal ticks */}
                    <div
                        style={{
                            position: "absolute",
                            inset: "-30px",
                            borderRadius: "50%",
                            border: "1px dashed rgba(255,255,255,0.18)",
                            animation: "ringspin 55s linear infinite",
                        }}
                    >
                        <span
                            style={tick({
                                top: "-5px",
                                left: "50%",
                                width: "2px",
                                height: "11px",
                                marginLeft: "-1px",
                            })}
                        />
                        <span
                            style={tick({
                                bottom: "-5px",
                                left: "50%",
                                width: "2px",
                                height: "11px",
                                marginLeft: "-1px",
                            })}
                        />
                        <span
                            style={tick({
                                left: "-5px",
                                top: "50%",
                                width: "11px",
                                height: "2px",
                                marginTop: "-1px",
                            })}
                        />
                        <span
                            style={tick({
                                right: "-5px",
                                top: "50%",
                                width: "11px",
                                height: "2px",
                                marginTop: "-1px",
                            })}
                        />
                    </div>
                    {/* counter-rotating ring + small body */}
                    <div
                        style={{
                            position: "absolute",
                            inset: "-12px",
                            borderRadius: "50%",
                            border: "1px solid rgba(255,255,255,0.10)",
                            animation: "ringspin 30s linear infinite reverse",
                        }}
                    >
                        <span
                            style={{
                                position: "absolute",
                                bottom: "-4px",
                                left: "50%",
                                width: "8px",
                                height: "8px",
                                marginLeft: "-4px",
                                borderRadius: "50%",
                                background: "rgba(255,255,255,0.6)",
                            }}
                        />
                    </div>
                    {/* accent arc ring */}
                    <div
                        style={{
                            position: "absolute",
                            inset: "-2px",
                            borderRadius: "50%",
                            border: "2px solid transparent",
                            borderTopColor: ACCENT,
                            borderRightColor: ACCENT,
                            animation: "ringspin 14s linear infinite",
                            opacity: 0.95,
                        }}
                    />
                    {/* orbiting accent body (glowing) */}
                    <div
                        style={{
                            position: "absolute",
                            inset: "-2px",
                            borderRadius: "50%",
                            animation: "ringspin 14s linear infinite",
                        }}
                    >
                        <span
                            style={{
                                position: "absolute",
                                top: "-7px",
                                left: "50%",
                                width: "13px",
                                height: "13px",
                                marginLeft: "-6.5px",
                                borderRadius: "50%",
                                background: ACCENT,
                                boxShadow: `0 0 16px ${ACCENT}`,
                            }}
                        />
                    </div>
                    {/* second smaller orbiting body */}
                    <div
                        style={{
                            position: "absolute",
                            inset: "-18px",
                            borderRadius: "50%",
                            animation: "ringspin 22s linear infinite reverse",
                        }}
                    >
                        <span
                            style={{
                                position: "absolute",
                                top: "50%",
                                right: "-4px",
                                width: "6px",
                                height: "6px",
                                marginTop: "-3px",
                                borderRadius: "50%",
                                background: "rgba(167,139,250,0.95)",
                                boxShadow: "0 0 8px rgba(167,139,250,0.9)",
                            }}
                        />
                    </div>
                    {/* image disc */}
                    <div
                        style={{
                            position: "absolute",
                            inset: 0,
                            borderRadius: "50%",
                            overflow: "hidden",
                            boxShadow:
                                "0 0 60px rgba(0,0,0,0.6), inset 0 0 50px rgba(0,0,0,0.5)",
                        }}
                    >
                        <img
                            src="/astro_idle.jpg"
                            alt="Astronaut"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                            }}
                        />
                        <div
                            style={{
                                position: "absolute",
                                inset: 0,
                                background:
                                    "radial-gradient(circle at 50% 38%, rgba(4,6,13,0) 45%, rgba(4,6,13,0.55) 100%)",
                            }}
                        />
                    </div>
                </div>
            </div>

            {/* Main content */}
            <div
                style={{
                    position: "relative",
                    zIndex: 10,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    padding: "0 clamp(30px, 8vw, 130px)",
                    boxSizing: "border-box",
                }}
            >
                {/* Eyebrow */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "16px",
                        marginBottom: "30px",
                        fontFamily: "'Space Mono', monospace",
                        fontSize: "12px",
                        letterSpacing: "0.28em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.62)",
                    }}
                >
                    <span
                        style={{
                            width: "46px",
                            height: "1px",
                            background: ACCENT,
                        }}
                    />
                    {/* <span style={{ color: ACCENT }}>001</span> */}
                    <span>Software Architect</span>
                </div>

                {/* Name */}
                <h1
                    style={{
                        margin: 0,
                        fontWeight: 700,
                        lineHeight: 0.86,
                        letterSpacing: "-0.03em",
                        fontSize: "clamp(3.6rem, 12vw, 12rem)",
                        textShadow: "0 2px 40px rgba(4,6,13,0.85)",
                    }}
                >
                    <span style={{ display: "block", color: "#fff" }}>
                        Martin
                    </span>
                    <span style={{ display: "block", color: ACCENT }}>
                        Hayot
                    </span>
                </h1>

                {/* Role + location */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "14px",
                        marginTop: "34px",
                        fontSize: "clamp(15px, 1.5vw, 19px)",
                        fontWeight: 500,
                        color: "rgba(255,255,255,0.92)",
                    }}
                >
                    <span
                        style={{
                            width: "5px",
                            height: "5px",
                            background: ACCENT,
                            borderRadius: "50%",
                        }}
                    />
                    <span style={{ color: "rgba(255,255,255,0.6)" }}>
                        Belgium
                    </span>
                </div>

                {/* Description */}
                <p
                    style={{
                        maxWidth: "540px",
                        margin: "22px 0 0",
                        fontSize: "clamp(15px, 1.4vw, 17px)",
                        lineHeight: 1.65,
                        fontWeight: 400,
                        color: "rgba(255,255,255,0.74)",
                        textWrap: "pretty",
                    }}
                >
                    I design, architect, and build full-stack systems, turning
                    ideas into scalable, well-structured applications from end
                    to end.
                </p>

                {/* CTAs */}
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        gap: "16px",
                        marginTop: "44px",
                    }}
                >
                    <a
                        href="#projects"
                        className="hero-cta-primary"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "12px",
                            padding: "16px 30px",
                            borderRadius: "999px",
                            background: ACCENT,
                            color: "#0b0a06",
                            textDecoration: "none",
                            fontSize: "14px",
                            fontWeight: 600,
                            letterSpacing: "0.01em",
                        }}
                    >
                        Explore Work
                        <span style={{ fontFamily: "'Space Mono', monospace" }}>
                            →
                        </span>
                    </a>
                    <a
                        href="#contact"
                        className="hero-cta-ghost"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "10px",
                            padding: "16px 28px",
                            border: "1px solid rgba(255,255,255,0.24)",
                            borderRadius: "999px",
                            background: "rgba(255,255,255,0.03)",
                            color: "#fff",
                            textDecoration: "none",
                            fontSize: "14px",
                            fontWeight: 500,
                            letterSpacing: "0.01em",
                            backdropFilter: "blur(6px)",
                        }}
                    >
                        Get in touch
                    </a>
                </div>
            </div>

            {/* Scroll indicator (kept) */}
            <div
                onClick={scrollDown}
                className="hidden lg:flex"
                style={{
                    position: "absolute",
                    bottom: "34px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 20,
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "14px",
                    cursor: "pointer",
                }}
            >
                <div className="loader" />
                <span
                    style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: "10px",
                        letterSpacing: "0.3em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.55)",
                    }}
                >
                    Scroll
                </span>
            </div>
        </section>
    );
};

export default HeroSection;
