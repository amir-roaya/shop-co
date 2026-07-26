import Comments from "@/components/home/Comments";
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
                href={"/products"}
                className="w-full py-3.5 text-center bg-black border text-white rounded-4xl md:w-[40%] main-transition hover:bg-white hover:text-black"
              >
                Shop Now
              </Link>

              <div className="flex flex-wrap gap-x-2 gap-y-4 min-[480px]:gap-x-3 justify-center lg:justify-start">
                <div className="flex flex-col px-2">
                  <span className="font-satoshi-bold text-xl min-[480px]:text-2xl">
                    200+
                  </span>
                  <span className="text-text-secondary text-xs md:text-sm">
                    International Brands
                  </span>
                </div>

                <div className="line hidden min-[350px]:block"></div>

                <div className="flex flex-col px-2">
                  <span className="font-satoshi-bold text-xl min-[480px]:text-2xl">
                    2,000+
                  </span>
                  <span className="text-text-secondary text-xs md:text-sm">
                    High-Quality Products
                  </span>
                </div>

                <div className="line hidden min-[445px]:block md:hidden lg:block"></div>

                <div className="flex flex-col px-2">
                  <span className="font-satoshi-bold text-xl min-[480px]:text-2xl">
                    30,000+
                  </span>
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
              Browse by dress style
            </h3>

            <div className="py-7 space-y-5 xl:py-11">
              <div className="grid gap-6 dress-grid justify-center md:dress-grid-desktop">
                <Link
                  href={"/products?category=electronics"}
                  className="relative h-60 xl:h-80 rounded-xl overflow-hidden main-transition hover:scale-105"
                >
                  <div className="dress-section bg-[url(/images/electronics.jpeg)] main-transition hover:"></div>

                  <h6 className="absolute font-satoshi-bold text-xl left-[10%] top-[8%] xl:text-2xl">
                    Electronics
                  </h6>
                </Link>

                <Link
                  href={"/products?category=men's clothing"}
                  className="relative h-60 xl:h-80 rounded-xl overflow-hidden main-transition hover:scale-105"
                >
                  <div className="dress-section bg-[url(/images/womens.png)]"></div>

                  <h6 className="absolute font-satoshi-bold text-xl left-[10%] top-[8%] xl:text-2xl">
                    Women&apos;s clothing
                  </h6>
                </Link>
              </div>

              <div className="grid gap-6 dress-grid justify-center md:dress-grid-desktop-reverse">
                <Link
                  href={"/products?category=women's clothing"}
                  className="relative h-60 xl:h-80 rounded-xl overflow-hidden main-transition hover:scale-105"
                >
                  <div className="dress-section bg-[url(/images/mens.png)]"></div>

                  <h6 className="absolute font-satoshi-bold text-xl left-[10%] top-[8%] xl:text-2xl">
                    Men&apos;s clothing
                  </h6>
                </Link>

                <Link
                  href={"/products?category=jewelery"}
                  className="relative h-60 xl:h-80 rounded-xl overflow-hidden main-transition hover:scale-105"
                >
                  <div className="dress-section bg-[url(/images/jewelery.jpg)]"></div>

                  <h6 className="absolute font-satoshi-bold text-xl left-[10%] top-[8%] xl:text-2xl">
                    Jewelery
                  </h6>
                </Link>
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
