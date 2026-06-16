import { projects } from "data";
import Card from "./Card";
import { useEffect, useRef } from "react";
import { Layers } from "lucide-react";

const Projects = () => {
    const stackRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const stack = stackRef.current;
        if (!stack) return;

        const update = () => {
            const wraps =
                stack.querySelectorAll<HTMLElement>("[data-card-wrap]");
            const cards =
                stack.querySelectorAll<HTMLElement>("[data-stack-card]");
            const n = cards.length;
            if (!n) return;

            const vh = window.innerHeight;
            const gapTop = Math.round(vh * 0.07); // where the top card pins
            const peek = 30; // how far each card peeks below the previous
            const step = 0.09; // scale reduction per card stacked on top
            const minScale = 0.82;

            // overall scroll progress across the whole deck (0 .. 1)
            const rect = stack.getBoundingClientRect();
            const scrollable = Math.max(1, stack.offsetHeight - vh);
            let progress = -rect.top / scrollable;
            progress = Math.max(0, Math.min(1, progress));
            // map so each card-to-card transition uses an even slice of scroll
            let frontF = progress * n;
            frontF = Math.max(0, Math.min(n - 1, frontF));

            cards.forEach((card, i) => {
                const wrap = wraps[i];
                // stagger the pin so each card lands lower than the previous
                wrap.style.top = gapTop + i * peek + "px";

                // depth = how many cards are now stacked in front of card i
                const depth = Math.max(0, frontF - i);
                const scale = Math.max(minScale, 1 - depth * step);
                // receding cards drift up slightly so the peeking header is tight
                const ty = -Math.min(depth, 4) * 13;
                card.style.transform = `translateY(${ty}px) scale(${scale})`;
                // dim buried cards so the active one pops
                card.style.filter =
                    depth > 0
                        ? `brightness(${Math.max(0.55, 1 - depth * 0.24)})`
                        : "none";
                card.style.zIndex = String(i + 1);
            });
        };

        window.addEventListener("scroll", update, { passive: true });
        window.addEventListener("resize", update);
        // run a few times as layout/images settle
        update();
        const raf = requestAnimationFrame(update);
        const t = window.setTimeout(update, 300);

        return () => {
            window.removeEventListener("scroll", update);
            window.removeEventListener("resize", update);
            cancelAnimationFrame(raf);
            window.clearTimeout(t);
        };
    }, []);

    return (
        <section
            id="projects"
            style={{ position: "relative", isolation: "isolate" }}
        >
            <style>{`
                .psc-cta-primary { transition: transform .18s ease, box-shadow .18s ease, background .18s ease; }
                .psc-cta-primary:hover { transform: translateY(-2px); background: #ffffff; box-shadow: 0 14px 30px -12px rgba(0,0,0,0.85); }
                .psc-cta-ghost { transition: background .18s ease, border-color .18s ease; }
                .psc-cta-ghost:hover { background: rgba(255,255,255,0.10); border-color: rgba(255,255,255,0.22); }
                .psc-media:hover .psc-shot { transform: translateY(calc(-100% + 360px)); }
                @media (max-width: 880px) {
                    .psc-card { flex-direction: column; }
                    .psc-info { width: 100% !important; padding: 28px 24px !important; }
                    .psc-media { width: 100% !important; min-height: 320px; padding: 0 20px 0 20px !important; }
                }
            `}</style>

            {/* ambient nebula + stars — absolutely positioned so the gradient
                stays clipped to this section and never bleeds into the
                contact section / footer below it */}
            <div
                aria-hidden="true"
                style={{
                    position: "absolute",
                    inset: 0,
                    pointerEvents: "none",
                    zIndex: 0,
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background: `radial-gradient(1000px 700px at 80% 4%, rgba(99,102,241,0.13), transparent 60%),
                            radial-gradient(900px 760px at 8% 38%, rgba(124,58,237,0.14), transparent 62%),
                            radial-gradient(1000px 760px at 62% 98%, rgba(76,29,149,0.12), transparent 60%)`,
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        opacity: 0.4,
                        backgroundImage: `radial-gradient(1.4px 1.4px at 18% 22%, rgba(255,255,255,0.9), transparent),
                            radial-gradient(1.2px 1.2px at 62% 14%, rgba(255,255,255,0.7), transparent),
                            radial-gradient(1.6px 1.6px at 84% 36%, rgba(255,255,255,0.8), transparent),
                            radial-gradient(1.2px 1.2px at 34% 58%, rgba(255,255,255,0.6), transparent),
                            radial-gradient(1.4px 1.4px at 72% 72%, rgba(255,255,255,0.8), transparent),
                            radial-gradient(1.1px 1.1px at 9% 78%, rgba(255,255,255,0.6), transparent),
                            radial-gradient(1.5px 1.5px at 48% 88%, rgba(255,255,255,0.7), transparent)`,
                    }}
                />
            </div>

            {/* fade the previous black section smoothly into the nebula */}
            <div
                aria-hidden="true"
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "60vh",
                    zIndex: 1,
                    pointerEvents: "none",
                    background:
                        "linear-gradient(to bottom, #0a0a0a 0%, rgba(10,10,10,0.55) 40%, transparent 100%)",
                }}
            />
            {/* fade the nebula back to black at the end of the section */}
            <div
                aria-hidden="true"
                style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "40vh",
                    zIndex: 1,
                    pointerEvents: "none",
                    background:
                        "linear-gradient(to top, #0a0a0a 0%, transparent 100%)",
                }}
            />

            {/* ===== Section intro (minimal) ===== */}
            <header
                className="w-[80%] lg:max-w-7xl mx-auto"
                style={{
                    position: "relative",
                    zIndex: 2,
                    paddingTop: "88px",
                    paddingBottom: "20px",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "16px",
                    }}
                >
                    <span
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "11px",
                        }}
                    >
                        <Layers size={22} color="#a78bfa" />
                        <span
                            style={{
                                fontSize: "30px",
                                fontWeight: 700,
                                letterSpacing: "-0.01em",
                                color: "#fafafa",
                            }}
                        >
                            Projects
                        </span>
                    </span>
                    <span
                        style={{
                            flex: 1,
                            height: "1px",
                            background: "rgba(255,255,255,0.12)",
                        }}
                    />
                </div>
            </header>

            {/* ===== Scroll-stacking cards ===== */}
            <div
                ref={stackRef}
                data-stack
                style={{
                    position: "relative",
                    zIndex: 2,
                    paddingTop: "80px",
                }}
            >
                {projects.map((project) => (
                    <Card key={project.num} {...project} />
                ))}
            </div>

            <div style={{ position: "relative", zIndex: 2, height: "12vh" }} />
        </section>
    );
};

export default Projects;
