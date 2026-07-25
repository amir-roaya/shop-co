"use client";

import { Dispatch, SetStateAction, useEffect } from "react";

type ModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  massage: string;
};

export default function Modal({
  isModalOpen,
  setIsModalOpen,
  massage,
}: ModalProps) {

  useEffect(() => {
    if (!isModalOpen) return;

    const timer = setTimeout(() => {
      setIsModalOpen(false);
    }, 2500);

    return () => {
      clearTimeout(timer);
    };
  }, [isModalOpen, setIsModalOpen]);

  return (
    <div
      className={`flex fixed w-72 h-0 bg-[rgb(85,85,85)] text-white font-satoshi-bold rounded-3xl justify-center items-center gap-2 bottom-[2%] inset-x-0 mx-auto z-130 opacity-0 overflow-clip main-transition ${isModalOpen ? "show-modal" : ""} p-3.5`}
    >
      <span>{massage}</span>

      <div className=" rounded-full p-0.5 bg-green-600 text-white">
        <svg>
          <use href="#check"></use>
        </svg>
      </div>
    </div>
  );
}
