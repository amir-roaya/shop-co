"use client";

import { useFiltersStore } from "@/store/filtersMenuStore";
import { Category, ValidFilters } from "@/types/product";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

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
  const MAX = 1000;

  const [minPrice, setMinPrice] = useState(validFilters.min);
  const [maxPrice, setMaxPrice] = useState(validFilters.max);

  const minPercent = ((minPrice - MIN) / (MAX - MIN)) * 100;
  const maxPercent = ((maxPrice - MIN) / (MAX - MIN)) * 100;

  const toggleFilters = useFiltersStore((state) => state.toggleFilters);

  const applyFilter = () => {
    const params = new URLSearchParams(searchParams);

    params.set("category", category);
    params.set("min", String(minPrice));
    params.set("max", String(maxPrice));
    params.set("page", "1");

    router.push(`/products?${params.toString()}`);

    toggleFilters(false);
    setIsDressStyleOpen(false);
    setIsPriceFilterOpen(false);
  };

  return (
    <>
      <div className="border-t border-border-color-primary flex flex-col">
        <button
          onClick={() => setIsDressStyleOpen((prev) => !prev)}
          className={`flex items-center justify-between main-transition ${isDressStyleOpen ? "pt-5" : "py-5"} hover:text-main-hover`}
        >
          <span className="font-satoshi-bold">Dress Style</span>

          <div>
            <svg
              className={`w-4 h-4 ${isDressStyleOpen ? "rotate-180" : ""} main-transition`}
            >
              <use href="#chevron-down"></use>
            </svg>
          </div>
        </button>

        <ul
          className={`flex flex-col gap-1 overflow-clip max-h-0 py-0 opacity-30 main-transition ${isDressStyleOpen ? "show-dress-style" : ""}`}
        >
          <li>
            <label className="flex items-center justify-between py-2 border border-transparent main-transition rounded-2xl px-1 hover:border-main-hover">
              <input
                type="radio"
                name={radioName}
                className="hidden peer"
                value={"All"}
                checked={category === "All"}
                onChange={(e) =>
                  setCategory(e.target.value as Category)
                }
              />

              <span className="text-text-secondary peer-checked:font-extrabold main-transition">
                All
              </span>

              <span className="input-marker main-transition after:main-transition peer-checked:bg-[#003566] peer-checked:after:-translate-x-5"></span>
            </label>
          </li>

          <li>
            <label className="flex items-center justify-between py-2 border border-transparent main-transition rounded-2xl px-1 hover:border-main-hover">
              <input
                type="radio"
                name={radioName}
                className="hidden peer"
                value={"electronics"}
                checked={category === "electronics"}
                onChange={(e) =>
                  setCategory(e.target.value as Category)
                }
              />

              <span className="text-text-secondary peer-checked:font-extrabold main-transition">
                Electronics
              </span>

              <span className="input-marker main-transition after:main-transition peer-checked:bg-[#003566] peer-checked:after:-translate-x-5"></span>
            </label>
          </li>

          <li>
            <label className="flex items-center justify-between py-2 border border-transparent main-transition rounded-2xl px-1 hover:border-main-hover">
              <input
                type="radio"
                name={radioName}
                className="hidden peer"
                value={"men's clothing"}
                checked={category === "men's clothing"}
                onChange={(e) =>
                  setCategory(e.target.value as Category)
                }
              />

              <span className="text-text-secondary peer-checked:font-extrabold main-transition">
                Men&apos;s
              </span>

              <span className="input-marker main-transition after:main-transition peer-checked:bg-[#003566] peer-checked:after:-translate-x-5"></span>
            </label>
          </li>

          <li>
            <label className="flex items-center justify-between py-2 border border-transparent main-transition rounded-2xl px-1 hover:border-main-hover">
              <input
                type="radio"
                name={radioName}
                className="hidden peer"
                value={"women's clothing"}
                checked={category === "women's clothing"}
                onChange={(e) =>
                  setCategory(e.target.value as Category)
                }
              />

              <span className="text-text-secondary peer-checked:font-extrabold main-transition">
                Women&apos;s
              </span>

              <span className="input-marker main-transition after:main-transition peer-checked:bg-[#003566] peer-checked:after:-translate-x-5"></span>
            </label>
          </li>

          <li>
            <label className="flex items-center justify-between py-2 border border-transparent main-transition rounded-2xl px-1 hover:border-main-hover">
              <input
                type="radio"
                name={radioName}
                className="hidden peer"
                value={"jewelery"}
                checked={category === "jewelery"}
                onChange={(e) =>
                  setCategory(e.target.value as Category)
                }
              />

              <span className="text-text-secondary peer-checked:font-extrabold main-transition">
                Jewelery
              </span>

              <span className="input-marker main-transition after:main-transition peer-checked:bg-[#003566] peer-checked:after:-translate-x-5"></span>
            </label>
          </li>
        </ul>
      </div>

      <div className="border-t border-border-color-primary flex flex-col">
        <button
          onClick={() => setIsPriceFilterOpen((prev) => !prev)}
          className={`flex items-center justify-between main-transition ${isPriceFilterOpen ? "pt-5" : "py-5"} hover:text-main-hover`}
        >
          <span className="font-satoshi-bold">Price</span>

          <div>
            <svg
              className={`w-4 h-4 main-transition ${isPriceFilterOpen ? "rotate-180" : ""}`}
            >
              <use href="#chevron-down"></use>
            </svg>
          </div>
        </button>

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
            max={"1000"}
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
            max={"1000"}
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
      </div>

      <button
        onClick={() => applyFilter()}
        className="w-full py-2 text-center bg-black text-white rounded-4xl text-sm lg:text-[18px] lg:py-3"
      >
        Apply Filter
      </button>
    </>
  );
}
