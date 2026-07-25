"use server";

import { signup } from "@/services/auth";
import { SignupFormValues } from "@/validation/auth";

export const signupAction = async (data: SignupFormValues) => {
  const user = await signup(data.username, data.email, data.password);

  if (user) {
    return {
      success: true,
    };
  }
};
