import Link from "next/link";

export default function notFound() {
  return (
    <main>
      <div className="container">
        <div className="header-line"></div>

        <div className="flex flex-col items-center gap-10 my-16">
          <h1 className="text-xl sm:text-3xl font-integral-cf space-x-2 sm:space-x-5">
            <span className="text-red-600">404</span>
            <span>Page not found</span>
          </h1>

          <p className="text-lg sm:text-2xl text-text-secondary">
            The page you are looking for dosnt exist.
          </p>

          <div className="flex flex-col gap-2 text-lg sm:flex-row">
            <Link
              className="bg-black text-white border py-3 px-4 rounded-xl main-transition hover:bg-bg-secondary hover:text-black"
              href={"/"}
            >
              Go back to home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
