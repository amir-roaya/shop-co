import Comments from "@/components/home/Comments";
import ProductCarousel from "@/components/products/ProductCarousel";
import Reveal from "@/components/ui/Reveal";
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
              <Reveal direction="up" delay={300}>
                <h1 className="font-integral-cf text-4xl 2xl:text-5xl">
                  FIND CLOTHES THAT MATCHES YOUR STYLE
                </h1>
              </Reveal>

              <Reveal direction="up" delay={500}>
                <p className="text-text-secondary 2xl:text-xl">
                  Browse through our diverse range of meticulously crafted
                  garments, designed to bring out your individuality and cater
                  to your sense of style.
                </p>
              </Reveal>

              <Reveal direction="up" delay={700} className="flex">
                <Link
                  href={"/products"}
                  className="w-full py-3.5 text-center bg-black border text-white rounded-4xl md:w-[40%] main-transition hover:bg-white hover:text-black"
                >
                  Shop Now
                </Link>
              </Reveal>

              <div className="flex flex-wrap gap-x-2 gap-y-4 min-[480px]:gap-x-3 justify-center lg:justify-start">
                <Reveal direction="left" delay={900}>
                  <div className="flex flex-col px-2">
                    <span className="font-satoshi-bold text-xl min-[480px]:text-2xl">
                      200+
                    </span>
                    <span className="text-text-secondary text-xs md:text-sm">
                      International Brands
                    </span>
                  </div>
                </Reveal>

                <Reveal delay={950}>
                  <div className="line hidden min-[350px]:block"></div>
                </Reveal>

                <Reveal direction="left" delay={1000}>
                  <div className="flex flex-col px-2">
                    <span className="font-satoshi-bold text-xl min-[480px]:text-2xl">
                      2,000+
                    </span>
                    <span className="text-text-secondary text-xs md:text-sm">
                      High-Quality Products
                    </span>
                  </div>
                </Reveal>

                <Reveal delay={1150}>
                  <div className="line hidden min-[445px]:block md:hidden lg:block"></div>
                </Reveal>

                <Reveal direction="left" delay={1100}>
                  <div className="flex flex-col px-2">
                    <span className="font-satoshi-bold text-xl min-[480px]:text-2xl">
                      30,000+
                    </span>
                    <span className="text-text-secondary text-xs md:text-sm">
                      Happy Customers
                    </span>
                  </div>
                </Reveal>
              </div>
            </div>

            <Reveal delay={100} className="md:w-[50%]">
              <div className="hero-secttion relative">
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
            </Reveal>
          </div>
        </div>

        <div className="bg-black">
          <div className="container flex items-center flex-wrap justify-center gap-x-8 gap-y-3 text-white py-5 text-xl font-satoshi-bold md:text-2xl md:justify-evenly">
            <Reveal direction="right" delay={900}>
              <p>VERSACE</p>
            </Reveal>

            <Reveal direction="right" delay={1000}>
              <p>ZARA</p>
            </Reveal>

            <Reveal direction="right" delay={1100}>
              <p>GUCCI</p>
            </Reveal>

            <Reveal direction="right" delay={1200}>
              <p>PRADA</p>
            </Reveal>

            <Reveal direction="right" delay={1300}>
              <p>CALVIN KLEIN</p>
            </Reveal>
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
            <Reveal direction="up" delay={300}>
              <h3 className="font-integral-cf text-3xl text-center">
                Browse by product category
              </h3>
            </Reveal>

            <div className="py-7 space-y-5 lg:space-y-8 xl:py-11">
              <div className="grid gap-6 lg:gap-9 dress-grid justify-center md:dress-grid-desktop">
                <Reveal direction="left" delay={500} className="flex">
                  <Link
                    href={"/products?category=beauty"}
                    className="relative h-60 xl:h-80 rounded-xl w-full overflow-hidden main-transition hover:scale-105"
                  >
                    <div className="dress-section bg-[url(/images/beauty.jfif)]"></div>

                    <h6 className="absolute font-satoshi-bold text-2xl left-[32%] top-[6%] xl:text-4xl text-orange-600">
                      Beauty
                    </h6>
                  </Link>
                </Reveal>

                <Reveal direction="left" delay={600} className="flex">
                  <Link
                    href={"/products?category=fragrances"}
                    className="relative h-60 xl:h-80 rounded-xl w-full overflow-hidden main-transition hover:scale-105"
                  >
                    <div className="dress-section bg-[url(/images/fragrances.jpg)]"></div>

                    <h6 className="absolute font-satoshi-bold text-2xl left-[32%] top-[6%] xl:text-4xl text-black">
                      Fragrances
                    </h6>
                  </Link>
                </Reveal>
              </div>

              <div className="grid gap-6 lg:gap-9 dress-grid justify-center md:dress-grid-desktop-reverse">
                <Reveal direction="right" delay={800} className="flex">
                  <Link
                    href={"/products?category=furniture"}
                    className="relative h-60 xl:h-80 rounded-xl w-full overflow-hidden main-transition hover:scale-105"
                  >
                    <div className="dress-section bg-[url(/images/furniture.jpg)]"></div>

                    <h6 className="absolute font-satoshi-bold text-2xl left-[32%] top-[6%] xl:text-4xl text-yellow-600">
                      Furniture
                    </h6>
                  </Link>
                </Reveal>

                <Reveal direction="right" delay={900} className="flex">
                  <Link
                    href={"/products?category=groceries"}
                    className="relative h-60 xl:h-80 rounded-xl w-full overflow-hidden main-transition hover:scale-105"
                  >
                    <div className="dress-section bg-[url(/images/groceries.jfif)]"></div>

                    <h6 className="absolute font-satoshi-bold text-2xl left-[32%] top-[6%] xl:text-4xl text-white">
                      Groceries
                    </h6>
                  </Link>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-12">
        <div className="container">
          <Comments />
        </div>
      </section>
    </main>
  );
}
