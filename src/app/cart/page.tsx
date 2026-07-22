import CartSumry from "@/components/cart/CartSummary";
import ShowCartItems from "@/components/cart/ShowCartItems";

export default function page() {
  return (
    <main>
      <section>
        <div className="container">
          <div className="header-line"></div>

          <h1 className="font-integral-cf text-3xl mb-6">Your cart</h1>

          <div className="flex flex-col gap-5 md:flex-row">
            <ShowCartItems />

            <CartSumry />
          </div>
        </div>
      </section>
    </main>
  );
}
