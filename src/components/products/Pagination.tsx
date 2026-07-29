"use client";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import Reveal from "../ui/Reveal";

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
  const visiblePages: (number | "...")[] = [];

  if (totalPages <= 4) {
    for (let i = 1; i <= totalPages; i++) {
      visiblePages.push(i);
    }
  } else {
    if (currentPage <= 2) {
      visiblePages.push(1, 2, 3, "...", totalPages);
    } else if (currentPage >= totalPages - 1) {
      visiblePages.push(
        1,
        "...",
        totalPages - 2,
        totalPages - 1,
        totalPages,
      );
    } else {
      visiblePages.push(
        1,
        "...",
        currentPage,
        currentPage + 1,
        "...",
        totalPages,
      );
    }
  }

  return (
    <div className="flex items-center pt-5 justify-between text-sm">
      {visiblePages.length > 0 && (
        <>
          <Reveal direction="left" delay={1000} threshold={0}>
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
              <div className="hidden sm:block">
                <svg className="w-4 h-4">
                  <use href="#arrow"></use>
                </svg>
              </div>

              <span>Previous</span>
            </button>
          </Reveal>

          <div className="flex items-center gap-1 text-text-secondary">
            {visiblePages.map((page, index) =>
              page === "..." ? (
                <Reveal key={`dots-${index}`} direction="left" delay={1200}>
                  <span className="px-1 sm:px-2">...</span>
                </Reveal>
              ) : (
                <Reveal key={page} direction="left" delay={index * 100 + 1100}>
                  <button
                    onClick={() => {
                      params.set("page", String(page));
                      router.push(`?${params.toString()}`);
                    }}
                    className={`md:py-1 px-1.75 md:px-2.75 rounded-lg border border-transparent main-transition ${currentPage === page ? "current-pagination" : ""} hover:border-main-hover`}
                  >
                    {page}
                  </button>
                </Reveal>
              ),
            )}
          </div>

          <Reveal direction="left" delay={1500}>
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

              <div className="hidden sm:block">
                <svg className="rotate-180 w-4 h-4">
                  <use href="#arrow"></use>
                </svg>
              </div>
            </button>
          </Reveal>
        </>
      )}
    </div>
  );
}
