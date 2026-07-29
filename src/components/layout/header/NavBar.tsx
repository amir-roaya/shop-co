"use client";

import { useDebounce } from "@/hooks/useDebounce";
import { useCartStore } from "@/store/cartStore";
import { useMenuStore } from "@/store/menuStore";
import { Product } from "@/types/product";
import { getSearchedProducts } from "@/utils/getSearchedProducts";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import LogoutButton from "./LogoutButton";
import { usePathname } from "next/navigation";
import Loading from "@/components/ui/Loading";
import Reveal from "@/components/ui/Reveal";

type NavBarProps = {
  products: Product[];
  isLoggedin: boolean;
};

export default function NavBar({ products, isLoggedin }: NavBarProps) {
  const pathname = usePathname();

  const isMenuOpen = useMenuStore((state) => state.isMenuOpen);
  const toggleMenu = useMenuStore((state) => state.toggleMenu);

  const store = useCartStore();

  const [isSearchOpen, setIsSerachOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearch = useDebounce(searchValue, 500);
  const searchInputRef = useRef<HTMLDivElement>(null);
  const searchedProducts = getSearchedProducts(products, debouncedSearch);

  useEffect(() => {
    toggleMenu(false);
  }, [pathname, toggleMenu]);

  useEffect(() => {
    const handleClick = (e: PointerEvent) => {
      const element = e.target as HTMLElement;

      if (element.classList.contains("menu-cover")) {
        toggleMenu(false);
      }

      if (!element.classList.contains("search-btn")) {
        if (!searchInputRef.current?.contains(element as Node)) {
          setIsSerachOpen(false);
        }
      }
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [toggleMenu]);

  return (
    <nav className="flex items-center justify-between py-5">
      <div className="flex items-center gap-1 min-[480px]:gap-6 relative">
        <Reveal direction="left" threshold={0}>
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
        </Reveal>

        <div
          className={`absolute left-[-154%] opacity-80 ${isMenuOpen ? "show-menu" : ""} top-[156%] p-8 flex w-46 z-100 bg-[#f0f0f0af] backdrop-blur-xs justify-center rounded-2xl sm:hidden menu-transition`}
        >
          <ul className="flex flex-col gap-5 items-center text-lg">
            <Reveal direction="up">
              <li>
                <Link href={"/"}>Home</Link>
              </li>
            </Reveal>

            <Reveal direction="up" delay={100}>
              <li>
                <Link href={"#"}>Contact</Link>
              </li>
            </Reveal>

            <Reveal direction="up" delay={200}>
              <li>
                <Link href={"#"}>About</Link>
              </li>
            </Reveal>

            <Reveal direction="up" delay={300}>
              <li>
                <Link href={"/signup"}>Sign Up</Link>
              </li>
            </Reveal>
          </ul>
        </div>

        <Reveal direction="left" delay={200}>
          <Link
            href={"/"}
            className="font-integral-cf text-lg min-[480px]:text-xl main-transition rounded-2xl p-1.5 border border-transparent hover:border-main-hover"
          >
            SHOP.CO
          </Link>
        </Reveal>
      </div>

      <ul className="hidden gap-6 items-center sm:flex xl:gap-12">
        <Reveal direction="left" delay={100}>
          <li>
            <Link
              className="flex flex-col items-center gap-0.5 after:content-[''] after:h-0.5 after:w-0 after:bg-main-hover hover:after:w-full after:main-transition"
              href={"/"}
            >
              Home
            </Link>
          </li>
        </Reveal>

        <Reveal direction="left" delay={200}>
          <li>
            <Link
              className="flex flex-col items-center gap-0.5 after:content-[''] after:h-0.5 after:w-0 after:bg-main-hover hover:after:w-full after:main-transition"
              href={"#"}
            >
              Contact
            </Link>
          </li>
        </Reveal>

        <Reveal direction="left" delay={300}>
          <li>
            <Link
              className="flex flex-col items-center gap-0.5 after:content-[''] after:h-0.5 after:w-0 after:bg-main-hover hover:after:w-full after:main-transition"
              href={"#"}
            >
              About
            </Link>
          </li>
        </Reveal>

        <Reveal direction="left" delay={400}>
          <li>
            <Link
              className="flex flex-col items-center gap-0.5 after:content-[''] after:h-0.5 after:w-0 after:bg-main-hover hover:after:w-full after:main-transition"
              href={"/signup"}
            >
              Sign Up
            </Link>
          </li>
        </Reveal>
      </ul>

      <div className="hidden xl:flex text-text-secondary relative w-[36%]">
        <Reveal direction="left" delay={500} className="w-full">
          <div className="flex items-center gap-2 p-3 rounded-4xl bg-bg-secondary w-full">
            <div>
              <svg>
                <use href="#search"></use>
              </svg>
            </div>

            <input
              type="text"
              name="search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search for products ..."
              className="w-full"
            />
          </div>
        </Reveal>

        <div
          className={`desktop-search-wrapper ${searchValue.trim() !== "" ? "p-1.5" : "p-0"} main-transition`}
        >
          <ul
            className={`desktop-search-result ${searchValue.trim() !== "" ? "show-desktop-search-result" : ""} main-transition`}
          >
            {searchedProducts ? (
              searchedProducts.length > 0 ? (
                searchedProducts.map(({ id, title }) => (
                  <Reveal key={id} delay={100}>
                    <li>
                      <Link
                        onClick={() => setSearchValue("")}
                        className="block w-full truncate font-satoshi-bold main-transition hover:text-black"
                        title={title}
                        href={`/products/${id}`}
                      >
                        {title}
                      </Link>
                    </li>
                  </Reveal>
                ))
              ) : (
                <Reveal delay={100}>
                  <li className="w-full font-satoshi-bold text-black">
                    No product found !
                  </li>
                </Reveal>
              )
            ) : (
              <Loading textColor="black" />
            )}
          </ul>
        </div>
      </div>

      <div className="flex items-center gap-1.5 min-[480px]:gap-3 relative">
        <Reveal direction="left" delay={400} className="flex">
          <button
            onClick={() => {
              setIsSerachOpen(!isSearchOpen);
              if (isSearchOpen) {
                setSearchValue("");
              }
            }}
            type="button"
            className="xl:hidden main-transition hover:text-text-secondary"
          >
            <svg>
              <use className="search-btn" href="#search"></use>
            </svg>
          </button>
        </Reveal>

        <div
          ref={searchInputRef}
          className={`search-input-wrapper ${isSearchOpen ? "show-search" : ""} menu-transition p-0`}
        >
          <input
            type="text"
            name="search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search for products ..."
            className={`${isSearchOpen ? "p-3" : "p-0"} menu-transition w-full text-sm`}
          />

          <ul
            className={`search-result main-transition ${searchValue.trim() !== "" ? "show-search-result border-border-color-primary" : "border-transparent"}`}
          >
            {searchedProducts ? (
              searchedProducts.length > 0 ? (
                searchedProducts.map(({ id, title }) => (
                  <Reveal key={id} delay={100}>
                    <li>
                      <Link
                        onClick={() => {
                          setSearchValue("");
                          setIsSerachOpen(false);
                        }}
                        className="block w-full truncate font-satoshi-bold main-transition hover:text-black"
                        title={title}
                        href={`/products/${id}`}
                      >
                        {title}
                      </Link>
                    </li>
                  </Reveal>
                ))
              ) : (
                <Reveal delay={100}>
                  <li className="w-full font-satoshi-bold text-black">
                    No product found !
                  </li>
                </Reveal>
              )
            ) : (
              <Loading textColor="black" />
            )}
          </ul>
        </div>

        <Reveal direction="left" delay={600}>
          <Link
            className="relative main-transition hover:text-text-secondary"
            href={"/cart"}
          >
            <svg>
              <use href="#shopping-cart"></use>
            </svg>

            {isLoggedin && (
              <span className="absolute text-xs bg-red-500 rounded-full w-3.5 h-3.5 flex justify-center items-center text-white top-[-16%] right-[54%]">
                {String(store.cart.length)}
              </span>
            )}
          </Link>
        </Reveal>

        <Reveal direction="left" delay={800}>
          {isLoggedin ? (
            <LogoutButton />
          ) : (
            <Link
              className="main-transition hover:text-text-secondary"
              href={"/login"}
            >
              <svg>
                <use href="#user-avatar"></use>
              </svg>
            </Link>
          )}
        </Reveal>
      </div>
    </nav>
  );
}
