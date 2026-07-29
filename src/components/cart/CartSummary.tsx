"use client";

import { useCartStore } from "@/store/cartStore";
import Reveal from "../ui/Reveal";

export default function CartSumry() {
  const cart = useCartStore((state) => state.cart);
  const subTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  if (!cart.length) return;

  return (
    <div className="flex flex-col border border-border-color-primary p-4 rounded-2xl gap-4 h-fit md:basis-[40%] xl:gap-5 shadow-main-shadow">
      <Reveal direction="up" delay={800}>
        <h5 className="font-satoshi-bold text-lg lg:text-xl">Order Summary</h5>
      </Reveal>

      <div className="flex items-center justify-between">
        <Reveal direction="left" delay={900}>
          <span className="text-text-secondary">Subtotal</span>
        </Reveal>

        <Reveal direction="left" delay={950}>
          <span className="font-satoshi-bold">${subTotal.toFixed(2)}</span>
        </Reveal>
      </div>

      <div className="flex items-center justify-between border-b border-border-color-primary pb-4 shadow-line-shadow">
        <Reveal direction="left" delay={1050}>
          <span className="text-text-secondary">Delivery Fee</span>
        </Reveal>

        <Reveal direction="left" delay={1100}>
          <span className="font-satoshi-bold">$15</span>
        </Reveal>
      </div>

      <div className="flex items-center justify-between">
        <Reveal direction="left" delay={1200}>
          <span className="text-text-secondary">Total</span>
        </Reveal>

        <Reveal direction="left" delay={1250}>
          <span className="font-satoshi-bold">
            ${(subTotal + 15).toFixed(2)}
          </span>
        </Reveal>
      </div>

      <div className="flex items-center gap-1 sm:gap-3 md:flex-col lg:flex-row">
        <Reveal
          direction="left"
          delay={1350}
          className="w-[70%] md:w-full lg:w-[70%]"
        >
          <div className="flex items-center bg-bg-secondary rounded-3xl px-2 sm:px-3 py-3.5 gap-2 w-full">
            <div>
              <svg className="w-5 h-5">
                <use href="#tag"></use>
              </svg>
            </div>

            <input
              name="promo-code"
              type="text"
              placeholder="Add promo code"
              className="text-sm text-text-secondary w-full"
              autoComplete="promo-code"
            />
          </div>
        </Reveal>

        <Reveal
          direction="left"
          delay={1400}
          className="w-[30%] md:w-full lg:w-[30%]"
        >
          <button className="bg-black text-white rounded-3xl px-3 py-3.5 text-sm w-full">
            Apply
          </button>
        </Reveal>
      </div>

      <Reveal direction="up" delay={1500}>
        <button className="flex items-center w-full justify-center bg-black text-white rounded-3xl py-3.5 gap-2">
          <span className="text-sm">Go to Checkout</span>

          <div>
            <svg className="rotate-180 text-white w-5 h-5">
              <use href="#arrow"></use>
            </svg>
          </div>
        </button>
      </Reveal>
    </div>
  );
}
