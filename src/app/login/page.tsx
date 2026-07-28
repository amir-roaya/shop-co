import CopyButton from "@/components/login/CopyButton";
import LoginForm from "@/components/login/LoginForm";
import Link from "next/link";

export default function page() {
  return (
    <main>
      <section>
        <div className="container">
          <div className="header-line"></div>

          <div className="flex flex-col gap-5 md:flex-row">
            <div className="login-hero"></div>

            <div className="flex flex-col md:basis-[40%] gap-7 md:justify-center md:px-7 xl:px-16">
              <LoginForm />

              <div className="flex items-center justify-center gap-3 text-sm text-text-secondary">
                <span>Dont have an account?</span>

                <Link
                  className="font-satoshi-bold border-b shadow-line-shadow pb-0.5 main-transition hover:text-main-hover"
                  href={"/signup"}
                >
                  Sign Up
                </Link>
              </div>

              <div className="text-text-secondary flex flex-col gap-4 border border-border-color-primary py-5 px-4 rounded-3xl text-sm">
                <h6>Demo Account</h6>

                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <p>
                      Username:<span className="text-red-400"> johnd</span>
                    </p>

                    <CopyButton text="johnd" />
                  </div>

                  <div className="flex items-center justify-between">
                    <p>
                      Password:<span className="text-red-400"> m38rmF$</span>
                    </p>

                    <CopyButton text="m38rmF$" />
                  </div>
                </div>

                <p>Use this account to explore the application.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
