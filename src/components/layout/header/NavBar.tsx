"use client";
import { useMenuStore } from "@/store/menuStore";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavBar() {
  const isMenuOpen = useMenuStore((state) => state.isMenuOpen);
  const toggleMenu = useMenuStore((state) => state.toggleMenu);
  const [isSearchOpen, setIsSerachOpen] = useState(false);

  useEffect(() => {
    const handleClick = (e: PointerEvent) => {
      const element = e.target as HTMLElement;

      if (element.classList.contains("menu-cover")) {
        toggleMenu(false);
      }

      if (!element.classList.contains("search-btn")) {
        if (!element.classList.contains("search-input")) {
          setIsSerachOpen(false);
        }
      }
    };

    document.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  });

  return (
    <nav className="flex items-center justify-between py-5">
      <div className="flex items-center gap-4 min-[480px]:gap-6 relative">
        <button
          onClick={() => toggleMenu(!isMenuOpen)}
          className="sm:hidden z-90 rounded-2xl flex relative"
        >
          <svg
            className={`relative menu-transition ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
          >
            <use href="#menu"></use>
          </svg>

          <svg
            className={`absolute menu-transition ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
          >
            <use href="#close"></use>
          </svg>
        </button>

        <div
          className={`absolute left-[-154%] opacity-80 ${isMenuOpen ? "show-menu" : ""} top-[156%] p-8 flex w-46 z-100 bg-[#f0f0f0af] backdrop-blur-xs justify-center rounded-2xl sm:hidden menu-transition`}
        >
          <ul className="flex flex-col gap-5 items-center text-lg">
            <li>
              <Link href={"#"}>Home</Link>
            </li>
            <li>
              <Link href={"#"}>Contact</Link>
            </li>
            <li>
              <Link href={"#"}>About</Link>
            </li>
            <li>
              <Link href={"#"}>Sign Up</Link>
            </li>
          </ul>
        </div>

        <Link href={"#"} className="font-integral-cf text-xl">
          SHOP.CO
        </Link>
      </div>

      <ul className="hidden gap-6 items-center sm:flex xl:gap-12">
        <li>
          <Link href={"#"}>Home</Link>
        </li>
        <li>
          <Link href={"#"}>Contact</Link>
        </li>
        <li>
          <Link href={"#"}>About</Link>
        </li>
        <li>
          <Link href={"#"}>Sign Up</Link>
        </li>
      </ul>

      <div
        className="hidden xl:flex items-center gap-2 p-3 rounded-4xl bg-bg-secondary
            text-text-secondary w-[36%]"
      >
        <div>
          <svg>
            <use href="#search"></use>
          </svg>
        </div>

        <input
          type="text"
          placeholder="Search for products..."
          className="w-full"
          name="search"
        />
      </div>

      <div className="flex items-center gap-3 min-[480px]:gap-5 sm:gap-3 relative">
        <button
          onClick={() => setIsSerachOpen(!isSearchOpen)}
          type="button"
          className="xl:hidden"
        >
          <svg>
            <use className="search-btn" href="#search"></use>
          </svg>
        </button>

        <input
          type="text"
          name="search"
          placeholder="Search for products ..."
          className={`${isSearchOpen ? "show-search" : ""} menu-transition search-input`}
        />

        <Link href={"#"}>
          <svg>
            <use href="#shopping-cart"></use>
          </svg>
        </Link>

        <Link href={"#"}>
          <svg>
            <use href="#user-avatar"></use>
          </svg>
        </Link>
      </div>
    </nav>
  );
}
