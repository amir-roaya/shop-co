"use client";

import Reveal from "@/components/ui/Reveal";
import { useEffect } from "react";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main>
      <div className="container">
        <Reveal delay={200}>
          <div className="header-line"></div>
        </Reveal>

        <div className="flex flex-col items-center gap-6 my-16">
          <Reveal direction="up" delay={400}>
            <h1 className="text-xl sm:text-3xl font-integral-cf space-x-1 sm:space-x-3">
              <span className="text-red-600">!!!</span>
              <span>Something went wrong</span>
            </h1>
          </Reveal>

          <Reveal direction="up" delay={600}>
            <p className="text-lg sm:text-2xl text-text-secondary">
              An unexpected error occurred. Please try again later.
            </p>
          </Reveal>

          <Reveal direction="up" delay={800}>
            <button
              onClick={reset}
              className="bg-black text-white border py-3 px-4 rounded-xl main-transition hover:bg-bg-secondary hover:text-black"
            >
              Try Again
            </button>
          </Reveal>
        </div>
      </div>
    </main>
  );
}
