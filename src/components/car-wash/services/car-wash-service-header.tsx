"use client";
import { ChevronLeftIcon, MenuIcon } from "@heroicons/react/outline";
import { useLocaleContext } from "@/context/locale.context";
import { CarNumberPlatte } from "@/components/car-wash/car-number-platte";
import { useRouter } from "next/navigation";

export const CarWashServiceHeader = () => {
  const { t } = useLocaleContext();
  const router = useRouter();
  return (
    <div className="flex items-center justify-between gap-2  py-5 px-3 border-b">
      <div onClick={router.back} className=" flex items-center gap-1 cursor-pointer">
        <ChevronLeftIcon width={24} />
        <p>{t("common.back")}</p>
      </div>

      <div className="">
        <CarNumberPlatte size="sm" regionCode="70" number="C270QA" />
      </div>
    </div>
  );
};
