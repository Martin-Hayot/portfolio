import { motion } from "motion/react";
import React, { memo, useEffect, useRef } from "react";

interface Props {
  speedFactor?: number;
  backgroundColor?: string;
  starColor?: [number, number, number];
  starCount?: number;
}

const Starfield = memo((props: Props) => {
  const ref = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | null>(null);

  let {
    speedFactor = 0.05,
    backgroundColor = "black",
    starColor = [255, 255, 255],
    starCount = 5000,
  } = props;

  useEffect(() => {
    const canvas = ref.current;

    if (!canvas) {
      console.error("Could not find canvas element");
      return;
    }

    const c = canvas.getContext("2d");

    if (!c) {
      console.error("Could not get 2d context from canvas element");
      return;
    }

    let w = window.innerWidth;
    let h = window.innerHeight;
    let isRunning = true;

    const setCanvasExtents = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      c.scale(dpr, dpr);
    };

    setCanvasExtents();

    const handleResize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      setCanvasExtents();
    };

    window.addEventListener("resize", handleResize);

    const makeStars = (count: number) => {
      const out = [];
      for (let i = 0; i < count; i++) {
        const s = {
          x: Math.random() * 1600 - 800,
          y: Math.random() * 900 - 450,
          z: Math.random() * 1000,
        };
        out.push(s);
      }
      return out;
    };

    const stars = makeStars(starCount);

    const clear = () => {
      c.fillStyle = backgroundColor;
      c.fillRect(0, 0, canvas.width, canvas.height);
    };

    const putPixel = (x: number, y: number, brightness: number) => {
      const rgb =
        "rgba(" +
        starColor[0] +
        "," +
        starColor[1] +
        "," +
        starColor[2] +
        "," +
        brightness +
        ")";
      c.fillStyle = rgb;
      c.fillRect(x, y, 1, 1);
    };

    const moveStars = (distance: number) => {
      const count = stars.length;
      for (let i = 0; i < count; i++) {
        const s = stars[i];
        s.z -= distance;
        while (s.z <= 1) {
          s.z += 1000;
        }
      }
    };

    let prevTime: number;

    const init = (time: number) => {
      prevTime = time;
      if (isRunning) {
        animationFrameRef.current = requestAnimationFrame(tick);
      }
    };

    const tick = (time: number) => {
      if (!isRunning) return;

      const elapsed = time - prevTime;
      prevTime = time;

      moveStars(elapsed * speedFactor);

      clear();

      const cx = w / 2;
      const cy = h / 2;

      const count = stars.length;
      for (let i = 0; i < count; i++) {
        const star = stars[i];

        const x = cx + star.x / (star.z * 0.001);
        const y = cy + star.y / (star.z * 0.001);

        if (x < 0 || x >= w || y < 0 || y >= h) {
          continue;
        }

        const d = star.z / 1000.0;
        const b = 1 - d * d;

        putPixel(x, y, b);
      }

      animationFrameRef.current = requestAnimationFrame(tick);
    };

    animationFrameRef.current = requestAnimationFrame(init);

    // Cleanup function
    return () => {
      isRunning = false;
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [starColor, backgroundColor, speedFactor, starCount]);

  return (
    <motion.canvas
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      ref={ref}
      id="starfield"
      className="p-0 m-0 absolute inset-0 opacity-100 max-h-screen max-w-screen overflow-hidden pointer-events-none"
    />
  );
});

export default Starfield;
