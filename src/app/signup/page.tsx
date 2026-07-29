import SignupForm from "@/components/signup/SignupForm";
import Reveal from "@/components/ui/Reveal";
import Link from "next/link";

export default function page() {
  return (
    <main>
      <section>
        <div className="container">
          <Reveal delay={200}>
            <div className="header-line"></div>
          </Reveal>

          <div className="flex flex-col gap-5 md:flex-row">
            <Reveal delay={400} className="md:basis-[60%]">
              <div className="form-hero"></div>
            </Reveal>

            <div className="flex flex-col gap-7 md:basis-[40%] md:justify-center md:px-7 xl:px-16">
              <SignupForm />

              <Reveal direction="up" delay={1200}>
                <div className="flex items-center justify-center gap-3 text-sm text-text-secondary">
                  <span>Already have account?</span>

                  <Link
                    className="font-satoshi-bold border-b shadow-line-shadow pb-0.5 main-transition hover:text-main-hover"
                    href={"login"}
                  >
                    Log in
                  </Link>
                </div>
              </Reveal>

              <Reveal direction="up" delay={1300}>
                <p className="text-sm">
                  <span className="text-red-500 font-satoshi-bold">Note: </span>
                  <span className="text-text-secondary">
                    This demo uses Dummy Json API. Newly created accounts cant
                    be used to log in because the API doesnt persist users.
                  </span>
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
