"use client";

import { logoutAction } from "@/actions/logout";
import { useCartStore } from "@/store/cartStore";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const clearCart = useCartStore((state) => state.clearCart);
  const router = useRouter();

  const handleLogout = async () => {
    await logoutAction();
    clearCart();
    router.push("/");
    router.refresh();
  };

  return (
    <button
      type="button"
      onClick={handleLogout}
      className="bg-bg-secondary py-1.5 px-3 rounded-xl text-text-secondary"
    >
      Logout
    </button>
  );
}
