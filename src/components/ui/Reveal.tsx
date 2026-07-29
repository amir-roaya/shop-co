"use client";

import React, { useEffect, useRef } from "react";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  threshold?: number;
  className?: string;
};

export default function Reveal({
  children,
  delay = 0,
  direction = "none",
  threshold = 0.25,
  className,
}: RevealProps) {
  const revealRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = revealRef.current;
    if (!element) return;

    element.style.setProperty("--delay", `${delay}ms`);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        element.classList.add("show-reveal");
        observer.unobserve(element);
        element.style.willChange = "auto";
      },
      {
        threshold,
      },
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
    };
  }, [delay, threshold]);

  return (
    <div
      ref={revealRef}
      className={`reveal reveal-${direction} ${className ? className : ""}`}
    >
      {children}
    </div>
  );
}
