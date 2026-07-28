"use client";

import { loginAction } from "@/actions/login";
import { LoginFormValues } from "@/validation/auth";
import { loginSchema } from "@/validation/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";
import { useRouter } from "next/navigation";
import Loading from "../ui/Loading";

export default function LoginForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onSubmit = async (data: LoginFormValues) => {
    const result = await loginAction(data);

    if (!result.success) {
      setError("root", { message: result.massage });
      return;
    }

    setIsModalOpen(true);

    setTimeout(() => {
      router.replace("/");
    }, 2500);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 xl:gap-9"
    >
      <div className="flex flex-col gap-2">
        <h2 className="font-satoshi-bold text-2xl">Log in to Exclusive</h2>
        <p className="text-sm">Enter your details below</p>asdas
      </div>

      <div className="flex flex-col gap-3 w-full">
        <input
          {...register("username")}
          type="text"
          placeholder="Username"
          className="border-b text-text-secondary border-line-color-primary shadow-line-shadow text-sm py-2 pr-2 xl:py-3"
          autoComplete="username"
        />

        {errors.username && (
          <p className="text-red-600 text-sm">{errors.username.message}</p>
        )}

        <div className="flex items-center justify-between border-b border-line-color-primary shadow-line-shadow py-2 pr-2 xl:py-3 gap-1.5">
          <input
            {...register("password")}
            type={`${showPassword ? "text" : "password"}`}
            placeholder="Password"
            className=" text-text-secondary text-sm w-full"
            autoComplete="new-password"
          />

          <button
            className="main-transition text-text-secondary hover:text-black"
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            <svg className="w-4.5 h-4.5">
              <use href={`#${showPassword ? "eye" : "eye-slash"}`}></use>
            </svg>
          </button>
        </div>

        {errors.password && (
          <p className="text-red-600 text-sm">{errors.password.message}</p>
        )}
      </div>

      <button
        className={`bg-black text-white py-3 border rounded-xl px-6 w-full main-transition ${isSubmitting ? "cursor-not-allowed" : "hover:bg-bg-secondary hover:text-black"}`}
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? <Loading textColor="white" /> : "Log In"}
      </button>

      {errors.root && (
        <p className="text-red-600 font-satoshi-bold">{errors.root.message}</p>
      )}

      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        massage="Success, redirecting to the home page..."
      />
    </form>
  );
}
