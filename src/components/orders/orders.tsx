"use client";
import { OrdersHeader } from "@/components/orders/orders-header";
import { useLocaleContext } from "@/context/locale.context";
import { OrderStatus } from "@/components/orders/order-status/order-status";
import { Button } from "@/components/ui/button";
import { useInfiniteQuery } from "@tanstack/react-query";
import { ordersQueryFn } from "@/react-query/queries/orders.query";
import { IOrder } from "@/lib/interfaces/order.interface";
import { IInfiniteQueryData } from "@/lib/interfaces/fetch.interface";

export const Orders = () => {
  const { t } = useLocaleContext();
  const { data, isLoading, isFetching, hasNextPage, fetchNextPage } = useInfiniteQuery<
    IInfiniteQueryData<IOrder[]>
  >({
    queryKey: ["orders"],
    queryFn: ({ pageParam }) => ordersQueryFn(pageParam as string),
    getNextPageParam: (lastPage) => lastPage.links.next,
    initialPageParam: undefined,
  });

  if (isLoading) {
    return null;
  }

  const renderOrders = data?.pages.map((page, index) => (
    <div key={index}>
      {page.data.map((order: IOrder) => {
        return (
          <OrderStatus
            key={index}
            status={order.status}
            orderId={order.id}
            carNumber={{ regionCode: "70", number: "C270QA" }}
            price={order.totalPrice}
          />
        );
      })}
    </div>
  ));

  return (
    <div className="pb-5">
      <OrdersHeader />
      <p className="border-b py-2 px-4 font-semibold">{t("order.all_orders_combined")}</p>
      <div className="mt-2 space-y-2">{renderOrders}</div>
      {hasNextPage && (
        <Button
          isLoading={isFetching}
          onClick={() => fetchNextPage()}
          className="flex h-16 items-center justify-center sticky mt-2 bottom-5 w-[95%] mx-auto"
          variant="primary"
        >
          {t("order.load_more")}
        </Button>
      )}
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
