"use client";

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
        <div className="header-line"></div>

        <div className="flex flex-col items-center gap-6 my-16">
          <h1 className="text-xl sm:text-3xl font-integral-cf space-x-1 sm:space-x-3">
            <span className="text-red-600">!!!</span>
            <span>Something went wrong</span>
          </h1>

          <p className="text-lg sm:text-2xl text-text-secondary">
            An unexpected error occurred. Please try again later.
          </p>

          <button
            onClick={reset}
            className="bg-black text-white border py-3 px-4 rounded-xl main-transition hover:bg-bg-secondary hover:text-black"
          >
            Try Again
          </button>
        </div>
      </div>
    </main>
  );
}
