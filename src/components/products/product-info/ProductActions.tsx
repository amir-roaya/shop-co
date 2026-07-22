"use client";

import Modal from "@/components/ui/Modal";
import { useCartStore } from "@/store/cartStore";
import { Product } from "@/types/product";
import { useState } from "react";

export default function ProductActions({ product }: { product: Product }) {
  const [size, setSize] = useState("Small");
  const [quatity, setQuantity] = useState(1);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <>
      <div className="border-b border-border-color-primary shadow-line-shadow pt-3 pb-8 md:pt-1 md:pb-5 xl:pb-10 xl:pt-5 2xl:pb-12 2xl:pt-5 flex flex-col gap-4">
        <h6 className="text-text-secondary">Choose Size</h6>

        <div className="flex items-center gap-3">
          <label>
            <input
              type="radio"
              name="size"
              className="peer hidden"
              value={"Small"}
              onChange={(e) => setSize(e.target.value)}
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
              onChange={(e) => setSize(e.target.value)}
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
              onChange={(e) => setSize(e.target.value)}
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
              onChange={(e) => setSize(e.target.value)}
            />

            <span className="bg-bg-secondary rounded-4xl py-3 px-4.5 text-xs text-text-secondary peer-checked:bg-black peer-checked:text-white cursor-pointer xl:text-lg main-transition">
              X-Large
            </span>
          </label>
        </div>
      </div>

      <div className="flex items-center pt-4 md:pt-3 xl:pt-6 2xl:pt-8 gap-3">
        <div className="basis-1/3 flex items-center justify-between bg-bg-secondary py-3 xl:py-5 px-3.5 xl:px-4 rounded-3xl">
          <button
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

          <button onClick={() => setQuantity((prev) => prev + 1)}>
            <svg className="w-4 h-4 xl:w-6 xl:h-6">
              <use href="#plus"></use>
            </svg>
          </button>
        </div>

        <button
          onClick={() => {
            setIsModalOpen(true);
            addToCart(product, size, quatity);
          }}
          className={`basis-2/3 py-3 xl:py-5 bg-black text-white rounded-3xl ${isModalOpen ? "cursor-not-allowed" : ""}`}
          disabled={isModalOpen}
        >
          Add to Cart
        </button>
      </div>

      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
}
