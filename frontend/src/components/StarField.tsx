import { motion } from "motion/react";
import React, { memo, useEffect, useRef } from "react";

interface Props {
  speedFactor?: number;
  backgroundColor?: string;
  starColor?: [number, number, number];
  starCount?: number;
  // Speed multiplier read every frame (1 = cruise), so callers can warp
  // the field without re-running the effect and regenerating the stars
  warpRef?: React.RefObject<number>;
}

// Stars are drawn in a few batched paths per brightness level instead of
// one fillStyle change per star
const BUCKETS = 5;
// Star size in px, before depth is applied
const BASE_SIZE = 1.3;

const Starfield = memo((props: Props) => {
  const ref = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | null>(null);

  let {
    speedFactor = 0.05,
    backgroundColor = "black",
    starColor = [255, 255, 255],
    starCount = 5000,
    warpRef,
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

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let w = window.innerWidth;
    let h = window.innerHeight;
    let isRunning = true;
    let isVisible = true;

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

    const [r, g, b] = starColor;
    const styles = Array.from(
      { length: BUCKETS },
      (_, i) =>
        `rgba(${r},${g},${b},${Math.min(1, ((i + 0.5) / BUCKETS) * 1.15)})`,
    );
    // Nearer stars (higher buckets) are drawn bigger
    const sizes = Array.from(
      { length: BUCKETS },
      (_, i) => BASE_SIZE * (0.75 + (0.6 * i) / (BUCKETS - 1)),
    );

    const clear = () => {
      c.fillStyle = backgroundColor;
      c.fillRect(0, 0, canvas.width, canvas.height);
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
    let speed = speedFactor;

    const init = (time: number) => {
      prevTime = time;
      if (isRunning) {
        animationFrameRef.current = requestAnimationFrame(tick);
      }
    };

    const tick = (time: number) => {
      if (!isRunning || !isVisible) return;

      // Capped so a long frame doesn't teleport the stars
      const elapsed = Math.min(time - prevTime, 50);
      prevTime = time;

      // Ease toward the requested speed so speeding up feels inertial
      const warp = reduceMotion ? 1 : (warpRef?.current ?? 1);
      speed +=
        (speedFactor * warp - speed) * (1 - Math.exp(-elapsed / 280));
      const distance = elapsed * speed;

      moveStars(distance);

      clear();

      const cx = w / 2;
      const cy = h / 2;
      // Past twice the cruise speed, stars become streaks from where they
      // were ~4 frames (at 60fps) ago. Based on speed, not per-frame
      // distance, so a slow frame rate doesn't streak the resting field.
      const streak = speed > speedFactor * 2;
      const tail = speed * 16 * 4;
      const paths = Array.from({ length: BUCKETS }, () => new Path2D());

      const count = stars.length;
      for (let i = 0; i < count; i++) {
        const star = stars[i];

        const x = cx + star.x / (star.z * 0.001);
        const y = cy + star.y / (star.z * 0.001);

        if (x < 0 || x >= w || y < 0 || y >= h) {
          continue;
        }

        const d = star.z / 1000.0;
        const brightness = 1 - d * d;
        const bucket = Math.min(BUCKETS - 1, (brightness * BUCKETS) | 0);

        if (streak) {
          const tailZ = Math.min(1000, star.z + tail);
          paths[bucket].moveTo(
            cx + star.x / (tailZ * 0.001),
            cy + star.y / (tailZ * 0.001),
          );
          paths[bucket].lineTo(x, y);
        } else {
          const size = sizes[bucket];
          paths[bucket].rect(x - size / 2, y - size / 2, size, size);
        }
      }

      for (let i = 0; i < BUCKETS; i++) {
        if (streak) {
          c.strokeStyle = styles[i];
          c.lineWidth = 1;
          c.stroke(paths[i]);
        } else {
          c.fillStyle = styles[i];
          c.fill(paths[i]);
        }
      }

      animationFrameRef.current = requestAnimationFrame(tick);
    };

    animationFrameRef.current = requestAnimationFrame(init);

    // Stop drawing while the canvas is scrolled out of view
    const observer = new IntersectionObserver(([entry]) => {
      const wasVisible = isVisible;
      isVisible = entry.isIntersecting;
      if (isVisible && !wasVisible && isRunning) {
        animationFrameRef.current = requestAnimationFrame(init);
      }
    });
    observer.observe(canvas);

    // Cleanup function
    return () => {
      isRunning = false;
      observer.disconnect();
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [starColor, backgroundColor, speedFactor, starCount, warpRef]);

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
