"use client";

import { useLocaleContext } from "@/context/locale.context";

export const CarsEmptyState = () => {
  const { t } = useLocaleContext();
  return (
    <div className="min-h-[calc(100vh-120px)] flex flex-col justify-center">
      <div className="flex flex-col items-center ">
        <div className="rounded-full w-12 h-12 bg-red-500" />
        <p className="my-3 font-bold text-center max-w-[300px]">{t("car_wash.no_cars")}</p>
        <p className="text-center max-w-[300px]">{t("car_wash.please_contact")}</p>
      </div>
    </div>
  );
};
