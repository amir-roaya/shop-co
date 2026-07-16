import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="container">
        <nav className="flex items-center justify-between py-5">
          <div className="flex items-center gap-4 min-[480px]:gap-6">
            <Link href={"#"} className="sm:hidden">
              <svg>
                <use href="#menu"></use>
              </svg>
            </Link>

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
              className="outline-0 w-full"
              name="search"
            />
          </div>

          <div className="flex items-center gap-3 min-[480px]:gap-5 sm:gap-3">
            <button type="button" className="xl:hidden">
              <svg>
                <use href="#search"></use>
              </svg>
            </button>

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
      </div>
    </header>
  );
}
