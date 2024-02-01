"use client";
import { OrdersHeader } from "@/components/orders/orders-header";
import { useLocaleContext } from "@/context/locale.context";
import { OrderStatus } from "@/components/orders/order-status/order-status";

export const Orders = () => {
  const { t } = useLocaleContext();
  return (
    <div className="">
      <OrdersHeader />
      <p className="border-b py-2 px-4 font-semibold">{t("order.all_orders_combined")}</p>
      <div className="mt-2">
        <OrderStatus
          status="new"
          variant="car_wash"
          carNumber={{ regionCode: "70", number: "C270QA" }}
          price="200.000"
        />
      </div>
    </div>
  );
};
