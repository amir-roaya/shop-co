import Filters from "@/components/products/Filters";
import MobileFilters from "@/components/products/MobileFilters";
import ShowProducts from "@/components/products/ShowProducts";
import SortFilter from "@/components/products/SortFilter";
import { getProducts } from "@/services/products";

export default async function page() {
  const products = await getProducts();

  return (
    <main>
      <section>
        <div className="container">
          <div className="header-line"></div>

          <div className="flex gap-4">
            <div className="hidden md:flex flex-col border border-border-color-primary rounded-2xl basis-[25%] p-4 h-fit shadow-main-shadow">
              <div className="flex justify-between items-center pb-5">
                <h5 className="font-satoshi-bold">Filters</h5>

                <div>
                  <svg className="w-5 h-5 text-text-secondary">
                    <use href="#filters"></use>
                  </svg>
                </div>
              </div>

              <Filters />
            </div>

            <div className="basis-full md:basis-[75%]">
              <div className="flex items-center justify-between">
                <h5 className="font-satoshi-bold text-2xl">Casual</h5>

                <p className="text-text-secondary hidden sm:block">
                  Showing 1-10 of 100 Products
                </p>

                <MobileFilters />

                <div className="text-sm hidden md:flex gap-2">
                  <span className="text-text-secondary">Sorted by:</span>

                  <SortFilter />
                </div>
              </div>

              <ShowProducts products={products} />

              <div className="flex items-center pt-5 justify-between text-sm">
                <button className="flex items-center gap-2 p-2 border border-border-color-primary rounded-xl">
                  <div>
                    <svg className="w-4 h-4">
                      <use href="#arrow"></use>
                    </svg>
                  </div>

                  <span>Previous</span>
                </button>

                <div className="flex items-center text-text-secondary">
                  <button className="py-1 px-2.75 rounded-lg main-transition current-pagination">
                    1
                  </button>
                  <button className="py-1 px-2.75 rounded-lg main-transition">
                    2
                  </button>
                  <button className="py-1 px-2.75 rounded-lg main-transition">
                    3
                  </button>
                  <button className="py-1 px-2.75 rounded-lg main-transition">
                    4
                  </button>
                </div>

                <button className="flex items-center gap-2 p-2 border border-border-color-primary rounded-xl">
                  <span>Next</span>

                  <div>
                    <svg className="rotate-180 w-4 h-4">
                      <use href="#arrow"></use>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
