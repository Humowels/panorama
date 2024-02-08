"use client";

import { TOrderStatuses } from "@/components/orders/order-status/order-status";
import { useLocaleContext } from "@/context/locale.context";
import { twMerge } from "tailwind-merge";

interface IProps {
  status: TOrderStatuses;
}

export const OrderStatusProgress = ({ status }: IProps) => {
  const statusPercents: Record<TOrderStatuses, string> = {
    new: "14%",
    process: "40%",
    preparation: "64%",
    ready: "100%",
  };

  const statusTextPositions: Record<TOrderStatuses, string> = {
    new: "20%",
    process: "13%",
    preparation: "11%",
    ready: "30%",
  };

  const { t } = useLocaleContext();

  const statusLabels: Record<TOrderStatuses, string> = {
    new: t("order.statuses.accepted"),
    process: t("order.statuses.in_process"),
    preparation: t("order.statuses.preparation"),
    ready: t("order.statuses.ready"),
  };

  return (
    <div className="py-6">
      <div className="w-full bg-gray-300 h-1 rounded-full relative flex flex-col justify-center">
        <div className="flex items-center justify-evenly">
          {Object.entries(statusPercents).map(([key, value], index) => {
            const isLastStatus = index === 3;
            const isActiveStatus = key === status;
            return (
              <div
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
