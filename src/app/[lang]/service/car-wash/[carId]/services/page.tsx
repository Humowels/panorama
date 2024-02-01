"use client";
import { CarWashServiceHeader } from "@/components/car-wash/services/car-wash-service-header";
import { CarWashTypes } from "@/components/car-wash/services/car-wash-types/car-wash-types";
import { CarWashAdditionalServices } from "@/components/car-wash/services/car-wash-types/car-wash-additional-services";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useLocaleContext } from "@/context/locale.context";
import { ChevronRightIcon } from "@heroicons/react/outline";

export default function CarWashServices() {
  const { t } = useLocaleContext();
  return (
    <div className="">
      <CarWashServiceHeader />
      <CarWashTypes />
      <CarWashAdditionalServices />
      <Link href="order-success">
        <Button
          variant="primary"
          className="flex items-center justify-between w-10/12 mx-auto mt-10 h-16 text-gray-400 text-lg"
        >
          {t("services.checkout")}{" "}
          <span className="flex items-center text-gray-500 text-sm">
            2.300.000 sum <ChevronRightIcon width={18} />
          </span>
        </Button>
      </Link>
    </div>
  );
}
