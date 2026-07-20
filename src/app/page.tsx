import ProductCarousel from "@/components/products/ProductCarousel";
import { getProducts } from "@/services/products";
import { getNewArrivals } from "@/utils/getNewArrivals";
import { getTopSelling } from "@/utils/getTopSellings";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const products = await getProducts();
  const newArrivals = getNewArrivals(products);
  const topSelling = getTopSelling(products);

  return (
    <main>
      <section className="bg-bg-secondary pt-7">
        <div className="container">
          <div className="flex flex-col gap-2 md:flex-row">
            <div className="flex flex-col gap-6 md:w-[50%] lg:gap-8">
              <h1 className="font-integral-cf text-4xl 2xl:text-5xl">
                FIND CLOTHES THAT MATCHES YOUR STYLE
              </h1>

              <p className="text-text-secondary 2xl:text-xl">
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style.
              </p>

              <Link
                href={"#"}
                className="w-full py-3.5 text-center bg-black text-white rounded-4xl md:w-[40%]"
              >
                Shop Now
              </Link>

              <div className="flex flex-wrap shrink-0 gap-x-5 gap-y-4 min-[480px]:gap-x-3 justify-center lg:justify-start">
                <div className="flex flex-col px-2">
                  <span className="font-satoshi-bold text-2xl">200+</span>
                  <span className="text-text-secondary text-xs md:text-sm">
                    International Brands
                  </span>
                </div>

                <div className="line"></div>

                <div className="flex flex-col px-2">
                  <span className="font-satoshi-bold text-2xl">2,000+</span>
                  <span className="text-text-secondary text-xs md:text-sm">
                    High-Quality Products
                  </span>
                </div>

                <div className="line hidden min-[480px]:block md:hidden lg:block"></div>

                <div className="flex flex-col px-2">
                  <span className="font-satoshi-bold text-2xl">30,000+</span>
                  <span className="text-text-secondary text-xs md:text-sm">
                    Happy Customers
                  </span>
                </div>
              </div>
            </div>

            <div className="hero-secttion relative md:w-[50%]">
              <div className="absolute right-[4%] min-[480px]:right-[14%] top-[1%] min-[480px]:top-[4%] md:right-[-2%] md:top-0">
                <Image
                  width={76}
                  height={76}
                  alt="Hero Shape"
                  src={"/images/shape.png"}
                ></Image>
              </div>

              <div className="absolute left-[2%] min-[480px]:left-[10%] top-[34%] min-[480px]:top-[36%] md:left-[10%] md:top-[18%]">
                <Image
                  width={44}
                  height={44}
                  alt="Hero Shape"
                  src={"/images/shape.png"}
                ></Image>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black">
          <div className="container flex items-center flex-wrap justify-center gap-x-8 gap-y-3 text-white py-5 text-xl font-satoshi-bold md:text-2xl md:justify-evenly">
            <p>VERSACE</p>
            <p>ZARA</p>
            <p>GUCCI</p>
            <p>PRADA</p>
            <p>CALVIN KLEIN</p>
          </div>
        </div>
      </section>

      <section className="pt-12">
        <div className="container border-b border-line-color-primary pb-11 shadow-line-shadow">
          <ProductCarousel title="NEW ARRIVALS" products={newArrivals} />
        </div>
      </section>

      <section className="pt-12">
        <div className="container">
          <ProductCarousel title="top selling" products={topSelling} />
        </div>
      </section>

      <section className="pt-12">
        <div className="container">
          <div className="bg-bg-secondary pt-13 px-6 xl:px-8 rounded-2xl">
            <h3 className="font-integral-cf text-3xl text-center">
              BROWSE BY dress STYLE
            </h3>

            <div className="py-7 space-y-5 xl:py-11">
              <div className="grid gap-6 dress-grid justify-center md:dress-grid-desktop">
                <div className="relative h-60 xl:h-80 rounded-xl overflow-hidden">
                  <div className="dress-section"></div>

                  <h6 className="absolute font-satoshi-bold text-xl left-[10%] top-[16%] xl:text-2xl">
                    Casual
                  </h6>
                </div>

                <div className="relative h-60 xl:h-80 rounded-xl overflow-hidden">
                  <div className="dress-section"></div>

                  <h6 className="absolute font-satoshi-bold text-xl left-[10%] top-[16%] xl:text-2xl">
                    Casual
                  </h6>
                </div>
              </div>

              <div className="grid gap-6 dress-grid justify-center md:dress-grid-desktop-reverse">
                <div className="relative h-60 xl:h-80 rounded-xl overflow-hidden">
                  <div className="dress-section"></div>

                  <h6 className="absolute font-satoshi-bold text-xl left-[10%] top-[16%] xl:text-2xl">
                    Casual
                  </h6>
                </div>

                <div className="relative h-60 xl:h-80 rounded-xl overflow-hidden">
                  <div className="dress-section"></div>

                  <h6 className="absolute font-satoshi-bold text-xl left-[10%] top-[16%] xl:text-2xl">
                    Casual
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-12">
        <div className="container">
          <div className="flex justify-between items-end">
            <h3 className="font-integral-cf text-3xl">OUR HAPPY CUSTOMERS</h3>

            <div className="flex gap-4">
              <button>
                <svg>
                  <use href="#arrow"></use>
                </svg>
              </button>

              <button className="rotate-180">
                <svg>
                  <use href="#arrow"></use>
                </svg>
              </button>
            </div>
          </div>

          <div className="mt-7 overflow-x-hidden">
            <div className="flex gap-4 justify-center">
              <div className="comment">
                <div className="overflow-hidden">
                  <div className="flex items-center gap-1">
                    <div>
                      <svg className="w-5 h-4.75">
                        <use href="#star"></use>
                      </svg>
                    </div>

                    <div>
                      <svg className="w-5 h-4.75">
                        <use href="#star"></use>
                      </svg>
                    </div>

                    <div>
                      <svg className="w-5 h-4.75">
                        <use href="#star"></use>
                      </svg>
                    </div>

                    <div>
                      <svg className="w-5 h-4.75">
                        <use href="#star"></use>
                      </svg>
                    </div>

                    <div>
                      <svg className="w-5 h-4.75">
                        <use href="#star"></use>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <h6 className="font-satoshi-bold">Sarah M.</h6>

                  <span className="bg-green-600 rounded-full p-0.5">
                    <svg className="w-3.5 h-3.5 text-white">
                      <use href="#check"></use>
                    </svg>
                  </span>
                </div>

                <p className="text-text-secondary text-sm lg:text-[16px]">
                  &quot;I&apos;m blown away by the quality and style of the
                  clothes I received from Shop.co. From casual wear to elegant
                  dresses, every piece I&apos;ve bought has exceeded my
                  expectations.&quot;
                </p>
              </div>

              <div className="comment">
                <div className="overflow-hidden">
                  <div className="flex items-center gap-1">
                    <div>
                      <svg className="w-5 h-4.75">
                        <use href="#star"></use>
                      </svg>
                    </div>

                    <div>
                      <svg className="w-5 h-4.75">
                        <use href="#star"></use>
                      </svg>
                    </div>

                    <div>
                      <svg className="w-5 h-4.75">
                        <use href="#star"></use>
                      </svg>
                    </div>

                    <div>
                      <svg className="w-5 h-4.75">
                        <use href="#star"></use>
                      </svg>
                    </div>

                    <div>
                      <svg className="w-5 h-4.75">
                        <use href="#star"></use>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <h6 className="font-satoshi-bold">Sarah M.</h6>

                  <span className="bg-green-600 rounded-full p-0.5">
                    <svg className="w-3.5 h-3.5 text-white">
                      <use href="#check"></use>
                    </svg>
                  </span>
                </div>

                <p className="text-text-secondary text-sm lg:text-[16px]">
                  &quot;I&apos;m blown away by the quality and style of the
                  clothes I received from Shop.co. From casual wear to elegant
                  dresses, every piece I&apos;ve bought has exceeded my
                  expectations.&quot;
                </p>
              </div>

              <div className="comment">
                <div className="overflow-hidden">
                  <div className="flex items-center gap-1">
                    <div>
                      <svg className="w-5 h-4.75">
                        <use href="#star"></use>
                      </svg>
                    </div>

                    <div>
                      <svg className="w-5 h-4.75">
                        <use href="#star"></use>
                      </svg>
                    </div>

                    <div>
                      <svg className="w-5 h-4.75">
                        <use href="#star"></use>
                      </svg>
                    </div>

                    <div>
                      <svg className="w-5 h-4.75">
                        <use href="#star"></use>
                      </svg>
                    </div>

                    <div>
                      <svg className="w-5 h-4.75">
                        <use href="#star"></use>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <h6 className="font-satoshi-bold">Sarah M.</h6>

                  <span className="bg-green-600 rounded-full p-0.5">
                    <svg className="w-3.5 h-3.5 text-white">
                      <use href="#check"></use>
                    </svg>
                  </span>
                </div>

                <p className="text-text-secondary text-sm lg:text-[16px]">
                  &quot;I&apos;m blown away by the quality and style of the
                  clothes I received from Shop.co. From casual wear to elegant
                  dresses, every piece I&apos;ve bought has exceeded my
                  expectations.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
