import ProductInfo from "@/components/products/product-info/ProductInfo";
import ProductCarousel from "@/components/products/ProductCarousel";
import Reveal from "@/components/ui/Reveal";
import { getProduct, getProducts } from "@/services/products";
import { getSameProducts } from "@/utils/getSameProducts";
import { notFound } from "next/navigation";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const mainProduct = await getProduct(Number(id));
  const products = await getProducts();

  if (!mainProduct) {
    notFound();
  }

  const sameProducts = getSameProducts(mainProduct, products);

  return (
    <main>
      <section>
        <div className="container">
          <Reveal delay={200}>
            <div className="header-line"></div>
          </Reveal>

          <ProductInfo product={mainProduct} />
        </div>
      </section>

      <section className="pt-15">
        <div className="container">
          <ProductCarousel
            title="You might also like"
            products={sameProducts}
          />
        </div>
      </section>
    </main>
  );
}
