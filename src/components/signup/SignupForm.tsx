"use client";

import { signupAction } from "@/actions/signup";
import { SignupFormValues } from "@/validation/auth";
import { signupSchema } from "@/validation/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onSubmit = async (data: SignupFormValues) => {
    const result = await signupAction(data);

    if (result?.success) {
      setIsModalOpen(true);

      setTimeout(() => {
        router.replace("/login");
      }, 2500);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 xl:gap-9"
    >
      <div className="flex flex-col gap-2">
        <h2 className="font-satoshi-bold text-2xl">Create an account</h2>

        <p className="text-sm">Enter your details below</p>
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

        <input
          {...register("email")}
          type="email"
          placeholder="Email"
          className="border-b text-text-secondary border-line-color-primary shadow-line-shadow text-sm py-2 pr-2 xl:py-3"
          autoComplete="email"
        />

        {errors.email && (
          <p className="text-red-600 text-sm">{errors.email.message}</p>
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
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            <svg className="w-4.5 h-4.5 text-text-secondary">
              <use href={`#${showPassword ? "eye" : "eye-slash"}`}></use>
            </svg>
          </button>
        </div>

        {errors.password && (
          <p className="text-red-600 text-sm">{errors.password.message}</p>
        )}
      </div>

      <button className="bg-black text-white py-3 rounded-xl" type="submit">
        Create Account
      </button>

      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        massage="Success, redirecting to the login page..."
      />
    </form>
  );
}
