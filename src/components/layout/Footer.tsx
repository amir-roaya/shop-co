import Image from "next/image";
import Link from "next/link";
import Reveal from "../ui/Reveal";

export default function Footer() {
  return (
    <footer className="bg-bg-secondary mt-52 pt-40">
      <div className="container relative">
        <div className="bg-black flex flex-col justify-between gap-5 px-5 py-7 rounded-2xl absolute left-3 right-3 top-[-47%] md:top-[-74%] md:flex-row md:items-center lg:py-9 lg:px-7 lg:top-[-82%]">
          <Reveal
            direction="left"
            delay={300}
            className="flex basis-1/2 xl:basis-[40%]"
            requireScroll={true}
          >
            <h2 className="text-white text-3xl xl:text-4xl">
              STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </h2>
          </Reveal>

          <div className="flex flex-col gap-3 basis-1/2 xl:basis-[30%]">
            <Reveal direction="up" delay={500} requireScroll={true}>
              <div className="flex items-center gap-3 h-10.5 bg-white px-3 py-2 rounded-4xl text-text-secondary">
                <div>
                  <svg className="w-5 h-5">
                    <use href="#email"></use>
                  </svg>
                </div>

                <input
                  type="text"
                  name="newsletter"
                  placeholder="Enter your email address"
                  className="w-full h-full text-sm"
                />
              </div>
            </Reveal>

            <Reveal
              direction="up"
              delay={600}
              className="flex"
              requireScroll={true}
            >
              <button className="w-full text-sm h-10.5 bg-white px-3 py-2 rounded-4xl">
                Subscribe to Newsletter
              </button>
            </Reveal>
          </div>
        </div>

        <div className="border-b border-line-color-primary shadow-line-shadow flex flex-col gap-5 pb-10 md:flex-row md:justify-between md:items-start">
          <div className="flex flex-col gap-3 md:basis-[30%]">
            <Reveal direction="up" delay={800} requireScroll={true}>
              <Link
                href={"#"}
                className="font-integral-cf text-2xl main-transition rounded-2xl p-1.5 w-fit border border-transparent hover:border-main-hover"
              >
                SHOP.CO
              </Link>
            </Reveal>

            <Reveal direction="up" delay={850} requireScroll={true}>
              <p className="text-text-secondary text-sm">
                We have clothes that suits your style and which you&apos;re
                proud to wear. From women to men.
              </p>
            </Reveal>

            <Reveal direction="up" delay={900} requireScroll={true}>
              <div className="flex gap-3">
                <div className="bg-white rounded-full p-1.5 border border-[#00000036]">
                  <svg className="w-3 h-3">
                    <use href="#twitter"></use>
                  </svg>
                </div>

                <div className="bg-black rounded-full p-1.5 border">
                  <svg className="w-3 h-3">
                    <use href="#facebook"></use>
                  </svg>
                </div>

                <div className="bg-white rounded-full p-1.5 border border-[#00000036]">
                  <svg className="w-3 h-3">
                    <use href="#instagram"></use>
                  </svg>
                </div>

                <div className="bg-white rounded-full p-1.5 border border-[#00000036]">
                  <svg className="w-3 h-3">
                    <use href="#github"></use>
                  </svg>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="flex items-center justify-between md:basis-[35%] md:justify-start md:gap-6 lg:gap-10 lg:justify-center xl:gap-22">
            <ul className="flex flex-col gap-3">
              <Reveal direction="up" delay={1000} requireScroll={true}>
                <li className="tracking-[2px]">Company</li>
              </Reveal>

              <Reveal direction="up" delay={1050} requireScroll={true}>
                <li className="text-text-secondary text-sm">About</li>
              </Reveal>

              <Reveal direction="up" delay={1100} requireScroll={true}>
                <li className="text-text-secondary text-sm">Features</li>
              </Reveal>

              <Reveal direction="up" delay={1150} requireScroll={true}>
                <li className="text-text-secondary text-sm">Works</li>
              </Reveal>

              <Reveal direction="up" delay={1200} requireScroll={true}>
                <li className="text-text-secondary text-sm">Career</li>
              </Reveal>
            </ul>

            <ul className="flex flex-col gap-3">
              <Reveal direction="up" delay={1300} requireScroll={true}>
                <li className="tracking-[2px]">HELP</li>
              </Reveal>

              <Reveal direction="up" delay={1350} requireScroll={true}>
                <li className="text-text-secondary text-sm">
                  Customer Support
                </li>
              </Reveal>

              <Reveal direction="up" delay={1400} requireScroll={true}>
                <li className="text-text-secondary text-sm">
                  Delivery Details
                </li>
              </Reveal>

              <Reveal direction="up" delay={1450} requireScroll={true}>
                <li className="text-text-secondary text-sm">
                  Terms & Conditions
                </li>
              </Reveal>

              <Reveal direction="up" delay={1500} requireScroll={true}>
                <li className="text-text-secondary text-sm">Privacy Policy</li>
              </Reveal>
            </ul>
          </div>

          <div className="flex items-center justify-between md:basis-[35%] md:justify-start md:gap-6 lg:gap-10 lg:justify-center xl:gap-22">
            <ul className="flex flex-col gap-3">
              <Reveal direction="up" delay={1600} requireScroll={true}>
                <li className="tracking-[2px]">FAQ</li>
              </Reveal>

              <Reveal direction="up" delay={1650} requireScroll={true}>
                <li className="text-text-secondary text-sm">Account</li>
              </Reveal>

              <Reveal direction="up" delay={1700} requireScroll={true}>
                <li className="text-text-secondary text-sm">
                  Manage Deliveries
                </li>
              </Reveal>

              <Reveal direction="up" delay={1750} requireScroll={true}>
                <li className="text-text-secondary text-sm">Orders</li>
              </Reveal>

              <Reveal direction="up" delay={1800} requireScroll={true}>
                <li className="text-text-secondary text-sm">Payment</li>
              </Reveal>
            </ul>

            <ul className="flex flex-col gap-3">
              <Reveal direction="up" delay={1900} requireScroll={true}>
                <li className="tracking-[2px]">RESOURCES</li>
              </Reveal>

              <Reveal direction="up" delay={1950} requireScroll={true}>
                <li className="text-text-secondary text-sm">Free eBook</li>
              </Reveal>

              <Reveal direction="up" delay={2000} requireScroll={true}>
                <li className="text-text-secondary text-sm">
                  Development Tutorial
                </li>
              </Reveal>

              <Reveal direction="up" delay={2050} requireScroll={true}>
                <li className="text-text-secondary text-sm">How to - Blog</li>
              </Reveal>

              <Reveal direction="up" delay={2100} requireScroll={true}>
                <li className="text-text-secondary text-sm">
                  Youtube Playlist
                </li>
              </Reveal>
            </ul>
          </div>
        </div>

        <div className="flex flex-col pt-4 pb-14 items-center justify-between gap-2 md:flex-row">
          <Reveal direction="left" delay={2300} requireScroll={true}>
            <p className="text-text-secondary text-xs md:text-sm">
              Shop.co © 2000-{new Date().getFullYear()}, All Rights Reserved
            </p>
          </Reveal>

          <Reveal direction="left" delay={2500} requireScroll={true}>
            <div className="flex items-center justify-center">
              <div>
                <Image
                  alt="Badge"
                  src={"/images/Badge.png"}
                  width={40}
                  height={25}
                  className="w-full h-auto"
                ></Image>
              </div>

              <div>
                <Image
                  alt="Badge"
                  src={"/images/Badge-2.png"}
                  width={40}
                  height={25}
                  className="w-full h-auto"
                ></Image>
              </div>

              <div>
                <Image
                  alt="Badge"
                  src={"/images/Badge-3.png"}
                  width={40}
                  height={25}
                  className="w-full h-auto"
                ></Image>
              </div>

              <div>
                <Image
                  alt="Badge"
                  src={"/images/Badge-4.png"}
                  width={40}
                  height={25}
                  className="w-full h-auto"
                ></Image>
              </div>

              <div>
                <Image
                  alt="Badge"
                  src={"/images/Badge-5.png"}
                  width={40}
                  height={25}
                  className="w-full h-auto"
                ></Image>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </footer>
  );
}
