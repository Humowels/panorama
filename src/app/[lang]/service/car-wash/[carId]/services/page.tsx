"use client";
import { CarWashServiceHeader } from "@/components/car-wash/services/car-wash-service-header";
import { CarWashTypes } from "@/components/car-wash/services/car-wash-types/car-wash-types";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useLocaleContext } from "@/context/locale.context";
import { ChevronRightIcon } from "@heroicons/react/outline";
import { useCarWashContext } from "@/context/car-wash-cart.context";
import { priceFormatter } from "@/lib/utils";

export default function CarWashServices() {
  const { t } = useLocaleContext();
  const { carWashCart, createOrder, createOrderMutation } = useCarWashContext();
  return (
    <div className="">
      <CarWashServiceHeader />
      <CarWashTypes />
      <Button
        onClick={createOrder}
        variant="primary"
        isLoading={createOrderMutation.isPending}
        className="flex items-center justify-between w-[90%] mx-auto mt-10 h-16 text-service_bg "
      >
        {t("services.checkout")}{" "}
        <span className="flex items-center text-gray-500 text-sm">
          {priceFormatter(carWashCart?.totalPrice || 0)} sum <ChevronRightIcon width={18} />
        </span>
      </Button>
    </div>
  );
}
