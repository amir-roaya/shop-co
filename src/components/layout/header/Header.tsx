import NavBar from "./NavBar";
import { cookies } from "next/headers";

export default async function Header() {
  const cookieStore = await cookies();
  const isLoggedin = !!cookieStore.get("token");

  return (
    <header>
      <div className="container">
        <NavBar isLoggedin={isLoggedin} />
      </div>
    </header>
  );
}
