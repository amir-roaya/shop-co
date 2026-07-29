import Reveal from "@/components/ui/Reveal";
import Link from "next/link";

export default function notFound() {
  return (
    <main>
      <div className="container">
        <Reveal delay={200}>
          <div className="header-line"></div>
        </Reveal>

        <div className="flex flex-col items-center gap-10 my-16">
          <Reveal direction="up" delay={400}>
            <h1 className="text-xl sm:text-3xl font-integral-cf space-x-2 sm:space-x-5">
              <span className="text-red-600">404</span>
              <span>Page not found</span>
            </h1>
          </Reveal>

          <Reveal direction="up" delay={600}>
            <p className="text-lg sm:text-2xl text-text-secondary">
              The page you are looking for dosnt exist.
            </p>
          </Reveal>

          <div className="flex flex-col gap-2 text-lg sm:flex-row">
            <Reveal direction="up" delay={800}>
              <Link
                className="bg-black text-white border py-3 px-4 rounded-xl main-transition hover:bg-bg-secondary hover:text-black"
                href={"/"}
              >
                Go back to home
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </main>
  );
}
