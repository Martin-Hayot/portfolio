import { projects } from "data";
import Card from "./Card";
import { useEffect, useRef } from "react";
import { Layers } from "lucide-react";

const Projects = () => {
    const stackRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const stack = stackRef.current;
        if (!stack) return;

        const wraps = Array.from(stack.querySelectorAll<HTMLElement>("[data-card-wrap]"));
        const cards = Array.from(stack.querySelectorAll<HTMLElement>("[data-stack-card]"));
        const shades = Array.from(stack.querySelectorAll<HTMLElement>("[data-stack-shade]"));
        const n = cards.length;
        if (!n) return;

        const peek = 30;
        const step = 0.09;
        const minScale = 0.82;

        let desktop = false;
        // Scroll offset (from the top of the stack) at which each card sticks
        let stickAt: number[] = [];

        // Things that only change on resize: kept out of the per-frame path
        const layout = () => {
            desktop = window.innerWidth >= 768;
            const gapTop = Math.round(window.innerHeight * 0.07);

            // Natural position of each card in the flow, minus where it sticks
            let offset = parseFloat(getComputedStyle(stack).paddingTop) || 0;
            stickAt = wraps.map((wrap, i) => {
                const at = offset - (gapTop + i * peek);
                offset += wrap.offsetHeight;
                return at;
            });

            cards.forEach((card, i) => {
                wraps[i].style.top = desktop ? gapTop + i * peek + "px" : "";
                card.style.zIndex = desktop ? String(i + 1) : "";
                if (!desktop) {
                    card.style.transform = "";
                    shades[i].style.opacity = "";
                }
            });
        };

        const render = () => {
            frame = 0;
            if (!desktop) return;

            // frontF = i exactly when card i sticks, so each card shrinks
            // in step with the next one sliding over it
            const scrolled = -stack.getBoundingClientRect().top;
            let frontF = 0;
            if (scrolled >= stickAt[n - 1]) frontF = n - 1;
            else {
                for (let i = 0; i < n - 1; i++) {
                    if (scrolled < stickAt[i + 1]) {
                        const span = Math.max(1, stickAt[i + 1] - stickAt[i]);
                        frontF = i + Math.max(0, (scrolled - stickAt[i]) / span);
                        break;
                    }
                }
            }

            cards.forEach((card, i) => {
                const depth = Math.max(0, frontF - i);
                const scale = Math.max(minScale, 1 - depth * step);
                const ty = -Math.min(depth, 4) * 13;
                card.style.transform = `translateY(${ty}px) scale(${scale})`;
                shades[i].style.opacity = String(Math.min(0.45, depth * 0.24));
            });
        };

        // At most one render per frame, however many scroll events fire
        let frame = 0;
        const schedule = () => {
            if (!frame) frame = requestAnimationFrame(render);
        };
        const onResize = () => {
            layout();
            schedule();
        };

        // Catches height changes from late-loading images and fonts too
        const resizeObserver = new ResizeObserver(onResize);
        resizeObserver.observe(stack);
        window.addEventListener("scroll", schedule, { passive: true });
        window.addEventListener("resize", onResize);
        onResize();

        return () => {
            resizeObserver.disconnect();
            window.removeEventListener("scroll", schedule);
            window.removeEventListener("resize", onResize);
            cancelAnimationFrame(frame);
        };
    }, []);

    return (
        <section id="projects" className="relative isolate">
            {/* Nebula + stars, clipped to this section */}
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none z-0">
                <div
                    className="absolute inset-0"
                    style={{
                        background: `radial-gradient(1000px 700px at 80% 4%, rgba(99,102,241,0.13), transparent 60%),
                            radial-gradient(900px 760px at 8% 38%, rgba(124,58,237,0.14), transparent 62%),
                            radial-gradient(1000px 760px at 62% 98%, rgba(76,29,149,0.12), transparent 60%)`,
                    }}
                />
                <div
                    className="absolute inset-0 opacity-40"
                    style={{
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

            {/* Top fade from previous section */}
            <div
                aria-hidden="true"
                className="absolute top-0 left-0 right-0 h-[60vh] z-1 pointer-events-none"
                style={{ background: "linear-gradient(to bottom, #0a0a0a 0%, rgba(10,10,10,0.55) 40%, transparent 100%)" }}
            />
            {/* Bottom fade back to black */}
            <div
                aria-hidden="true"
                className="absolute bottom-0 left-0 right-0 h-[40vh] z-1 pointer-events-none"
                style={{ background: "linear-gradient(to top, #0a0a0a 0%, transparent 100%)" }}
            />

            {/* Section header */}
            <header className="relative z-2 w-[80%] lg:max-w-7xl mx-auto pt-22 pb-5">
                <div className="flex items-center gap-4">
                    <span className="inline-flex items-center gap-2.75">
                        <Layers size={22} color="#a78bfa" />
                        <span className="text-[30px] font-bold tracking-[-0.01em] text-[#fafafa]">
                            Projects
                        </span>
                    </span>
                    <span className="flex-1 h-px bg-white/12" />
                </div>
            </header>

            {/* Scroll-stacking deck */}
            <div ref={stackRef} data-stack className="relative z-2 pt-20">
                {projects.map((project) => (
                    <Card key={project.num} {...project} />
                ))}
            </div>

            <div className="relative z-2 h-[12vh]" />
        </section>
    );
};

export default Projects;
