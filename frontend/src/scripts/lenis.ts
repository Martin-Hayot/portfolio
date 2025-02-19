import Lenis from "lenis";
import "lenis/dist/lenis.css";

const lenis = new Lenis({
    autoRaf: true,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

lenis.on("scroll", (e) => {});
