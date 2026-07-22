import { Product } from "@/types/product";
import { getRatingWidth } from "@/utils/ratinng";
import Image from "next/image";
import ProductActions from "./ProductActions";

type ProductInfoProps = {
  product: Product;
};

export default function ProductInfo({ product }: ProductInfoProps) {
  const { description, image, price, title, rating } = product;

  return (
    <div className="flex flex-col gap-4 md:flex-row md:gap-6">
      <div className="md:w-1/2 bg-bg-secondary rounded-2xl flex items-center justify-center">
        <Image
          width={180}
          height={180}
          src={image}
          alt="Product image"
          className="max-h-full w-auto object-cover"
          loading="eager"
        ></Image>
      </div>

      <div className="flex flex-col gap-2 md:w-1/2 md:gap-1 md:justify-center lg:gap-2.5 xl:gap-3 2xl:gap-5">
        <h2
          title={title}
          className="font-integral-cf text-xl lg:text-2xl xl:text-3xl truncate"
        >
          {title}
        </h2>

        <div className="flex items-center gap-4">
          <div>
            <div
              style={{
                width: getRatingWidth(rating.rate),
              }}
              className="flex items-center gap-1 overflow-hidden"
            >
              <div>
                <svg className="w-4.25 h-4 md:w-5.25 md:h-5">
                  <use href="#star"></use>
                </svg>
              </div>

              <div>
                <svg className="w-4.25 h-4 md:w-5.25 md:h-5">
                  <use href="#star"></use>
                </svg>
              </div>

              <div>
                <svg className="w-4.25 h-4 md:w-5.25 md:h-5">
                  <use href="#star"></use>
                </svg>
              </div>

              <div>
                <svg className="w-4.25 h-4 md:w-5.25 md:h-5">
                  <use href="#star"></use>
                </svg>
              </div>

              <div>
                <svg className="w-4.25 h-4 md:w-5.25 md:h-5">
                  <use href="#star"></use>
                </svg>
              </div>
            </div>
          </div>

          <div className="md:text-xl">
            <span>{rating.rate}/</span>
            <span className="text-text-secondary">5</span>
          </div>
        </div>

        <span className="font-satoshi-bold text-xl md:text-2xl">${price}</span>

        <p className="text-text-secondary text-sm border-b border-border-color-primary shadow-line-shadow pb-6 md:pb-4 lg:text-lg xl:pb-8 2xl:pb-10 xl:text-xl 2xl:text-2xl">
          {description}
        </p>

        <ProductActions product={product} />
      </div>
    </div>
  );
}
