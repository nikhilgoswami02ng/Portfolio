"use client";

import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  radius: number;
  baseAlpha: number;
  twinkleSpeed: number;
  phase: number;
};

export default function GalaxyBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let stars: Star[] = [];
    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let animationFrame: number;

    function resize() {
      if (!canvas) return;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      const density = width < 640 ? 0.00065 : 0.00011;
      const count = Math.min(Math.floor(width * height * density), 260);

      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.2 + 0.3,
        baseAlpha: Math.random() * 0.5 + 0.35,
        twinkleSpeed: Math.random() * 0.015 + 0.004,
        phase: Math.random() * Math.PI * 2,
      }));
    }

    function draw(time: number) {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      for (const star of stars) {
        const twinkle = prefersReducedMotion
          ? star.baseAlpha
          : star.baseAlpha +
            Math.sin(time * star.twinkleSpeed + star.phase) * 0.25;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(237, 239, 251, ${Math.max(
          0,
          Math.min(1, twinkle)
        )})`;
        ctx.fill();
      }

      if (!prefersReducedMotion) {
        animationFrame = requestAnimationFrame(draw);
      }
    }

    resize();
    window.addEventListener("resize", resize);

    if (prefersReducedMotion) {
      draw(0);
    } else {
      animationFrame = requestAnimationFrame(draw);
    }

    return () => {
      window.removeEventListener("resize", resize);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="starfield-canvas" aria-hidden="true" />
      {/* Soft nebula glows, fixed, decorative only */}
      <div
        aria-hidden="true"
        className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      >
        <div className="absolute -top-40 -left-32 w-[32rem] h-[32rem] rounded-full bg-accent-blue/10 blur-[120px] animate-driftGlow" />
        <div
          className="absolute top-1/3 -right-40 w-[28rem] h-[28rem] rounded-full bg-accent-violet/10 blur-[130px] animate-driftGlow"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-0 left-1/4 w-[24rem] h-[24rem] rounded-full bg-accent-gold/[0.06] blur-[110px] animate-driftGlow"
          style={{ animationDelay: "4s" }}
        />
      </div>
    </>
  );
}
