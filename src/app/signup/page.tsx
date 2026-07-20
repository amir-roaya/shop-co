import Link from "next/link";

export default function page() {
  return (
    <main>
      <section>
        <div className="container">
          <div className="header-line"></div>

          <div className="flex flex-col gap-5 md:flex-row">
            <div className="login-hero md:basis-[60%] md:h-150"></div>

            <div className="flex md:basis-[40%] md:items-center">
              <form className="flex flex-col gap-6 basis-full md:px-7 xl:px-16 xl:gap-9">
                <div className="flex flex-col gap-2">
                  <h2 className="font-satoshi-bold text-2xl">
                    Create an account
                  </h2>

                  <p className="text-sm">Enter your details below</p>
                </div>

                <div className="flex flex-col gap-3 w-[90%] md:w-full">
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    className="border-b text-text-secondary border-line-color-primary shadow-line-shadow text-sm py-2 pr-2 xl:py-3"
                    autoComplete="username"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="border-b text-text-secondary border-line-color-primary shadow-line-shadow text-sm py-2 pr-2 xl:py-3"
                    autoComplete="email"
                  />

                  <div className="flex items-center justify-between border-b border-line-color-primary shadow-line-shadow py-2 pr-2 xl:py-3 gap-1.5">
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className=" text-text-secondary text-sm w-full"
                      autoComplete="new-password"
                    />

                    <button>
                      <svg className="w-4.5 h-4.5 text-text-secondary">
                        <use href="#eye-slash"></use>
                      </svg>
                    </button>
                  </div>
                </div>

                <button
                  className="bg-black text-white py-3 rounded-xl"
                  type="submit"
                >
                  Create Account
                </button>

                <div className="flex items-center justify-center gap-3 text-sm text-text-secondary">
                  <span>Already have account?</span>

                  <Link
                    className="font-satoshi-bold border-b shadow-line-shadow pb-0.5"
                    href={"#"}
                  >
                    Log in
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
