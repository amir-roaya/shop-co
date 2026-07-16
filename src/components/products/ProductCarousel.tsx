import Image from "next/image";
import Link from "next/link";
import { type ProductCarouselProps } from "@/types/product";

export default function ProductCarousel({ title }: ProductCarouselProps) {
  return (
    <>
      <h3 className="font-integral-cf text-3xl text-center">{title}</h3>

      <div className="py-10 overflow-x-hidden">
        <div className="flex justify-center gap-5">
          <div className="flex flex-col gap-1.5 min-w-53 lg:min-w-63">
            <div>
              <Image
                src={"/images/image10.png"}
                width={198}
                height={200}
                alt="Product image"
                className="rounded-xl overflow-hidden w-full h-auto"
              ></Image>
            </div>

            <h5 className="font-satoshi-bold w-[90%]">
              T-SHIRT WITH TAPE DETAILS
            </h5>

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

          <div className="flex flex-col gap-1.5 min-w-53 lg:min-w-62.5">
            <div>
              <Image
                src={"/images/image10.png"}
                width={198}
                height={200}
                alt="Product image"
                className="rounded-xl overflow-hidden w-full h-auto"
              ></Image>
            </div>

            <h5 className="font-satoshi-bold w-[90%] w[90%]">
              T-SHIRT WITH TAPE DETAILS
            </h5>

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

          <div className="flex flex-col gap-1.5 min-w-53 lg:min-w-62.5">
            <div>
              <Image
                src={"/images/image10.png"}
                width={198}
                height={200}
                alt="Product image"
                className="rounded-xl overflow-hidden w-full h-auto"
              ></Image>
            </div>

            <h5 className="font-satoshi-bold w-[90%] w[90%]">
              T-SHIRT WITH TAPE DETAILS
            </h5>

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
      </div>

      <Link
        className="block w-full mx-auto py-3.5 text-center border border-border-color-primary rounded-4xl md:w-[30%] xl:w-59 shadow-main-shadow"
        href={"#"}
      >
        View All
      </Link>
    </>
  );
}
