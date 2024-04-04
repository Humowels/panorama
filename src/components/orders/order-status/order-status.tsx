import { useLocaleContext } from "@/context/locale.context";
import { CarNumberPlatte } from "@/components/car-wash/car-number-platte";
import { PencilIcon } from "@heroicons/react/solid";
import { OrderStatusProgress } from "@/components/orders/order-status/order-status-progress";
import Link from "next/link";

export type TOrderStatuses =
  | "Новый"
  | "Принят"
  | "Обработан"
  | "Собран"
  | "Отменен"
  | "Доставлен"
  | "Доставляется";

interface IProps {
  status: TOrderStatuses;
  price: string;
  orderId: number;
  carNumber?: {
    regionCode: string;
    number: string;
  };
}

export const OrderStatus = ({ status, orderId, carNumber, price }: IProps) => {
  const { t, lang } = useLocaleContext();

  return (
    <Link href={`/${lang}/orders/${orderId}`} className="bg-white p-3 border-y block">
      <div className="flex items-center justify-between border-b pb-2">
        <p className="font-bold flex-grow">
          {t("order.order")} #{orderId}
        </p>
        {Boolean(carNumber) && (
          <CarNumberPlatte
            regionCode={carNumber?.regionCode as string}
            number={carNumber?.number as string}
            size="sm"
          />
        )}
      </div>
      <div className="flex items-center py-2 border-b cursor-pointer">
        <span className="flex-grow">{t("order.total_price")}</span>

        <p className="font-bold">{price} sum</p>
      </div>
      <div>
        <OrderStatusProgress status={status} />
      </div>
    </Link>
  );
};
