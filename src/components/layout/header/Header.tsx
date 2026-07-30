import { getProducts } from "@/services/products";
import NavBar from "./NavBar";
import { cookies } from "next/headers";

export default async function Header() {
  const products = await getProducts();
  const cookieStore = await cookies();
  const isLoggedin = !!cookieStore.get("token");

  return (
    <header>
      <div className="container">
        <NavBar products={products} isLoggedin={isLoggedin} />
      </div>
    </header>
  );
}
