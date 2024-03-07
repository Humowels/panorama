"use client";
import { useLocaleContext } from "@/context/locale.context";

export const OrderStatus = () => {
  const { t } = useLocaleContext();
  return (
    <div className="min-h-[calc(100vh-120px)] flex flex-col py-5 ">
      <div className="flex-grow flex flex-col items-center justify-center">
        <div className="w-12 h-12 bg-red-500 rounded-full" />
        <p className="mt-4 text-primary font-semibold">{t("cafe.waiting_for_payment")}</p>
        <p className="mt-3 text-primary max-w-[250px] w-full text-center">
          {t("cafe.waiting_for_payment_desc")}
        </p>
      </div>
      <p className="w-full text-center font-semibold mb-14 cursor-pointer">
        {t("cafe.cancel_order")}
      </p>
    </div>
  );
};
