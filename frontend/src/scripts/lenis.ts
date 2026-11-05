import Lenis from "lenis";
import "lenis/dist/lenis.css";

const lenis = new Lenis({
    autoRaf: true,
    // Default 0.1 makes the page trail far behind the wheel
    lerp: 0.2,
});

// Glide to in-page anchors (#projects, #contact...) instead of jumping.
// Astro's ClientRouter handles link clicks on document and jumps instantly,
// so this listens in the capture phase on window to get there first.
window.addEventListener(
    "click",
    (event) => {
        if (
            event.defaultPrevented ||
            event.button !== 0 ||
            event.metaKey ||
            event.ctrlKey ||
            event.shiftKey ||
            event.altKey
        )
            return;

        const link = (event.target as Element | null)?.closest("a");
        if (!link || !link.hash || link.target === "_blank") return;

        const url = new URL(link.href);
        if (
            url.host !== location.host ||
            url.pathname !== location.pathname
        )
            return;

        const target = document.getElementById(
            decodeURIComponent(url.hash.slice(1)),
        );
        if (!target) return;

        event.preventDefault();
        event.stopPropagation();
        lenis.scrollTo(target, { duration: 1.4 });
    },
    { capture: true },
);
