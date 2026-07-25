import { z } from "zod";

export const signupSchema = z.object({
  username: z.string().min(1, "Username is required"),
  email: z.email().min(1, "Email is required"),
  password: z.string().min(5, "Password must have at least 5 characters"),
});

export type SignupFormValues = z.infer<typeof signupSchema>;

export const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(5, "Password must have at least 5 characters"),
});

export type LoginFormValues = z.infer<typeof loginSchema>;
