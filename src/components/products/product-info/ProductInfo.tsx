import { Product } from "@/types/product";
import { getRatingWidth } from "@/utils/ratinng";
import Image from "next/image";
import ProductActions from "./ProductActions";
import { cookies } from "next/headers";
import Reveal from "@/components/ui/Reveal";

type ProductInfoProps = {
  product: Product;
};

export default async function ProductInfo({ product }: ProductInfoProps) {
  const { description, thumbnail, price, title, rating } = product;
  const cookieStore = await cookies();
  const isLoggedin = !!cookieStore.get("token");

  return (
    <div className="flex flex-col gap-4 md:flex-row md:gap-6">
      <Reveal delay={400} className="flex md:w-1/2">
        <div className="w-full bg-bg-secondary rounded-2xl flex items-center justify-center">
          <Image
            width={180}
            height={180}
            src={thumbnail}
            alt="Product image"
            className="max-h-full w-auto object-cover"
            loading="eager"
          ></Image>
        </div>
      </Reveal>

      <div className="flex flex-col gap-2 md:w-1/2 md:gap-1 md:justify-center lg:gap-2.5 xl:gap-3 2xl:gap-5">
        <Reveal direction="up" delay={600} className="flex">
          <h2
            title={title}
            className="font-integral-cf text-xl lg:text-2xl xl:text-3xl truncate"
          >
            {title}
          </h2>
        </Reveal>

        <div className="flex items-center gap-4">
          <Reveal direction="up" delay={800}>
            <div>
              <div
                style={{
                  width: getRatingWidth(rating),
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
          </Reveal>

          <Reveal direction="up" delay={900}>
            <div className="md:text-xl">
              <span>{rating}/</span>
              <span className="text-text-secondary">5</span>
            </div>
          </Reveal>
        </div>

        <Reveal direction="up" delay={1100}>
          <span className="font-satoshi-bold text-xl md:text-2xl">
            ${price}
          </span>
        </Reveal>

        <Reveal direction="up" delay={1200}>
          <p className="text-text-secondary text-sm border-b border-border-color-primary shadow-line-shadow pb-6 md:pb-4 lg:text-lg xl:pb-8 2xl:pb-10 xl:text-xl 2xl:text-2xl">
            {description}
          </p>
        </Reveal>

        <ProductActions product={product} isLoggedIn={isLoggedin} />
      </div>
    </div>
  );
}
