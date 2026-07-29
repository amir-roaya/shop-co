import CartSumry from "@/components/cart/CartSummary";
import ShowCartItems from "@/components/cart/ShowCartItems";
import Reveal from "@/components/ui/Reveal";

export default function page() {
  return (
    <main>
      <section>
        <div className="container">
          <Reveal delay={200}>
            <div className="header-line"></div>
          </Reveal>

          <Reveal direction="left" delay={400}>
            <h1 className="font-integral-cf text-3xl mb-6">Your cart</h1>
          </Reveal>

          <div className="flex flex-col gap-5 md:flex-row">
            <ShowCartItems />

            <CartSumry />
          </div>
        </div>
      </section>
    </main>
  );
}
