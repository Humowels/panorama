"use client";
import { useLocaleContext } from "@/context/locale.context";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getAllProductsQueryFn } from "@/react-query/queries/services.query";
import { Button } from "@/components/ui/button";
import { Product } from "@/components/cafe/product/product-card";
import { ProductsLoader } from "@/components/skeletons/products-loader";

export const Cafe = () => {
  const { t, lang } = useLocaleContext();

  const { data, isFetching, isLoading, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ["all-products", lang],
    queryFn: ({ pageParam }) => getAllProductsQueryFn("Товар", pageParam),
    getNextPageParam: (lastPage) => lastPage.links.next,
  });

  const getProducts = isLoading ? (
    <ProductsLoader />
  ) : (
    data?.pages.map((page, idx) => (
      <div key={idx} className="grid grid-cols-2 gap-3">
        {page.data.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    ))
  );

  return (
    <div className="px-4 py-5">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-4xl">{t("services.cafe")} Ayva</h2>
        <div className="w-12 h-12 bg-red-500 rounded-full" />
      </div>
      <p className="mt-3 border-b pb-4">{t("cafe.available_delivery_and_order")}</p>

      <div>
        <p className="font-semibold my-3">Все продукты</p>
        {getProducts}
      </div>
      {hasNextPage && (
        <Button
          isLoading={isFetching}
          onClick={fetchNextPage}
          variant="outlined"
          size="lg"
          className="w-full mt-4 rounded-xl capitalize"
        >
          {t("common.more")}
        </Button>
      )}
    </div>
  );
};
