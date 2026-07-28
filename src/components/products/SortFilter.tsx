"use client";

import { ValidFilters } from "@/types/product";
import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, useEffect, useRef, useState } from "react";

type SortFilterProps = {
  radioName: string;
  validFilters: ValidFilters;
};

export default function SortFilter({
  radioName,
  validFilters,
}: SortFilterProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [isSortOpen, setIsSortOpen] = useState(false);
  const sortRef = useRef<HTMLDivElement>(null);

  const selectedSort = validFilters.sort;

  useEffect(() => {
    const handleClick = (e: PointerEvent) => {
      if (sortRef.current && !sortRef.current.contains(e.target as Node)) {
        setIsSortOpen(false);
      }
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const setSort = (event: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams);
    params.set("sort", event.target.value);
    router.push(`/products?${params.toString()}`);
    setIsSortOpen(false);
  };

  return (
    <div className="relative" ref={sortRef}>
      <button
        onClick={() => setIsSortOpen(!isSortOpen)}
        className="flex items-center gap-1 font-satoshi-bold w-full rounded-2xl p-2 main-transition hover:bg-black/90 hover:text-white"
      >
        <span title={selectedSort} className="md:w-16 truncate">
          {selectedSort}
        </span>

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
            <label className="flex items-center justify-between main-transition hover:text-blue-700">
              <input
                type="radio"
                name={radioName}
                className="hidden peer"
                value={"All Sorts"}
                checked={selectedSort === "All Sorts"}
                onChange={(e) => setSort(e)}
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
            <label className="flex items-center justify-between main-transition hover:text-blue-700">
              <input
                type="radio"
                name={radioName}
                className="hidden peer"
                value={"Most Popular"}
                checked={selectedSort === "Most Popular"}
                onChange={(e) => setSort(e)}
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
            <label className="flex items-center justify-between main-transition hover:text-blue-700">
              <input
                type="radio"
                name={radioName}
                className="hidden peer"
                value={"Cheapest"}
                checked={selectedSort === "Cheapest"}
                onChange={(e) => setSort(e)}
              />

              <span className="peer-checked:text-black main-transition">
                Cheapest
              </span>

              <span className="opacity-0 peer-checked:opacity-100 main-transition">
                ☑️
              </span>
            </label>
          </li>

          <li>
            <label className="flex items-center justify-between main-transition hover:text-blue-700">
              <input
                type="radio"
                name={radioName}
                className="hidden peer"
                value={"Latest"}
                checked={selectedSort === "Latest"}
                onChange={(e) => setSort(e)}
              />

              <span className="peer-checked:text-black main-transition">
                Latest
              </span>

              <span className="opacity-0 peer-checked:opacity-100 main-transition">
                ☑️
              </span>
            </label>
          </li>

          <li>
            <label className="flex items-center justify-between main-transition hover:text-blue-700">
              <input
                type="radio"
                name={radioName}
                className="hidden peer"
                value={"Most Expensive"}
                checked={selectedSort === "Most Expensive"}
                onChange={(e) => setSort(e)}
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
