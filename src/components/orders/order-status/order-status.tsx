import { useLocaleContext } from "@/context/locale.context";
import { CarNumberPlatte } from "@/components/car-wash/car-number-platte";
import { PencilIcon } from "@heroicons/react/solid";
import { OrderStatusProgress } from "@/components/orders/order-status/order-status-progress";

export type TOrderVariants = "car_wash" | "cafe";
export type TOrderStatuses = "new" | "process" | "preparation" | "ready";

interface IProps {
  variant: TOrderVariants;
  status: TOrderStatuses;
  price: string;
  carNumber?: {
    regionCode: string;
    number: string;
  };
}

export const OrderStatus = ({ status, variant, carNumber, price }: IProps) => {
  const { t } = useLocaleContext();
  const serviceNames: { [key: string]: string } = {
    car_wash: "services.car_wash",
  };

  return (
    <div className="bg-white p-3 border-y">
      <div className="flex items-center justify-between border-b pb-2">
        <p className="font-bold flex-grow">{t(serviceNames[variant])}</p>
        {Boolean(carNumber) && (
          <CarNumberPlatte
            regionCode={carNumber?.regionCode as string}
            number={carNumber?.number as string}
            size="sm"
          />
        )}
      </div>
      <div className="flex items-center py-2 border-b cursor-pointer">
        <p className="flex-grow flex items-center justify-start gap-1">
          <PencilIcon width={18} />
          <span>{t("order.edit_order")}</span>
        </p>
        <p className="font-bold">{price} sum</p>
      </div>
      <div>
        <OrderStatusProgress status={status} />
      </div>
    </div>
  );
};
