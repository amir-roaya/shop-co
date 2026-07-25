"use server";

const API_URL = process.env.API_URL;

export const signup = async (
  username: string,
  email: string,
  password: string,
): Promise<{ id: number }> => {
  if (!API_URL) {
    throw new Error("API_URL is not defined");
  }

  const res = await fetch(`${API_URL}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, email, password }),
  });

  if (!res.ok) {
    throw new Error("Faild to signup");
  }

  return res.json();
};

export const login = async (
  username: string,
  password: string,
): Promise<{ token: "string" }> => {
  if (!API_URL) {
    throw new Error("API_URL is not defined");
  }

  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  if (!res.ok) {
    throw new Error("Faild to login");
  }

  return res.json();
};