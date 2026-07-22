import { Product } from "@/types/product";
import { getRatingWidth } from "@/utils/ratinng";
import Image from "next/image";

type ShowProductsProps = {
  products: Product[];
};

export default function ShowProducts({ products }: ShowProductsProps) {
  return (
    <div className="py-6 grid products-grid gap-x-4 gap-y-4 border-b justify-center border-border-color-primary shadow-line-shadow lg:products-grid-desktop lg:gap-7">
      {products.map(({ id, image, price, rating, title }) => (
        <div key={id} className="flex flex-col gap-1">
          <div className="bg-bg-secondary rounded-2xl flex items-center justify-center h-46 lg:h-57.5">
            <Image
              width={180}
              height={180}
              src={image}
              alt="Product image"
              className="max-h-full w-auto object-contain"
            ></Image>
          </div>

          <h6 className="truncate font-satoshi-bold" title={title}>
            {title}
          </h6>

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
  );
}
