import Lenis from "lenis";
import "lenis/dist/lenis.css";

const lenis = new Lenis({
    autoRaf: true,
    // Default 0.1 makes the page trail far behind the wheel
    lerp: 0.2,
});
