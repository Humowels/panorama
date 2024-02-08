"use client";
import { OrdersHeader } from "@/components/orders/orders-header";
import { useLocaleContext } from "@/context/locale.context";
import { OrderStatus } from "@/components/orders/order-status/order-status";
import { Button } from "@/components/ui/button";

export const Orders = () => {
  const { t } = useLocaleContext();
  return (
    <div className="">
      <OrdersHeader />
      <p className="border-b py-2 px-4 font-semibold">{t("order.all_orders_combined")}</p>
      <div className="mt-2 space-y-2">
        <OrderStatus
          status="new"
          variant="car_wash"
          carNumber={{ regionCode: "70", number: "C270QA" }}
          price="200.000"
        />
        <OrderStatus
          status="preparation"
          variant="car_wash"
          carNumber={{ regionCode: "70", number: "C270QA" }}
          price="400.000"
        />
        <OrderStatus
          status="process"
          variant="car_wash"
          carNumber={{ regionCode: "70", number: "C270QA" }}
          price="500.000"
        />
        <OrderStatus
          status="ready"
          variant="car_wash"
          carNumber={{ regionCode: "70", number: "C270QA" }}
          price="600.000"
        />{" "}
        <OrderStatus
          status="process"
          variant="car_wash"
          carNumber={{ regionCode: "70", number: "C270QA" }}
          price="500.000"
        />
        <OrderStatus
          status="ready"
          variant="car_wash"
          carNumber={{ regionCode: "70", number: "C270QA" }}
          price="600.000"
        />
      </div>
      <Button
        className="flex h-16 items-center justify-between sticky mt-2 bottom-5 w-[95%] mx-auto"
        variant="primary"
      >
        <p className="text-lg">{t("order.pay_all")}</p>
        <p className="text-gray-500">1 080 500 {t("common.currency")}</p>
      </Button>
    </div>
  );
};
