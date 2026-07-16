export default function page() {
  return (
    <main>
      <section>
        <div className="container">
          <div className="header-line"></div>

          <div className="flex flex-col gap-5 md:flex-row">
            <div className="login-hero md:basis-[60%] md:h-150"></div>

            <div className="flex md:basis-[40%] md:items-center">
              <form className="flex flex-col gap-7 basis-full md:px-7 xl:px-16 xl:gap-10">
                <div className="flex flex-col gap-2">
                  <h2 className="font-satoshi-bold text-2xl">
                    Log in to Exclusive
                  </h2>

                  <p className="text-sm">Enter your details below</p>
                </div>

                <div className="flex flex-col gap-4 w-[90%] md:w-full">
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    className="border-b text-text-secondary border-line-color-primary shadow-line-shadow text-sm py-2 outline-0 pr-2 xl:py-3"
                    autoComplete="username"
                  />

                  <div className="flex items-center justify-between border-b border-line-color-primary shadow-line-shadow py-2 pr-2 xl:py-3 gap-1.5">
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className=" text-text-secondary text-sm outline-0 w-full"
                      autoComplete="current-password"
                    />

                    <button>
                      <svg className="w-4.5 h-4.5 text-text-secondary">
                        <use href="#eye-slash"></use>
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <button className="text-white bg-black py-3 w-full px-6 rounded-xl">
                    Log In
                  </button>

                  <span className="text-text-secondary text-sm">
                    Forget Password?
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
