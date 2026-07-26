"use client";

import { fakeComments } from "@/lib/fakeComments";
import { getRatingWidth } from "@/utils/ratinng";
import { useEffect, useRef } from "react";

export default function Comments() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const currentIndex = useRef(fakeComments.length);
  const step = useRef(0);

  useEffect(() => {
    const updateStep = () => {
      if (!trackRef.current) return;

      const firstCard = trackRef.current.firstElementChild as HTMLDivElement;
      if (!firstCard) return;

      const cardWidth = firstCard.getBoundingClientRect().width;
      const cardGap = parseFloat(getComputedStyle(trackRef.current).columnGap);

      step.current = cardWidth + cardGap;

      trackRef.current.style.transition = "none";
      trackRef.current.style.transform = `translate3d(${-(currentIndex.current * step.current)}px,0,0)`;
    };

    updateStep();

    window.addEventListener("resize", updateStep);
    return () => {
      window.removeEventListener("resize", updateStep);
    };
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleTransitionEnd = () => {
      if (currentIndex.current >= fakeComments.length * 2) {
        currentIndex.current -= fakeComments.length;
        track.style.transition = "none";
        track.style.transform = `translate3d(${-(currentIndex.current * step.current)}px,0,0)`;
      }

      if (currentIndex.current < fakeComments.length) {
        currentIndex.current += fakeComments.length;
        track.style.transition = "none";
        track.style.transform = `translate3d(${-(currentIndex.current * step.current)}px,0,0)`;
      }
    };

    track.addEventListener("transitionend", handleTransitionEnd);
    return () => {
      track.removeEventListener("transitionend", handleTransitionEnd);
    };
  }, []);

  const handleNext = () => {
    currentIndex.current++;

    if (!trackRef.current) return;

    trackRef.current.style.transition = "transform 0.4s";
    trackRef.current.style.transform = `translate3d(${-(currentIndex.current * step.current)}px,0,0)`;
  };

  const handlePrev = () => {
    currentIndex.current--;

    if (!trackRef.current) return;

    trackRef.current.style.transition = "transform 0.4s";
    trackRef.current.style.transform = `translate3d(${-(currentIndex.current * step.current)}px,0,0)`;
  };

  return (
    <>
      <div className="flex justify-between items-end">
        <h3 className="font-integral-cf text-3xl">OUR HAPPY CUSTOMERS</h3>

        <div className="flex gap-3">
          <button
            onClick={handlePrev}
            className="rounded-2xl p-0.5 main-transition hover:bg-black/70 hover:text-white"
          >
            <svg>
              <use href="#arrow"></use>
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="rotate-180 rounded-2xl p-0.5 main-transition hover:bg-black/70 hover:text-white"
          >
            <svg>
              <use href="#arrow"></use>
            </svg>
          </button>
        </div>
      </div>

      <div className="mt-7 overflow-x-hidden">
        <div ref={trackRef} className="flex gap-4">
          {[...fakeComments, ...fakeComments, ...fakeComments].map(
            ({ id, rate, name, description }, index) => (
              <div key={`${id}-${index}`} className="comment">
                <div className="flex w-fit">
                  <div
                    style={{
                      width: getRatingWidth(rate),
                    }}
                    className="flex items-center gap-1 overflow-hidden"
                  >
                    <div>
                      <svg className="w-5 h-4.75">
                        <use href="#star"></use>
                      </svg>
                    </div>

                    <div>
                      <svg className="w-5 h-4.75">
                        <use href="#star"></use>
                      </svg>
                    </div>

                    <div>
                      <svg className="w-5 h-4.75">
                        <use href="#star"></use>
                      </svg>
                    </div>

                    <div>
                      <svg className="w-5 h-4.75">
                        <use href="#star"></use>
                      </svg>
                    </div>

                    <div>
                      <svg className="w-5 h-4.75">
                        <use href="#star"></use>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <h6 title={name} className="font-satoshi-bold truncate">
                    {name}
                  </h6>

                  <span className="bg-green-600 rounded-full p-0.5">
                    <svg className="w-3.5 h-3.5 text-white">
                      <use href="#check"></use>
                    </svg>
                  </span>
                </div>

                <p className="text-text-secondary text-sm lg:text-[16px]">
                  {description}
                </p>
              </div>
            ),
          )}
        </div>
      </div>
    </>
  );
}
