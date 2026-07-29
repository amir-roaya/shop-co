import CopyButton from "@/components/login/CopyButton";
import LoginForm from "@/components/login/LoginForm";
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

            <div className="flex flex-col md:basis-[40%] gap-7 md:justify-center md:px-7 xl:px-16">
              <LoginForm />

              <Reveal direction="up" delay={1100}>
                <div className="flex items-center justify-center gap-3 text-sm text-text-secondary">
                  <span>Dont have an account?</span>

                  <Link
                    className="font-satoshi-bold border-b shadow-line-shadow pb-0.5 main-transition hover:text-main-hover"
                    href={"/signup"}
                  >
                    Sign Up
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={800}>
                <div className="text-text-secondary flex flex-col gap-4 border border-border-color-primary py-5 px-4 rounded-3xl text-sm">
                  <Reveal direction="up" delay={1200}>
                    <h6>Demo Account</h6>
                  </Reveal>

                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between">
                      <Reveal direction="left" delay={1300}>
                        <p>
                          Username:<span className="text-red-400"> emilys</span>
                        </p>
                      </Reveal>

                      <Reveal direction="up" delay={1350}>
                        <CopyButton text="emilys" />
                      </Reveal>
                    </div>

                    <div className="flex items-center justify-between">
                      <Reveal direction="left" delay={1450}>
                        <p>
                          Password:
                          <span className="text-red-400"> emilyspass</span>
                        </p>
                      </Reveal>

                      <Reveal direction="up" delay={1500}>
                        <CopyButton text="emilyspass" />
                      </Reveal>
                    </div>
                  </div>

                  <Reveal direction="up" delay={1600}>
                    <p>Use this account to explore the application.</p>
                  </Reveal>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
