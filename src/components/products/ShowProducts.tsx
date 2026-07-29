import { Product } from "@/types/product";
import { getRatingWidth } from "@/utils/ratinng";
import Image from "next/image";
import Link from "next/link";
import Reveal from "../ui/Reveal";

type ShowProductsProps = {
  products: Product[];
};

export default function ShowProducts({ products }: ShowProductsProps) {
  return (
    <div className="py-6 grid products-grid gap-x-4 gap-y-4 justify-center lg:products-grid-desktop lg:gap-7">
      {products &&
        (products.length > 0 ? (
          products.map(({ id, image, price, rating, title }, index) => (
            <Reveal key={id} direction="right" delay={index * 200 + 200}>
              <div className="flex flex-col gap-1">
                <div className="bg-bg-secondary rounded-2xl flex items-center justify-center h-46 lg:h-57.5">
                  <Image
                    width={180}
                    height={180}
                    src={image}
                    alt="Product image"
                    className="max-h-full w-auto object-contain"
                  ></Image>
                </div>

                <Link
                  href={`/products/${id}`}
                  className="truncate font-satoshi-bold main-transition hover:text-text-secondary"
                  title={title}
                >
                  {title}
                </Link>

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
            </Reveal>
          ))
        ) : (
          <Reveal direction="right" delay={500}>
            <div className="font-satoshi-bold text-black text-center text-2xl my-20">
              No product found !
            </div>
          </Reveal>
        ))}
    </div>
  );
}
