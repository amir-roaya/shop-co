import Image from "next/image";

export default function page() {
  return (
    <main>
      <section>
        <div className="container">
          <div className="header-line"></div>

          <div className="flex gap-4">
            <div className="hidden md:flex flex-col border border-border-color-primary rounded-2xl basis-[25%] p-4 h-fit shadow-main-shadow">
              <div className="flex justify-between items-center pb-5">
                <h5 className="font-satoshi-bold">Filters</h5>

                <div>
                  <svg className="w-5 h-5 text-text-secondary">
                    <use href="#filters"></use>
                  </svg>
                </div>
              </div>

              <div className="border-t border-border-color-primary flex flex-col">
                <button className="flex items-center justify-between py-5">
                  <span className="font-satoshi-bold">Dress Style</span>

                  <div>
                    <svg className="w-4 h-4">
                      <use href="#chevron-down"></use>
                    </svg>
                  </div>
                </button>
              </div>

              <div className="border-t border-border-color-primary flex flex-col">
                <button className="flex items-center justify-between py-5">
                  <span className="font-satoshi-bold">Price</span>

                  <div>
                    <svg className="w-4 h-4">
                      <use href="#chevron-down"></use>
                    </svg>
                  </div>
                </button>
              </div>

              <button className="w-full py-2 text-center bg-black text-white rounded-4xl text-sm lg:text-[18px] lg:py-3">
                Apply Filter
              </button>
            </div>

            <div className="basis-full md:basis-[75%]">
              <div className="flex items-center justify-between">
                <h5 className="font-satoshi-bold text-2xl">Casual</h5>

                <p className="text-text-secondary hidden sm:block">
                  Showing 1-10 of 100 Products
                </p>

                <div className="md:hidden flex items-center gap-3">
                  <button className="flex items-center gap-1.5">
                    <span className="text-lg">sort</span>

                    <div>
                      <svg className="w-4 h-4">
                        <use href="#chevron-down"></use>
                      </svg>
                    </div>
                  </button>

                  <button className="bg-bg-secondary p-1.5 rounded-full">
                    <svg className="w-4 h-4">
                      <use href="#filters"></use>
                    </svg>
                  </button>
                </div>

                <div className="text-sm hidden md:flex gap-2">
                  <span className="text-text-secondary">Sorted by:</span>

                  <button className="font-satoshi-bold flex items-center gap-1">
                    <span>Most Popular</span>

                    <div>
                      <svg className="w-4 h-4">
                        <use href="#chevron-down"></use>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>

              <div className="py-6 grid products-grid gap-x-3 gap-y-4 border-b border-border-color-primary shadow-line-shadow lg:products-grid-desktop lg:gap-6">
                <div className="flex flex-col gap-1">
                  <div>
                    <Image
                      width={172}
                      height={175}
                      src={"/images/image10.png"}
                      alt="Product image"
                      className="rounded-2xl overflow-hidden w-full h-auto"
                    ></Image>
                  </div>

                  <h6
                    className="truncate font-satoshi-bold"
                    title="Gradient Graphic T-shirt"
                  >
                    Gradient Graphic T-shirt
                  </h6>

                  <div className="flex items-center gap-4">
                    <div className="overflow-hidden">
                      <div className="flex items-center gap-1">
                        <div>
                          <svg className="w-3.75 h-3.5">
                            <use href="#star"></use>
                          </svg>
                        </div>

                        <div>
                          <svg className="w-3.75 h-3.5">
                            <use href="#star"></use>
                          </svg>
                        </div>

                        <div>
                          <svg className="w-3.75 h-3.5">
                            <use href="#star"></use>
                          </svg>
                        </div>

                        <div>
                          <svg className="w-3.75 h-3.5">
                            <use href="#star"></use>
                          </svg>
                        </div>

                        <div>
                          <svg className="w-3.75 h-3.5">
                            <use href="#star"></use>
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div>
                      <span>4.5/</span>
                      <span className="text-text-secondary">5</span>
                    </div>
                  </div>

                  <span className="font-satoshi-bold">$120</span>
                </div>

                <div className="flex flex-col gap-1">
                  <div>
                    <Image
                      width={172}
                      height={175}
                      src={"/images/image10.png"}
                      alt="Product image"
                      className="rounded-2xl overflow-hidden w-full h-auto"
                    ></Image>
                  </div>

                  <h6
                    className="truncate font-satoshi-bold"
                    title="Gradient Graphic T-shirt"
                  >
                    Gradient Graphic T-shirt
                  </h6>

                  <div className="flex items-center gap-4">
                    <div className="overflow-hidden">
                      <div className="flex items-center gap-1">
                        <div>
                          <svg className="w-3.75 h-3.5">
                            <use href="#star"></use>
                          </svg>
                        </div>

                        <div>
                          <svg className="w-3.75 h-3.5">
                            <use href="#star"></use>
                          </svg>
                        </div>

                        <div>
                          <svg className="w-3.75 h-3.5">
                            <use href="#star"></use>
                          </svg>
                        </div>

                        <div>
                          <svg className="w-3.75 h-3.5">
                            <use href="#star"></use>
                          </svg>
                        </div>

                        <div>
                          <svg className="w-3.75 h-3.5">
                            <use href="#star"></use>
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div>
                      <span>4.5/</span>
                      <span className="text-text-secondary">5</span>
                    </div>
                  </div>

                  <span className="font-satoshi-bold">$120</span>
                </div>

                <div className="flex flex-col gap-1">
                  <div>
                    <Image
                      width={172}
                      height={175}
                      src={"/images/image10.png"}
                      alt="Product image"
                      className="rounded-2xl overflow-hidden w-full h-auto"
                    ></Image>
                  </div>

                  <h6
                    className="truncate font-satoshi-bold"
                    title="Gradient Graphic T-shirt"
                  >
                    Gradient Graphic T-shirt
                  </h6>

                  <div className="flex items-center gap-4">
                    <div className="overflow-hidden">
                      <div className="flex items-center gap-1">
                        <div>
                          <svg className="w-3.75 h-3.5">
                            <use href="#star"></use>
                          </svg>
                        </div>

                        <div>
                          <svg className="w-3.75 h-3.5">
                            <use href="#star"></use>
                          </svg>
                        </div>

                        <div>
                          <svg className="w-3.75 h-3.5">
                            <use href="#star"></use>
                          </svg>
                        </div>

                        <div>
                          <svg className="w-3.75 h-3.5">
                            <use href="#star"></use>
                          </svg>
                        </div>

                        <div>
                          <svg className="w-3.75 h-3.5">
                            <use href="#star"></use>
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div>
                      <span>4.5/</span>
                      <span className="text-text-secondary">5</span>
                    </div>
                  </div>

                  <span className="font-satoshi-bold">$120</span>
                </div>

                <div className="flex flex-col gap-1">
                  <div>
                    <Image
                      width={172}
                      height={175}
                      src={"/images/image10.png"}
                      alt="Product image"
                      className="rounded-2xl overflow-hidden w-full h-auto"
                    ></Image>
                  </div>

                  <h6
                    className="truncate font-satoshi-bold"
                    title="Gradient Graphic T-shirt"
                  >
                    Gradient Graphic T-shirt
                  </h6>

                  <div className="flex items-center gap-4">
                    <div className="overflow-hidden">
                      <div className="flex items-center gap-1">
                        <div>
                          <svg className="w-3.75 h-3.5">
                            <use href="#star"></use>
                          </svg>
                        </div>

                        <div>
                          <svg className="w-3.75 h-3.5">
                            <use href="#star"></use>
                          </svg>
                        </div>

                        <div>
                          <svg className="w-3.75 h-3.5">
                            <use href="#star"></use>
                          </svg>
                        </div>

                        <div>
                          <svg className="w-3.75 h-3.5">
                            <use href="#star"></use>
                          </svg>
                        </div>

                        <div>
                          <svg className="w-3.75 h-3.5">
                            <use href="#star"></use>
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div>
                      <span>4.5/</span>
                      <span className="text-text-secondary">5</span>
                    </div>
                  </div>

                  <span className="font-satoshi-bold">$120</span>
                </div>
              </div>

              <div className="flex items-center pt-5 justify-between text-sm">
                <button className="flex items-center gap-2 p-2 border border-border-color-primary rounded-xl">
                  <div>
                    <svg className="w-4 h-4">
                      <use href="#arrow"></use>
                    </svg>
                  </div>

                  <span>Previous</span>
                </button>

                <div className="flex items-center text-text-secondary">
                  <button className="py-1 px-2.75 rounded-lg current-page">
                    1
                  </button>
                  <button className="py-1 px-2.75 rounded-lg">2</button>
                  <button className="py-1 px-2.75 rounded-lg">3</button>
                  <button className="py-1 px-2.75 rounded-lg">4</button>
                </div>

                <button className="flex items-center gap-2 p-2 border border-border-color-primary rounded-xl">
                  <span>Next</span>

                  <div>
                    <svg className="rotate-180 w-4 h-4">
                      <use href="#arrow"></use>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
