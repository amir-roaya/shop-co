"use client";

import { logoutAction } from "@/actions/logout";
import { useCartStore } from "@/store/cartStore";

export default function LogoutButton() {
  const clearCart = useCartStore((state) => state.clearCart);

  const handleLogout = async () => {
    await logoutAction();
    clearCart();
  };

  return (
    <button
      type="button"
      onClick={handleLogout}
      className="bg-bg-secondary py-1.5 px-3 text-sm min-[480px]:text-[16px] rounded-xl text-text-secondary main-transition hover:bg-black hover:text-white"
    >
      Logout
    </button>
  );
}
