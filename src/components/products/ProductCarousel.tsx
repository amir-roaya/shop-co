"use client";

import Image from "next/image";
import Link from "next/link";
import { getRatingWidth } from "@/utils/ratinng";
import { PointerEvent, useLayoutEffect, useRef } from "react";
import Reveal from "../ui/Reveal";
import { Product } from "@/types/product";

type ProductCarouselProps = {
  title: string;
  products: Product[];
};

export default function ProductCarousel({
  title,
  products,
}: ProductCarouselProps) {
  const isDragging = useRef(false);
  const startX = useRef(0);
  const prevTranslate = useRef(0);
  const currentTranslate = useRef(0);
  const listWidth = useRef(0);
  const moved = useRef(false);

  const trackRef = useRef<HTMLDivElement | null>(null);
  const firstSetRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const updateListWidth = () => {
      if (!trackRef.current || !firstSetRef.current) return;

      const carouselGap = parseFloat(
        getComputedStyle(trackRef.current).columnGap,
      );

      listWidth.current =
        firstSetRef.current.getBoundingClientRect().width + carouselGap;
      currentTranslate.current = -listWidth.current;
      prevTranslate.current = -listWidth.current;

      trackRef.current.style.transform = `translate3d(${-listWidth.current}px,0,0)`;
    };

    updateListWidth();

    window.addEventListener("resize", updateListWidth);
    return () => {
      window.removeEventListener("resize", updateListWidth);
    };
  }, []);

  const handlePointerDown = (e: PointerEvent<HTMLDivElement>) => {
    moved.current = false;
    isDragging.current = true;
    startX.current = e.clientX;
  };

  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;

    if (Math.abs(e.clientX - startX.current) > 2) {
      moved.current = true;
      e.currentTarget.setPointerCapture(e.pointerId);
    }

    const delta = e.clientX - startX.current;
    currentTranslate.current = prevTranslate.current + delta;

    if (currentTranslate.current <= -(listWidth.current * 2)) {
      currentTranslate.current += listWidth.current;
      prevTranslate.current = currentTranslate.current;
      startX.current = e.clientX;
    }

    if (currentTranslate.current > -listWidth.current) {
      currentTranslate.current -= listWidth.current;
      prevTranslate.current = currentTranslate.current;
      startX.current = e.clientX;
    }

    if (trackRef.current && moved.current) {
      trackRef.current.style.userSelect = "none";
      trackRef.current.style.pointerEvents = "none";
    }

    trackRef.current!.style.transform = `translate3d(${currentTranslate.current}px,0,0)`;
  };

  const handlePointerUp = (e: PointerEvent<HTMLDivElement>) => {
    isDragging.current = false;
    prevTranslate.current = currentTranslate.current;

    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }

    if (trackRef.current) {
      trackRef.current.style.userSelect = "auto";
      trackRef.current.style.pointerEvents = "auto";
    }
  };

  return (
    <>
      <Reveal direction="up" delay={300} className="text-center">
        <h3 className="font-integral-cf text-3xl">{title}</h3>
      </Reveal>

      {products &&
        (products.length > 0 ? (
          <Reveal delay={500} direction="up">
            <div
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              className="py-10 overflow-x-hidden relative xl:hidden touch-pan-y md:touch-auto"
            >
              <div className="absolute left-0 top-0 w-20 h-full pointer-events-none bg-linear-[to_right,white,transparent] z-10"></div>

              <div ref={trackRef} className="flex gap-5">
                <div ref={firstSetRef} className="flex gap-5">
                  {products.map(
                    ({ id, price, rating, title,thumbnail }, index) => (
                      <div
                        key={`${id}-${index}`}
                        className="flex flex-col gap-1.5 shrink-0 w-56 md:w-66 lg:w-78"
                      >
                        <div className="bg-bg-secondary rounded-2xl flex items-center justify-center h-46 lg:h-57.5">
                          <Image
                            src={thumbnail}
                            width={180}
                            height={180}
                            alt="Product image"
                            className="max-h-full w-auto object-contain"
                          ></Image>
                        </div>

                        <Link
                          href={`/products/${id}`}
                          title={title}
                          className="font-satoshi-bold w-[90%] truncate main-transition hover:text-text-secondary"
                        >
                          {title}
                        </Link>

                        <div className="flex items-center gap-4">
                          <div>
                            <div
                              style={{
                                width: getRatingWidth(rating),
                              }}
                              className="flex items-center gap-1 overflow-hidden"
                            >
                              <div>
                                <svg className="w-3.75 h-3.5">
                                  <use href="#star"></use>
                                </svg>
                              </div>

                              <div>
                                <svg className="w-3.75 h-3.5">
                                  <use href="#star"></use>
                                </svg>
                              </div>

                              <div>
                                <svg className="w-3.75 h-3.5">
                                  <use href="#star"></use>
                                </svg>
                              </div>

                              <div>
                                <svg className="w-3.75 h-3.5">
                                  <use href="#star"></use>
                                </svg>
                              </div>

                              <div>
                                <svg className="w-3.75 h-3.5">
                                  <use href="#star"></use>
                                </svg>
                              </div>
                            </div>
                          </div>

                          <div>
                            <span>{rating}/</span>
                            <span className="text-text-secondary">5</span>
                          </div>
                        </div>

                        <span className="font-satoshi-bold">${price}</span>
                      </div>
                    ),
                  )}
                </div>

                <div className="flex gap-5">
                  {products.map(
                    ({ id, thumbnail, price, rating, title }, index) => (
                      <div
                        key={`${id}-${index}`}
                        className="flex flex-col gap-1.5 shrink-0 w-56 md:w-66 lg:w-78"
                      >
                        <div className="bg-bg-secondary rounded-2xl flex items-center justify-center h-46 lg:h-57.5">
                          <Image
                            src={thumbnail}
                            width={180}
                            height={180}
                            alt="Product image"
                            className="max-h-full w-auto object-contain"
                          ></Image>
                        </div>

                        <Link
                          href={`/products/${id}`}
                          title={title}
                          className="font-satoshi-bold w-[90%] truncate main-transition hover:text-text-secondary"
                        >
                          {title}
                        </Link>

                        <div className="flex items-center gap-4">
                          <div>
                            <div
                              style={{
                                width: getRatingWidth(rating),
                              }}
                              className="flex items-center gap-1 overflow-hidden"
                            >
                              <div>
                                <svg className="w-3.75 h-3.5">
                                  <use href="#star"></use>
                                </svg>
                              </div>

                              <div>
                                <svg className="w-3.75 h-3.5">
                                  <use href="#star"></use>
                                </svg>
                              </div>

                              <div>
                                <svg className="w-3.75 h-3.5">
                                  <use href="#star"></use>
                                </svg>
                              </div>

                              <div>
                                <svg className="w-3.75 h-3.5">
                                  <use href="#star"></use>
                                </svg>
                              </div>

                              <div>
                                <svg className="w-3.75 h-3.5">
                                  <use href="#star"></use>
                                </svg>
                              </div>
                            </div>
                          </div>

                          <div>
                            <span>{rating}/</span>
                            <span className="text-text-secondary">5</span>
                          </div>
                        </div>

                        <span className="font-satoshi-bold">${price}</span>
                      </div>
                    ),
                  )}
                </div>

                <div className="flex gap-5">
                  {products.map(
                    ({ id, thumbnail, price, rating, title }, index) => (
                      <div
                        key={`${id}-${index}`}
                        className="flex flex-col gap-1.5 shrink-0 w-56 md:w-66 lg:w-78"
                      >
                        <div className="bg-bg-secondary rounded-2xl flex items-center justify-center h-46 lg:h-57.5">
                          <Image
                            src={thumbnail}
                            width={180}
                            height={180}
                            alt="Product image"
                            className="max-h-full w-auto object-contain"
                          ></Image>
                        </div>

                        <Link
                          href={`/products/${id}`}
                          title={title}
                          className="font-satoshi-bold w-[90%] truncate main-transition hover:text-text-secondary"
                        >
                          {title}
                        </Link>

                        <div className="flex items-center gap-4">
                          <div>
                            <div
                              style={{
                                width: getRatingWidth(rating),
                              }}
                              className="flex items-center gap-1 overflow-hidden"
                            >
                              <div>
                                <svg className="w-3.75 h-3.5">
                                  <use href="#star"></use>
                                </svg>
                              </div>

                              <div>
                                <svg className="w-3.75 h-3.5">
                                  <use href="#star"></use>
                                </svg>
                              </div>

                              <div>
                                <svg className="w-3.75 h-3.5">
                                  <use href="#star"></use>
                                </svg>
                              </div>

                              <div>
                                <svg className="w-3.75 h-3.5">
                                  <use href="#star"></use>
                                </svg>
                              </div>

                              <div>
                                <svg className="w-3.75 h-3.5">
                                  <use href="#star"></use>
                                </svg>
                              </div>
                            </div>
                          </div>

                          <div>
                            <span>{rating}/</span>
                            <span className="text-text-secondary">5</span>
                          </div>
                        </div>

                        <span className="font-satoshi-bold">${price}</span>
                      </div>
                    ),
                  )}
                </div>
              </div>

              <div className="absolute right-0 top-0 w-20 h-full pointer-events-none bg-linear-[to_left,white,transparent] z-10"></div>
            </div>
          </Reveal>
        ) : (
          <Reveal direction="up" delay={500}>
            <div className="font-satoshi-bold text-black text-center text-2xl my-20 xl:hidden">
              No product found !
            </div>
          </Reveal>
        ))}

      {products &&
        (products.length > 0 ? (
          <div className="hidden products-grid-desktop py-10 gap-5 xl:grid">
            {products.map(({ id, thumbnail, price, rating, title }, index) => (
              <div key={`${id}-${index}`} className="flex flex-col gap-1.5">
                <Reveal delay={500}>
                  <div className="bg-bg-secondary rounded-2xl flex items-center justify-center h-46 lg:h-57.5">
                    <Image
                      src={thumbnail}
                      width={180}
                      height={180}
                      alt="Product image"
                      className="max-h-full w-auto object-contain"
                    ></Image>
                  </div>
                </Reveal>

                <Reveal direction="up" delay={600} className="flex">
                  <Link
                    href={`/products/${id}`}
                    title={title}
                    className="font-satoshi-bold w-[90%] truncate main-transition hover:text-text-secondary"
                  >
                    {title}
                  </Link>
                </Reveal>

                <div className="flex items-center gap-4">
                  <Reveal direction="up" delay={700}>
                    <div>
                      <div
                        style={{
                          width: getRatingWidth(rating),
                        }}
                        className="flex items-center gap-1 overflow-hidden"
                      >
                        <div>
                          <svg className="w-3.75 h-3.5">
                            <use href="#star"></use>
                          </svg>
                        </div>

                        <div>
                          <svg className="w-3.75 h-3.5">
                            <use href="#star"></use>
                          </svg>
                        </div>

                        <div>
                          <svg className="w-3.75 h-3.5">
                            <use href="#star"></use>
                          </svg>
                        </div>

                        <div>
                          <svg className="w-3.75 h-3.5">
                            <use href="#star"></use>
                          </svg>
                        </div>

                        <div>
                          <svg className="w-3.75 h-3.5">
                            <use href="#star"></use>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Reveal>

                  <Reveal direction="up" delay={700}>
                    <div>
                      <span>{rating}/</span>
                      <span className="text-text-secondary">5</span>
                    </div>
                  </Reveal>
                </div>

                <Reveal direction="up" delay={800}>
                  <span className="font-satoshi-bold">${price}</span>
                </Reveal>
              </div>
            ))}
          </div>
        ) : (
          <Reveal direction="up" delay={500}>
            <div className="hidden font-satoshi-bold text-black text-center text-2xl my-20 xl:block">
              No product found !
            </div>
          </Reveal>
        ))}

      <Reveal direction="up" delay={600}>
        <Link
          className="block w-full mx-auto py-3.5 text-center border border-border-color-primary rounded-4xl md:w-[30%] xl:w-59 shadow-main-shadow main-transition hover:bg-black hover:text-white hover:border-[#25ac19]"
          href={"/products"}
        >
          View All
        </Link>
      </Reveal>
    </>
  );
}
