"use client";

import React, { useEffect, useRef } from "react";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  threshold?: number;
  className?: string;
  requireScroll?: boolean;
};

export default function Reveal({
  children,
  delay = 0,
  direction = "none",
  threshold = 0.25,
  className,
  requireScroll,
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

    const handleScroll = () => {
      observer.observe(element);
    };

    if (requireScroll) {
      window.addEventListener("scroll", handleScroll, { once: true });
    } else {
      observer.observe(element);
    }

    return () => {
      observer.disconnect();

      if (requireScroll) {
        window.addEventListener("scroll", handleScroll);
      }
    };
  }, [delay, threshold, requireScroll]);

  return (
    <div
      ref={revealRef}
      className={`reveal reveal-${direction} ${className ? className : ""}`}
    >
      {children}
    </div>
  );
}
