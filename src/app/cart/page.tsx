import Image from "next/image";

export default function page() {
  return (
    <main>
      <section>
        <div className="container">
          <div className="header-line"></div>

          <h1 className="font-integral-cf text-3xl mb-6">Your cart</h1>

          <div className="flex flex-col gap-5 md:flex-row">
            <div className="flex flex-col border border-border-color-primary p-3 rounded-2xl gap-4 [&>*:not(:last-child)]:pb-4 [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-border-color-primary [&>*:not(:last-child)]:shadow-line-shadow md:basis-[60%] shadow-main-shadow">
              <div className="flex gap-2.5 xl:gap-4">
                <div className="basis-1/3 xl:basis-[22%]">
                  <Image
                    width={100}
                    height={100}
                    src={"/images/image10.png"}
                    alt="Product image"
                    className="rounded-2xl overflow-hidden w-full h-auto"
                  ></Image>
                </div>

                <div className="flex flex-col basis-2/3 justify-between xl:basis-[78%]">
                  <div className="flex items-center justify-between">
                    <h6
                      title="Gradient Graphic T-shirt"
                      className="font-satoshi-bold truncate w-[80%] lg:text-xl"
                    >
                      Gradient Graphic T-shirt
                    </h6>

                    <button>
                      <svg className="w-5 h-5 sm:w-6 sm:h-6">
                        <use href="#trash"></use>
                      </svg>
                    </button>
                  </div>

                  <div className="text-sm flex items-center gap-1.5 lg:text-[16px]">
                    <span>Size:</span>

                    <span className="text-text-secondary">Large</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="font-satoshi-bold text-lg">$145</span>

                    <div className="flex items-center justify-between bg-bg-secondary py-1.5 px-3.5 rounded-3xl w-30 sm:py-2.5">
                      <button>
                        <svg className="w-4 h-4 sm:w-5 sm:h-5">
                          <use href="#minus"></use>
                        </svg>
                      </button>

                      <span className="xl:text-xl">1</span>

                      <button>
                        <svg className="w-4 h-4 sm:w-5 sm:h-5">
                          <use href="#plus"></use>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-2.5 xl:gap-4">
                <div className="basis-1/3 xl:basis-[22%]">
                  <Image
                    width={100}
                    height={100}
                    src={"/images/image10.png"}
                    alt="Product image"
                    className="rounded-2xl overflow-hidden w-full h-auto"
                  ></Image>
                </div>

                <div className="flex flex-col basis-2/3 justify-between xl:basis-[78%]">
                  <div className="flex items-center justify-between">
                    <h6
                      title="Gradient Graphic T-shirt"
                      className="font-satoshi-bold truncate w-[80%] lg:text-xl"
                    >
                      Gradient Graphic T-shirt
                    </h6>

                    <button>
                      <svg className="w-5 h-5 sm:w-6 sm:h-6">
                        <use href="#trash"></use>
                      </svg>
                    </button>
                  </div>

                  <div className="text-sm flex items-center gap-1.5 lg:text-[16px]">
                    <span>Size:</span>

                    <span className="text-text-secondary">Large</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="font-satoshi-bold text-lg">$145</span>

                    <div className="flex items-center justify-between bg-bg-secondary py-1.5 px-3.5 rounded-3xl w-30 sm:py-2.5">
                      <button>
                        <svg className="w-4 h-4 sm:w-5 sm:h-5">
                          <use href="#minus"></use>
                        </svg>
                      </button>

                      <span className="xl:text-xl">1</span>

                      <button>
                        <svg className="w-4 h-4 sm:w-5 sm:h-5">
                          <use href="#plus"></use>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-2.5 xl:gap-4">
                <div className="basis-1/3 xl:basis-[22%]">
                  <Image
                    width={100}
                    height={100}
                    src={"/images/image10.png"}
                    alt="Product image"
                    className="rounded-2xl overflow-hidden w-full h-auto"
                  ></Image>
                </div>

                <div className="flex flex-col basis-2/3 justify-between xl:basis-[78%]">
                  <div className="flex items-center justify-between">
                    <h6
                      title="Gradient Graphic T-shirt"
                      className="font-satoshi-bold truncate w-[80%] lg:text-xl"
                    >
                      Gradient Graphic T-shirt
                    </h6>

                    <button>
                      <svg className="w-5 h-5 sm:w-6 sm:h-6">
                        <use href="#trash"></use>
                      </svg>
                    </button>
                  </div>

                  <div className="text-sm flex items-center gap-1.5 lg:text-[16px]">
                    <span>Size:</span>

                    <span className="text-text-secondary">Large</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="font-satoshi-bold text-lg">$145</span>

                    <div className="flex items-center justify-between bg-bg-secondary py-1.5 px-3.5 rounded-3xl w-30 sm:py-2.5">
                      <button>
                        <svg className="w-4 h-4 sm:w-5 sm:h-5">
                          <use href="#minus"></use>
                        </svg>
                      </button>

                      <span className="xl:text-xl">1</span>

                      <button>
                        <svg className="w-4 h-4 sm:w-5 sm:h-5">
                          <use href="#plus"></use>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col border border-border-color-primary p-4 rounded-2xl gap-4 h-fit md:basis-[40%] xl:gap-5 shadow-main-shadow">
              <h5 className="font-satoshi-bold text-lg lg:text-xl">
                Order Summary
              </h5>

              <div className="flex items-center justify-between">
                <span className="text-text-secondary">Subtotal</span>

                <span className="font-satoshi-bold">$565</span>
              </div>

              <div className="flex items-center justify-between border-b border-border-color-primary pb-4 shadow-line-shadow">
                <span className="text-text-secondary">Delivery Fee</span>

                <span className="font-satoshi-bold">$15</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-text-secondary">Total</span>

                <span className="font-satoshi-bold">$467</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center bg-bg-secondary rounded-4xl px-3 py-3.5 gap-2 basis-[70%]">
                  <div>
                    <svg className="w-5 h-5">
                      <use href="#tag"></use>
                    </svg>
                  </div>

                  <input
                    name="promo-code"
                    type="text"
                    placeholder="Add promo code"
                    className="text-sm text-text-secondary"
                    autoComplete="promo-code"
                  />
                </div>

                <button className="bg-black text-white rounded-4xl px-3 py-3.5 text-sm basis-[30%]">
                  Apply
                </button>
              </div>

              <button className="flex items-center w-full justify-center bg-black text-white rounded-4xl py-3.5 gap-2">
                <span className="text-sm">Go to Checkout</span>

                <div>
                  <svg className="rotate-180 text-white w-5 h-5">
                    <use href="#arrow"></use>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
