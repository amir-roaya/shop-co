"use client";

import { useState } from "react";

export default function Filters() {
  const [isDressStyleOpen, setIsDressStyleOpen] = useState(false);

  const MIN = 0;
  const MAX = 250;

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(250);

  const minPercent = ((minPrice - MIN) / (MAX - MIN)) * 100;
  const maxPercent = ((maxPrice - MIN) / (MAX - MIN)) * 100;

  const [isPriceFilterOpen, setIsPriceFilterOpen] = useState(false);

  return (
    <>
      <div className="border-t border-border-color-primary flex flex-col">
        <button
          onClick={() => setIsDressStyleOpen((prev) => !prev)}
          className={`flex items-center justify-between main-transition ${isDressStyleOpen ? "pt-5" : "py-5"}`}
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
            <label className="flex items-center justify-between py-2">
              <input
                type="radio"
                name="dress-style"
                className="hidden peer"
                value={"Casual"}
              />

              <span className="text-text-secondary peer-checked:font-extrabold">
                Casual
              </span>

              <span className="input-marker main-transition after:main-transition peer-checked:bg-[#003566] peer-checked:after:-translate-x-5"></span>
            </label>
          </li>

          <li>
            <label className="flex items-center justify-between py-2">
              <input
                type="radio"
                name="dress-style"
                className="hidden peer"
                value={"Casual"}
              />

              <span className="text-text-secondary peer-checked:font-extrabold">
                Casual
              </span>

              <span className="input-marker main-transition after:main-transition peer-checked:bg-[#003566] peer-checked:after:-translate-x-5"></span>
            </label>
          </li>

          <li>
            <label className="flex items-center justify-between py-2">
              <input
                type="radio"
                name="dress-style"
                className="hidden peer"
                value={"Casual"}
              />

              <span className="text-text-secondary peer-checked:font-extrabold">
                Casual
              </span>

              <span className="input-marker main-transition after:main-transition peer-checked:bg-[#003566] peer-checked:after:-translate-x-5"></span>
            </label>
          </li>

          <li>
            <label className="flex items-center justify-between py-2">
              <input
                type="radio"
                name="dress-style"
                className="hidden peer"
                value={"Casual"}
              />

              <span className="text-text-secondary peer-checked:font-extrabold">
                Casual
              </span>

              <span className="input-marker main-transition after:main-transition peer-checked:bg-[#003566] peer-checked:after:-translate-x-5"></span>
            </label>
          </li>

          <li>
            <label className="flex items-center justify-between py-2">
              <input
                type="radio"
                name="dress-style"
                className="hidden peer"
                value={"Casual"}
              />

              <span className="text-text-secondary peer-checked:font-extrabold">
                Casual
              </span>

              <span className="input-marker main-transition after:main-transition peer-checked:bg-[#003566] peer-checked:after:-translate-x-5"></span>
            </label>
          </li>
        </ul>
      </div>

      <div className="border-t border-border-color-primary flex flex-col">
        <button
          onClick={() => setIsPriceFilterOpen((prev) => !prev)}
          className={`flex items-center justify-between main-transition ${isPriceFilterOpen ? "pt-5" : "py-5"}`}
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
            max={"250"}
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
            max={"250"}
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
              transform: "translateX(-50%)",
            }}
          >
            ${maxPrice}
          </span>
        </div>
      </div>

      <button className="w-full py-2 text-center bg-black text-white rounded-4xl text-sm lg:text-[18px] lg:py-3">
        Apply Filter
      </button>
    </>
  );
}
