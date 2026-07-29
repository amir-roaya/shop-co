"use client";

import { signupAction } from "@/actions/signup";
import { SignupFormValues } from "@/validation/auth";
import { signupSchema } from "@/validation/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";
import { useRouter } from "next/navigation";
import Loading from "../ui/Loading";
import Reveal from "../ui/Reveal";

export default function SignupForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
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
        <Reveal direction="up" delay={600}>
          <h2 className="font-satoshi-bold text-2xl">Create an account</h2>
        </Reveal>

        <Reveal direction="up" delay={700}>
          <p className="text-sm">Enter your details below</p>
        </Reveal>
      </div>

      <div className="flex flex-col gap-3 w-full">
        <Reveal direction="up" delay={800}>
          <input
            {...register("username")}
            type="text"
            placeholder="Username"
            className="border-b text-text-secondary w-full border-line-color-primary shadow-line-shadow text-sm py-2 pr-2 xl:py-3"
            autoComplete="username"
          />
        </Reveal>

        {errors.username && (
          <Reveal direction="down" delay={100}>
            <p className="text-red-600 text-sm">{errors.username.message}</p>
          </Reveal>
        )}

        <Reveal direction="up" delay={900}>
          <input
            {...register("email")}
            type="email"
            placeholder="Email"
            className="border-b text-text-secondary w-full border-line-color-primary shadow-line-shadow text-sm py-2 pr-2 xl:py-3"
            autoComplete="email"
          />
        </Reveal>

        {errors.email && (
          <Reveal direction="down" delay={100}>
            <p className="text-red-600 text-sm">{errors.email.message}</p>
          </Reveal>
        )}

        <Reveal direction="up" delay={1000}>
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
        </Reveal>

        {errors.password && (
          <Reveal direction="down" delay={100}>
            <p className="text-red-600 text-sm">{errors.password.message}</p>
          </Reveal>
        )}
      </div>

      <Reveal direction="up" delay={1100}>
        <button
          className={`w-full bg-black text-white py-3 border rounded-xl main-transition ${isSubmitting ? "cursor-not-allowed" : "hover:bg-bg-secondary hover:text-black"}`}
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? <Loading textColor="white" /> : "Create Account"}
        </button>
      </Reveal>

      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        message="Success, redirecting to the login page..."
      />
    </form>
  );
}
