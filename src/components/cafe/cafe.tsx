"use client";
import { useLocaleContext } from "@/context/locale.context";
import { Category } from "@/components/cafe/categories/category";
import { useQuery } from "@tanstack/react-query";
import { getAllProductsQueryFn } from "@/react-query/queries/products.query";
import { IProduct } from "@/lib/interfaces/product.interface";

export const Cafe = () => {
  const { t } = useLocaleContext();
  const { data, isLoading } = useQuery<IProduct[]>({
    queryKey: ["all-products"],
    queryFn: () => getAllProductsQueryFn(),
  });

  return (
    <div className="px-4 py-5">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-4xl">{t("services.cafe")} Ayva</h2>
        <div className="w-12 h-12 bg-red-500 rounded-full" />
      </div>
      <p className="mt-3 border-b pb-4">{t("cafe.available_delivery_and_order")}</p>

      <Category products={data} categoryName="Все продукты" isLoading={isLoading} />
    </div>
  );
};
