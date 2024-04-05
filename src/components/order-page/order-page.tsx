"use client";

import { useLocaleContext } from "@/context/locale.context";
import { IOrder } from "@/lib/interfaces/order.interface";
import { ShoppingCartIcon, XIcon } from "@heroicons/react/solid";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { orderQueryFn } from "@/react-query/queries/orders.query";
import { Button } from "../ui/button";
import { priceFormatter } from "@/lib/utils";
import { CarNumberPlatte } from "../car-wash/car-number-platte";
import { OrderStatusProgress } from "../orders/order-status/order-status-progress";
import { FinancialStatus } from "@/lib/enums/orders.enum";
import { FinancialOrderStatus } from "../orders/order-status/financial_order_status";

interface IProps {
  orderId: string;
}

export const OrderPage = ({ orderId }: IProps) => {
  const { t } = useLocaleContext();
  const router = useRouter();
  const { data: order, isLoading } = useQuery<IOrder>({
    queryKey: ["order", orderId],
    queryFn: () => orderQueryFn(orderId),
  });

  if (isLoading) {
    return null;
  }

  if (!order) {
    return null;
  }

  const carFullNumber = order.note || "";

  const [carName, carNumber] = carFullNumber.split(" ");
  const hasPaid = order.financialStatus === FinancialStatus.Paid;

  return (
    <div className="">
      <div className="flex items-center justify-between py-3 px-3 gap-2 border-b">
        <ShoppingCartIcon width={24} />
        <p className="font-bold flex-grow text-xl">
          {t("order.order")} {order.number}
        </p>
        <div
          onClick={router.back}
          className="w-10 h-10 bg-primary  rounded-full flex items-center justify-center cursor-pointer"
        >
          <XIcon className="w-6 text-white" />
        </div>
        <div>
          <XIcon />
        </div>
      </div>

      <div className="px-3">
        {!!carFullNumber && (
          <div className="flex items-center justify-between mt-4">
            <p>{carName}</p>
            <CarNumberPlatte number={carNumber.slice(2)} regionCode={carNumber.slice(0, 2)} />
          </div>
        )}
        <h2 className="font-semibold text-lg mt-4">{t("order.status")}</h2>

        <OrderStatusProgress status={order.status} />
        <h2 className="font-semibold text-lg mt-4">{t("order.order_summary")}</h2>

        {order.lineItems.map((order) => (
          <div key={order.id} className="w-full bg-white rounded-xl border px-3 py-2 flex items-center justify-between mt-2">
            <p>{order.title}</p>
            <p>
              {priceFormatter(order.price)} {t("common.currency")}
            </p>
          </div>
        ))}

        <div className="w-full bg-white rounded-xl border px-3 py-2 flex items-center justify-between mt-2">
          <p>{t("order.payment_status")}</p>
          <FinancialOrderStatus status={order.financialStatus} />
        </div>
      </div>
      {!hasPaid && (
        <Button
          className="flex h-16 items-center justify-between sticky mt-2 bottom-5 w-[95%] mx-auto"
          variant="primary"
        >
          <p className="text-lg">{t("order.pay")}</p>
          <p className="text-gray-500">
            {priceFormatter(order.totalPrice)} {t("common.currency")}
          </p>
        </Button>
      )}
    </div>
  );
};
