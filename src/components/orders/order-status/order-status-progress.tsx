"use client";

import { TOrderStatuses } from "@/components/orders/order-status/order-status";
import { useLocaleContext } from "@/context/locale.context";
import { twMerge } from "tailwind-merge";

interface IProps {
  status: TOrderStatuses;
}

export const OrderStatusProgress = ({ status }: IProps) => {
  const labels: Record<"Новый" | "Обработан" | "Собран" | "Доставлен", string> = {
    Новый: "14%",
    Обработан: "40%",
    Собран: "64%",
    Доставлен: "100%",
  };

  const statusPercents: Record<TOrderStatuses, string> = {
    Новый: "14%",
    Принят: "14%",
    Обработан: "40%",
    Собран: "64%",
    Доставлен: "100%",
    Доставляется: "100%",
    Отменен: "100%",
  };

  const statusTextPositions: Record<TOrderStatuses, string> = {
    Новый: "20%",
    Принят: "20%",
    Обработан: "13%",
    Собран: "11%",
    Доставлен: "30%",
    Доставляется: "30%",
    Отменен: "30%",
  };

  const { t } = useLocaleContext();

  const statusLabels: Record<TOrderStatuses, string> = {
    Новый: t("order.statuses.accepted"),
    Принят: t("order.statuses.accepted"),
    Обработан: t("order.statuses.in_process"),
    Собран: t("order.statuses.preparation"),
    Доставлен: t("order.statuses.ready"),
    Доставляется: t("order.statuses.ready"),
    Отменен: t("order.statuses.ready"),
  };

  return (
    <div className="py-6">
      <div className="w-full bg-gray-300 h-1 rounded-full relative flex flex-col justify-center">
        <div className="flex items-center w-full ">
          {Object.entries(labels).map(([key, value], index) => {
            const isLastStatus = index === 3;
            const isActiveStatus = key === status;
            return (
              <div
                key={index}
                className={twMerge(
                  "w-full  relative",
                  !isLastStatus &&
                    "after:content-[''] after:absolute after:w-[2px] after:h-4 after:bg-gray-300 after:right-0 after:-top-2",
                )}
              >
                <p
                  style={{ left: statusTextPositions[key as TOrderStatuses] }}
                  className={twMerge(
                    "absolute top-2 text-xs text-gray-400",
                    isActiveStatus && "text-black",
                  )}
                >
                  {statusLabels[key as TOrderStatuses]}
                </p>
              </div>
            );
          })}
        </div>
        <div
          style={{ width: statusPercents[status] }}
          className="bg-black h-full rounded-full absolute left-0"
        >
          <div className="w-full relative">
            <div className="bg-green-500 w-3 h-3 rounded-full absolute right-0 -top-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
