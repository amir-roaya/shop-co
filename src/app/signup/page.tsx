import LoginForm from "@/components/signup/SignupForm";
import Link from "next/link";

export default function page() {
  return (
    <main>
      <section>
        <div className="container">
          <div className="header-line"></div>

          <div className="flex flex-col gap-5 md:flex-row">
            <div className="login-hero md:basis-[60%] md:h-150"></div>

            <div className="flex flex-col gap-7 md:basis-[40%] md:justify-center md:px-7 xl:px-16">
              <LoginForm />

              <div className="flex items-center justify-center gap-3 text-sm text-text-secondary">
                <span>Already have account?</span>

                <Link
                  className="font-satoshi-bold border-b shadow-line-shadow pb-0.5 main-transition hover:text-main-hover"
                  href={"login"}
                >
                  Log in
                </Link>
              </div>

              <p className="text-sm">
                <span className="text-red-500 font-satoshi-bold">Note: </span>
                <span className="text-text-secondary">
                  This demo uses Fake Store API. Newly created accounts cant be
                  used to log in because the API doesnt persist users.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
