"use server";

import { login } from "@/services/auth";
import { LoginFormValues } from "@/validation/auth";
import { cookies } from "next/headers";

export const loginAction = async (data: LoginFormValues) => {
  const userToken = await login(data.username, data.password);

  if (userToken) {
    const cookieStore = await cookies();
    cookieStore.set("token", userToken.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return {
      success: true,
    };
  }
};
