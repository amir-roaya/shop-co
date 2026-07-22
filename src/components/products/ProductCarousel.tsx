import Image from "next/image";
import Link from "next/link";
import { type ProductCarouselProps } from "@/types/product";
import { getRatingWidth } from "@/utils/ratinng";

export default function ProductCarousel({
  title,
  products,
}: ProductCarouselProps) {
  return (
    <>
      <h3 className="font-integral-cf text-3xl text-center">{title}</h3>

      <div className="py-10 overflow-x-hidden">
        <div className="flex justify-center gap-5">
          {products.map(({ id, image, price, rating, title }) => (
            <div
              key={id}
              className="flex flex-col gap-1.5 shrink-0 w-56 md:w-66 lg:w-78"
            >
              <div className="bg-bg-secondary rounded-2xl flex items-center justify-center h-46 lg:h-57.5">
                <Image
                  src={image}
                  width={180}
                  height={180}
                  alt="Product image"
                  className="max-h-full w-auto object-contain"
                ></Image>
              </div>

              <h5 title={title} className="font-satoshi-bold w-[90%] truncate">
                {title}
              </h5>

              <div className="flex items-center gap-4">
                <div>
                  <div
                    style={{
                      width: getRatingWidth(rating.rate),
                    }}
                    className="flex items-center gap-1 overflow-hidden"
                  >
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
                  <span>{rating.rate}/</span>
                  <span className="text-text-secondary">5</span>
                </div>
              </div>

              <span className="font-satoshi-bold">${price}</span>
            </div>
          ))}
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
