import Filters from "@/components/products/Filters";
import MobileFilters from "@/components/products/MobileFilters";
import Pagination from "@/components/products/Pagination";
import ShowProducts from "@/components/products/ShowProducts";
import SortFilter from "@/components/products/SortFilter";
import { getProducts } from "@/services/products";
import { ProductsSearchParams } from "@/types/product";
import { filterProducts } from "@/utils/filterProducts";
import { getValidFilters } from "@/utils/getValidFilters";

export default async function page({
  searchParams,
}: {
  searchParams: Promise<ProductsSearchParams>;
}) {
  const ITEMS_PER_PAGE = 6;

  const products = await getProducts();
  const params = await searchParams;
  const validFilters = getValidFilters(params);
  const result = filterProducts(products, validFilters, ITEMS_PER_PAGE);

  const startItem =
    result.totalItems === 0 ? 0 : (result.currentPage - 1) * ITEMS_PER_PAGE + 1;

  const endItem = Math.min(
    result.currentPage * ITEMS_PER_PAGE,
    result.totalItems,
  );

  return (
    <main>
      <section>
        <div className="container">
          <div className="header-line"></div>

          <div className="flex gap-4">
            <div className="hidden md:flex flex-col border border-border-color-primary rounded-2xl basis-[25%] py-4 px-2.5 h-138.5 shadow-main-shadow">
              <div className="flex justify-between items-center pb-5">
                <h5 className="font-satoshi-bold">Filters</h5>

                <div>
                  <svg className="w-5 h-5 text-text-secondary">
                    <use href="#filters"></use>
                  </svg>
                </div>
              </div>

              <Filters
                validFilters={validFilters}
                radioName="desktop-category"
              />
            </div>

            <div className="basis-full md:basis-[75%]">
              <div className="flex items-center justify-between">
                <h5 className="font-satoshi-bold text-2xl">Casual</h5>

                <p className="text-text-secondary hidden sm:block">
                  {result.products.length > 0 ? (
                    <span>
                      Showing {String(startItem)}-{String(endItem)} of {""}
                      {String(result.totalItems)} Products
                    </span>
                  ) : (
                    ""
                  )}
                </p>

                <MobileFilters validFilters={validFilters} />

                <div className="text-sm hidden md:flex gap-2 items-center">
                  <span className="text-text-secondary">Sorted by:</span>

                  <SortFilter
                    validFilters={validFilters}
                    radioName="desktop-sort"
                  />
                </div>
              </div>

              <ShowProducts products={result.products} />

              <Pagination
                totalItems={result.totalItems}
                itemPerPage={ITEMS_PER_PAGE}
                currentPage={result.currentPage}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
