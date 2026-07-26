"use client";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

type PaginationProps = {
  totalItems: number;
  itemPerPage: number;
  currentPage: number;
};

export default function Pagination({
  totalItems,
  itemPerPage,
  currentPage,
}: PaginationProps) {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const router = useRouter();

  const totalPages = Math.ceil(totalItems / itemPerPage);
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="flex items-center pt-5 justify-between text-sm">
      <button
        onClick={() => {
          if (currentPage > 1) {
            params.set("page", String(currentPage - 1));
            router.push(`?${params.toString()}`);
          } else {
            params.set("page", String(totalPages));
            router.push(`?${params.toString()}`);
          }
        }}
        className="flex items-center gap-2 p-2 border border-border-color-primary rounded-xl main-transition hover:bg-black hover:text-white"
      >
        <div>
          <svg className="w-4 h-4">
            <use href="#arrow"></use>
          </svg>
        </div>

        <span>Previous</span>
      </button>

      <div className="flex items-center gap-1 text-text-secondary">
        {pages.map((page) => (
          <button
            onClick={() => {
              params.set("page", String(page));
              router.push(`?${params.toString()}`);
            }}
            key={page}
            className={`md:py-1 px-1.75 md:px-2.75 rounded-lg border border-transparent main-transition ${currentPage === page ? "current-pagination" : ""} hover:border-main-hover`}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        onClick={() => {
          if (currentPage < totalPages) {
            params.set("page", String(currentPage + 1));
            router.push(`?${params.toString()}`);
          } else {
            params.set("page", String(1));
            router.push(`?${params.toString()}`);
          }
        }}
        className="flex items-center gap-2 p-2 border border-border-color-primary rounded-xl main-transition hover:bg-black hover:text-white"
      >
        <span>Next</span>

        <div>
          <svg className="rotate-180 w-4 h-4">
            <use href="#arrow"></use>
          </svg>
        </div>
      </button>
    </div>
  );
}
