"use client";

import { useCartStore } from "@/store/cartStore";
import Image from "next/image";

export default function ShowCartItems() {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);

  return (
    <div className="flex flex-col border border-border-color-primary p-3 rounded-2xl gap-4 [&>*:not(:last-child)]:pb-4 [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-border-color-primary h-fit [&>*:not(:last-child)]:shadow-line-shadow md:basis-[60%] shadow-main-shadow">
      {cart.map(({ id, size, image, title, price, quantity }) => (
        <div key={`${id}-${size}`} className="flex gap-2.5 xl:gap-4">
          <div className="w-1/3 xl:w-[22%] bg-bg-secondary overflow-hidden rounded-2xl flex items-center justify-center h-25 sm:h-40">
            <Image
              width={100}
              height={100}
              src={image}
              alt="Product image"
              className="max-h-full w-auto object-contain"
            ></Image>
          </div>

          <div className="flex flex-col w-2/3 justify-between xl:w-[78%]">
            <div className="flex items-center justify-between">
              <h6
                title={title}
                className="font-satoshi-bold truncate w-[80%] lg:text-xl"
              >
                {title}
              </h6>

              <button onClick={() => removeFromCart(id, size)}>
                <svg className="w-5 h-5 sm:w-6 sm:h-6">
                  <use href="#trash"></use>
                </svg>
              </button>
            </div>

            <div className="text-sm flex items-center gap-1.5 lg:text-[16px]">
              <span>Size:</span>

              <span className="text-text-secondary">{size}</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="font-satoshi-bold text-lg">${price}</span>

              <div className="flex items-center justify-between bg-bg-secondary py-1.5 px-3.5 rounded-3xl w-30 sm:py-2.5">
                <button onClick={() => decreaseQuantity(id, size)}>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5">
                    <use href="#minus"></use>
                  </svg>
                </button>

                <span className="xl:text-xl">{quantity}</span>

                <button onClick={() => increaseQuantity(id, size)}>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5">
                    <use href="#plus"></use>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
