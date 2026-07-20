import { Product } from "@/types/product";
import { getRatingWidth } from "@/utils/ratinng";
import Image from "next/image";

type ProductInfoProps = {
  product: Product;
};

export default function ProductInfo({ product }: ProductInfoProps) {
  const { description, image, price, title, rating } = product;

  return (
    <div className="flex flex-col gap-4 md:flex-row md:gap-6">
      <div className="md:basis-1/2 bg-bg-secondary rounded-2xl flex items-center justify-center">
        <Image
          width={180}
          height={180}
          src={`${image}`}
          alt="Product image"
          className="w-full h-auto object-cover"
          loading="eager"
        ></Image>
      </div>

      <div className="flex flex-col gap-2 md:basis-1/2 md:gap-1 md:justify-center lg:gap-2.5 xl:gap-3 2xl:gap-5">
        <h2
          title={`${title}`}
          className="font-integral-cf text-xl lg:text-4xl xl:text-5xl truncate"
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

        <div className="border-b border-border-color-primary shadow-line-shadow pt-3 pb-8 md:pt-1 md:pb-5 xl:pb-10 xl:pt-5 2xl:pb-12 2xl:pt-5 flex flex-col gap-4">
          <h6 className="text-text-secondary">Choose Size</h6>

          <div className="flex items-center gap-3">
            <label>
              <input
                type="radio"
                name="size"
                className="peer hidden"
                value={"Small"}
                defaultChecked
              />

              <span className="bg-bg-secondary rounded-4xl py-3 px-4.5 text-xs text-text-secondary peer-checked:bg-black peer-checked:text-white cursor-pointer xl:text-lg main-transition">
                Small
              </span>
            </label>

            <label>
              <input
                type="radio"
                name="size"
                className="peer hidden"
                value={"Medium"}
              />

              <span className="bg-bg-secondary rounded-4xl py-3 px-4.5 text-xs text-text-secondary peer-checked:bg-black peer-checked:text-white cursor-pointer xl:text-lg main-transition">
                Medium
              </span>
            </label>

            <label>
              <input
                type="radio"
                name="size"
                className="peer hidden"
                value={"Large"}
              />

              <span className="bg-bg-secondary rounded-4xl py-3 px-4.5 text-xs text-text-secondary peer-checked:bg-black peer-checked:text-white cursor-pointer xl:text-lg main-transition">
                Large
              </span>
            </label>

            <label>
              <input
                type="radio"
                name="size"
                className="peer hidden"
                value={"X-Large"}
              />

              <span className="bg-bg-secondary rounded-4xl py-3 px-4.5 text-xs text-text-secondary peer-checked:bg-black peer-checked:text-white cursor-pointer xl:text-lg main-transition">
                X-Large
              </span>
            </label>
          </div>
        </div>

        <div className="flex items-center pt-4 md:pt-3 xl:pt-6 2xl:pt-8 gap-3">
          <div className="basis-1/3 flex items-center justify-between bg-bg-secondary py-3 xl:py-5 px-3.5 xl:px-4 rounded-3xl">
            <button>
              <svg className="w-4 h-4 xl:w-6 xl:h-6">
                <use href="#minus"></use>
              </svg>
            </button>

            <span className="xl:text-xl">1</span>

            <button>
              <svg className="w-4 h-4 xl:w-6 xl:h-6">
                <use href="#plus"></use>
              </svg>
            </button>
          </div>

          <button className="basis-2/3 py-3 xl:py-5 bg-black text-white rounded-3xl">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
