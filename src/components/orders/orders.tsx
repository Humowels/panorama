"use client";
import { OrdersHeader } from "@/components/orders/orders-header";
import { useLocaleContext } from "@/context/locale.context";
import { OrderStatus } from "@/components/orders/order-status/order-status";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { ordersQueryFn } from "@/react-query/queries/orders.query";
import { IOrder } from "@/lib/interfaces/order.interface";

export const Orders = () => {
  const { t } = useLocaleContext();
  const { data, isLoading } = useQuery<IOrder[]>({
    queryKey: ["orders"],
    queryFn: () => ordersQueryFn(),
  });

  if (isLoading) {
    return null;
  }

  const renderOrders = data?.map((order, index) => (
    <OrderStatus
      key={index}
      status={order.status}
      orderId={order.id}
      carNumber={{ regionCode: "70", number: "C270QA" }}
      price={order.totalPrice}
    />
  ));

  return (
    <div className="">
      <OrdersHeader />
      <p className="border-b py-2 px-4 font-semibold">{t("order.all_orders_combined")}</p>
      <div className="mt-2 space-y-2">{renderOrders}</div>
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
