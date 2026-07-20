"use client";

import { useEffect, useRef, useState } from "react";

export default function SortFilter() {
  const [isSortOpen, setIsSortOpen] = useState(false);
  const sortRef = useRef<HTMLDivElement>(null);

  const [selectedSort, setSelectedSort] = useState("All Sorts");

  useEffect(() => {
    const handleClick = (e: PointerEvent) => {
      if (sortRef.current && !sortRef.current.contains(e.target as Node)) {
        setIsSortOpen(false);
      }
    };

    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  });

  return (
    <div className="relative" ref={sortRef}>
      <button
        onClick={() => setIsSortOpen(!isSortOpen)}
        className="flex items-center gap-1 font-satoshi-bold w-full"
      >
        <span title={selectedSort} className="md:w-16 truncate">{selectedSort}</span>

        <div>
          <svg
            className={`w-4 h-4 ${isSortOpen ? "rotate-180" : ""} main-transition`}
          >
            <use href="#chevron-down"></use>
          </svg>
        </div>
      </button>

      <div
        className={`sort-submenu main-transition ${isSortOpen ? "sort-submenu-show" : ""}`}
      >
        <ul className="flex flex-col gap-4 w-full">
          <li>
            <label className="flex items-center justify-between">
              <input
                type="radio"
                name="sort"
                className="hidden peer"
                value={"All Sorts"}
                onChange={(e) => setSelectedSort(e.target.value)}
              />

              <span className="peer-checked:text-black main-transition">
                All Sorts
              </span>

              <span className="opacity-0 peer-checked:opacity-100 main-transition">
                ☑️
              </span>
            </label>
          </li>

          <li>
            <label className="flex items-center justify-between">
              <input
                type="radio"
                name="sort"
                className="hidden peer"
                value={"Most Popular"}
                onChange={(e) => setSelectedSort(e.target.value)}
              />

              <span className="peer-checked:text-black main-transition">
                Most Popular
              </span>

              <span className="opacity-0 peer-checked:opacity-100 main-transition">
                ☑️
              </span>
            </label>
          </li>

          <li>
            <label className="flex items-center justify-between">
              <input
                type="radio"
                name="sort"
                className="hidden peer"
                value={"Most Cheapest"}
                onChange={(e) => setSelectedSort(e.target.value)}
              />

              <span className="peer-checked:text-black main-transition">
                Most Cheapest
              </span>

              <span className="opacity-0 peer-checked:opacity-100 main-transition">
                ☑️
              </span>
            </label>
          </li>

          <li>
            <label className="flex items-center justify-between">
              <input
                type="radio"
                name="sort"
                className="hidden peer"
                value={"Most Latest"}
                onChange={(e) => setSelectedSort(e.target.value)}
              />

              <span className="peer-checked:text-black main-transition">
                Most Latest
              </span>

              <span className="opacity-0 peer-checked:opacity-100 main-transition">
                ☑️
              </span>
            </label>
          </li>

          <li>
            <label className="flex items-center justify-between">
              <input
                type="radio"
                name="sort"
                className="hidden peer"
                value={"Most Expensive"}
                onChange={(e) => setSelectedSort(e.target.value)}
              />

              <span className="peer-checked:text-black main-transition">
                Most Expensive
              </span>

              <span className="opacity-0 peer-checked:opacity-100 main-transition">
                ☑️
              </span>
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
}
