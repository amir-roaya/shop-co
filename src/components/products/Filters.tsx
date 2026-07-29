"use client";

import { useFiltersStore } from "@/store/filtersMenuStore";
import { Category, ValidFilters } from "@/types/product";
import { useSearchParams, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import Reveal from "../ui/Reveal";

type FiltersProps = {
  radioName: string;
  validFilters: ValidFilters;
};

export default function Filters({ radioName, validFilters }: FiltersProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [isDressStyleOpen, setIsDressStyleOpen] = useState(true);
  const [category, setCategory] = useState(validFilters.category);

  const [isPriceFilterOpen, setIsPriceFilterOpen] = useState(true);

  const MIN = 0;
  const MAX = 800;

  const [minPrice, setMinPrice] = useState(validFilters.min);
  const [maxPrice, setMaxPrice] = useState(validFilters.max);

  const minPercent = ((minPrice - MIN) / (MAX - MIN)) * 100;
  const maxPercent = ((maxPrice - MIN) / (MAX - MIN)) * 100;

  const toggleFilters = useFiltersStore((state) => state.toggleFilters);

  const applyFilter = useCallback(() => {
    const params = new URLSearchParams(searchParams);

    params.set("category", category);
    params.set("min", String(minPrice));
    params.set("max", String(maxPrice));
    params.set("page", "1");

    router.push(`/products?${params.toString()}`);

    toggleFilters(false);
    setIsDressStyleOpen(false);
    setIsPriceFilterOpen(false);
  }, [category, maxPrice, minPrice, router, searchParams, toggleFilters]);

  useEffect(() => {
    const applyFilterWithEnter = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        applyFilter();
      }
    };

    document.addEventListener("keydown", applyFilterWithEnter);
    return () => {
      document.removeEventListener("keydown", applyFilterWithEnter);
    };
  }, [applyFilter]);

  return (
    <>
      <Reveal delay={500}>
        <div className="border-t border-border-color-primary"></div>
      </Reveal>

      <div className="flex flex-col">
        <button
          onClick={() => setIsDressStyleOpen((prev) => !prev)}
          className={`flex items-center justify-between main-transition ${isDressStyleOpen ? "pt-5" : "py-5"} hover:text-main-hover`}
        >
          <Reveal direction="left" delay={550}>
            <span className="font-satoshi-bold">Dress Style</span>
          </Reveal>

          <Reveal direction="left" delay={600}>
            <div>
              <svg
                className={`w-4 h-4 ${isDressStyleOpen ? "rotate-180" : ""} main-transition`}
              >
                <use href="#chevron-down"></use>
              </svg>
            </div>
          </Reveal>
        </button>

        <ul
          className={`flex flex-col gap-1 overflow-clip max-h-0 py-0 opacity-30 main-transition ${isDressStyleOpen ? "show-dress-style" : ""}`}
        >
          <Reveal direction="up" delay={700}>
            <li>
              <label className="flex items-center justify-between py-2 border border-transparent main-transition rounded-2xl px-1 hover:border-main-hover">
                <input
                  type="radio"
                  name={radioName}
                  className="hidden peer"
                  value={"All"}
                  checked={category === "All"}
                  onChange={(e) => setCategory(e.target.value as Category)}
                />

                <span className="text-text-secondary peer-checked:font-extrabold main-transition">
                  All
                </span>

                <span className="input-marker main-transition after:main-transition peer-checked:bg-[#003566] peer-checked:after:-translate-x-5"></span>
              </label>
            </li>
          </Reveal>

          <Reveal direction="up" delay={750}>
            <li>
              <label className="flex items-center justify-between py-2 border border-transparent main-transition rounded-2xl px-1 hover:border-main-hover">
                <input
                  type="radio"
                  name={radioName}
                  className="hidden peer"
                  value={"beauty"}
                  checked={category === "beauty"}
                  onChange={(e) => setCategory(e.target.value as Category)}
                />

                <span className="text-text-secondary peer-checked:font-extrabold main-transition">
                  Beauty
                </span>

                <span className="input-marker main-transition after:main-transition peer-checked:bg-[#003566] peer-checked:after:-translate-x-5"></span>
              </label>
            </li>
          </Reveal>

          <Reveal direction="up" delay={800}>
            <li>
              <label className="flex items-center justify-between py-2 border border-transparent main-transition rounded-2xl px-1 hover:border-main-hover">
                <input
                  type="radio"
                  name={radioName}
                  className="hidden peer"
                  value={"fragrances"}
                  checked={category === "fragrances"}
                  onChange={(e) => setCategory(e.target.value as Category)}
                />

                <span className="text-text-secondary peer-checked:font-extrabold main-transition">
                  Fragrances
                </span>

                <span className="input-marker main-transition after:main-transition peer-checked:bg-[#003566] peer-checked:after:-translate-x-5"></span>
              </label>
            </li>
          </Reveal>

          <Reveal direction="up" delay={850}>
            <li>
              <label className="flex items-center justify-between py-2 border border-transparent main-transition rounded-2xl px-1 hover:border-main-hover">
                <input
                  type="radio"
                  name={radioName}
                  className="hidden peer"
                  value={"furniture"}
                  checked={category === "furniture"}
                  onChange={(e) => setCategory(e.target.value as Category)}
                />

                <span className="text-text-secondary peer-checked:font-extrabold main-transition">
                  Furniture
                </span>

                <span className="input-marker main-transition after:main-transition peer-checked:bg-[#003566] peer-checked:after:-translate-x-5"></span>
              </label>
            </li>
          </Reveal>

          <Reveal direction="up" delay={900}>
            <li>
              <label className="flex items-center justify-between py-2 border border-transparent main-transition rounded-2xl px-1 hover:border-main-hover">
                <input
                  type="radio"
                  name={radioName}
                  className="hidden peer"
                  value={"groceries"}
                  checked={category === "groceries"}
                  onChange={(e) => setCategory(e.target.value as Category)}
                />

                <span className="text-text-secondary peer-checked:font-extrabold main-transition">
                  Groceries
                </span>

                <span className="input-marker main-transition after:main-transition peer-checked:bg-[#003566] peer-checked:after:-translate-x-5"></span>
              </label>
            </li>
          </Reveal>
        </ul>
      </div>

      <Reveal delay={1000}>
        <div className="border-t border-border-color-primary"></div>
      </Reveal>

      <div className="flex flex-col">
        <button
          onClick={() => setIsPriceFilterOpen((prev) => !prev)}
          className={`flex items-center justify-between main-transition ${isPriceFilterOpen ? "pt-5" : "py-5"} hover:text-main-hover`}
        >
          <Reveal direction="left" delay={1000}>
            <span className="font-satoshi-bold">Price</span>
          </Reveal>

          <Reveal direction="left" delay={1050}>
            <div>
              <svg
                className={`w-4 h-4 main-transition ${isPriceFilterOpen ? "rotate-180" : ""}`}
              >
                <use href="#chevron-down"></use>
              </svg>
            </div>
          </Reveal>
        </button>

        <Reveal direction="up" delay={1200}>
          <div
            className={`relative w-full overflow-y-clip max-h-0 py-0 opacity-30 main-transition ${isPriceFilterOpen ? "show-price-filter" : ""}`}
          >
            <div className="absolute inset-y-0 my-auto w-full h-2 rounded-full bg-bg-secondary"></div>

            <div
              className="absolute inset-y-0 my-auto rounded-full bg-black h-2"
              style={{
                left: `${minPercent}%`,
                right: `${100 - maxPercent}%`,
              }}
            ></div>

            <input
              className={`price-input ${minPrice > maxPrice - 30 ? "z-20" : "z-10"}`}
              type="range"
              min={"0"}
              max={"800"}
              value={minPrice}
              onChange={(e) => {
                const value = Number(e.target.value);
                setMinPrice(Math.min(value, maxPrice - 1));
              }}
            />
            <input
              className="price-input z-10"
              type="range"
              min={"0"}
              max={"800"}
              value={maxPrice}
              onChange={(e) => {
                const value = Number(e.target.value);
                setMaxPrice(Math.max(value, minPrice + 1));
              }}
            />

            <span
              className="absolute font-satoshi-bold text-sm"
              style={{
                left: `${minPercent}%`,
                top: "16%",
                transform: "translateX(-50%)",
              }}
            >
              ${minPrice}
            </span>

            <span
              className="absolute font-satoshi-bold text-sm"
              style={{
                left: `${maxPercent}%`,
                top: "64%",
                transform: "translateX(-70%)",
              }}
            >
              ${maxPrice}
            </span>
          </div>
        </Reveal>
      </div>

      <Reveal direction="up" delay={1300}>
        <button
          onClick={() => applyFilter()}
          className="w-full py-2 text-center bg-black text-white rounded-4xl text-sm lg:text-[18px] lg:py-3"
        >
          Apply Filter
        </button>
      </Reveal>
    </>
  );
}
