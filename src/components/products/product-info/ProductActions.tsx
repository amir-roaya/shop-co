"use client";

import Modal from "@/components/ui/Modal";
import Reveal from "@/components/ui/Reveal";
import { useCartStore } from "@/store/cartStore";
import { Product } from "@/types/product";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ProductActions({
  product,
  isLoggedIn,
}: {
  product: Product;
  isLoggedIn: boolean;
}) {
  const [size, setSize] = useState("Small");
  const [quatity, setQuantity] = useState(1);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const addToCart = useCartStore((state) => state.addToCart);

  const router = useRouter();

  return (
    <>
      <div className="pt-3 pb-8 md:pt-1 md:pb-5 xl:pb-10 xl:pt-5 2xl:pb-12 2xl:pt-5 flex flex-col gap-4">
        <Reveal direction="up" delay={1300}>
          <h6 className="text-text-secondary">Choose Size</h6>
        </Reveal>

        <div className="flex items-center gap-1 sm:gap-3">
          <Reveal direction="up" delay={1400}>
            <label>
              <input
                type="radio"
                name="size"
                className="peer hidden"
                value={"Small"}
                onChange={(e) => setSize(e.target.value)}
                defaultChecked
              />

              <span className="bg-bg-secondary rounded-4xl py-2 px-3 sm:py-3 sm:px-4.5 text-xs text-text-secondary peer-checked:bg-black peer-checked:text-white cursor-pointer xl:text-lg main-transition border border-transparent hover:border-black">
                Small
              </span>
            </label>
          </Reveal>

          <Reveal direction="up" delay={1450}>
            <label>
              <input
                type="radio"
                name="size"
                className="peer hidden"
                value={"Medium"}
                onChange={(e) => setSize(e.target.value)}
              />

              <span className="bg-bg-secondary rounded-4xl py-2 px-3 sm:py-3 sm:px-4.5 text-xs text-text-secondary peer-checked:bg-black peer-checked:text-white cursor-pointer xl:text-lg main-transition border border-transparent hover:border-black">
                Medium
              </span>
            </label>
          </Reveal>

          <Reveal direction="up" delay={1500}>
            <label>
              <input
                type="radio"
                name="size"
                className="peer hidden"
                value={"Large"}
                onChange={(e) => setSize(e.target.value)}
              />

              <span className="bg-bg-secondary rounded-4xl py-2 px-3 sm:py-3 sm:px-4.5 text-xs text-text-secondary peer-checked:bg-black peer-checked:text-white cursor-pointer xl:text-lg main-transition border border-transparent hover:border-black">
                Large
              </span>
            </label>
          </Reveal>

          <Reveal direction="up" delay={1550}>
            <label>
              <input
                type="radio"
                name="size"
                className="peer hidden"
                value={"X-Large"}
                onChange={(e) => setSize(e.target.value)}
              />

              <span className="bg-bg-secondary rounded-4xl py-2 px-3 sm:py-3 sm:px-4.5 text-xs text-text-secondary peer-checked:bg-black peer-checked:text-white cursor-pointer xl:text-lg main-transition border border-transparent hover:border-black">
                X-Large
              </span>
            </label>
          </Reveal>
        </div>
      </div>

      <Reveal delay={1600}>
        <div className="border-b border-border-color-primary shadow-line-shadow"></div>
      </Reveal>

      <div className="flex items-center pt-4 md:pt-3 xl:pt-6 2xl:pt-8 gap-3">
        <Reveal direction="left" delay={1650} className="basis-1/3 ">
          <div className="w-full flex items-center justify-between bg-bg-secondary py-3 xl:py-5 px-3.5 xl:px-4 rounded-3xl">
            <button
              className="main-transition border rounded-sm p-0.5 border-transparent hover:border-black"
              onClick={() => {
                if (quatity > 1) {
                  setQuantity((prev) => prev - 1);
                }
              }}
            >
              <svg className="w-4 h-4 xl:w-6 xl:h-6">
                <use href="#minus"></use>
              </svg>
            </button>

            <span className="xl:text-xl">{quatity}</span>

            <button
              className="main-transition border rounded-sm p-0.5 border-transparent hover:border-black"
              onClick={() => setQuantity((prev) => prev + 1)}
            >
              <svg className="w-4 h-4 xl:w-6 xl:h-6">
                <use href="#plus"></use>
              </svg>
            </button>
          </div>
        </Reveal>

        <Reveal direction="left" delay={1700} className="basis-2/3">
          <button
            onClick={() => {
              if (isLoggedIn) {
                setIsModalOpen(true);
                addToCart(product, size, quatity);
              } else {
                router.push("/login");
              }
            }}
            className={`w-full py-3 xl:py-5 bg-black border text-white rounded-3xl ${isModalOpen ? "cursor-not-allowed" : ""} main-transition ${!isModalOpen ? "hover:bg-bg-secondary hover:text-black" : ""}`}
            disabled={isModalOpen}
          >
            Add to Cart
          </button>
        </Reveal>
      </div>

      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        massage="Added to cart successfully !"
      />
    </>
  );
}
