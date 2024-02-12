"use client";
import { useLocaleContext } from "@/context/locale.context";
import { Category } from "@/components/cafe/categories/category";

export const Cafe = () => {
  const { t } = useLocaleContext();
  return (
    <div className="px-4 py-5">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-4xl">{t("services.cafe")} Ayva</h2>
        <div className="w-12 h-12 bg-red-500 rounded-full" />
      </div>
      <p className="mt-3 border-b pb-4">{t("cafe.available_delivery_and_order")}</p>

      <Category categoryName="Горячие напитки" />
    </div>
  );
};
