"use client";
import { useLocaleContext } from "@/context/locale.context";
import { Button } from "@/components/ui/button";
import { XIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useCountdown } from "@/lib/hooks/useCutdown";
import { useEffect, useRef } from "react";
import { CheckCircleIcon } from "@heroicons/react/outline";

export const OrderSuccess = () => {
  const { t, lang } = useLocaleContext();
  const layerDivRef = useRef<HTMLDivElement>(null);
  const { countdown, hasFinished } = useCountdown(6);

  const hideLayer = () => {
    if (layerDivRef.current) {
      layerDivRef.current.style.display = "none";
    }
  };

  useEffect(() => {
    if (hasFinished) {
      hideLayer();
    }
  }, [hasFinished]);

  return (
    <>
      <CheckCircleIcon width={64} />
      <p className="mt-4 font-bold">{t("order.order_success")}</p>
      <p className="mt-4 text-center font-semibold">{t("order.order_success_msg")}</p>
      <Link href={`/${lang}/service/car-wash`} className="w-full flex items-center justify-center">
        <Button variant="primary" className=" mt-4 px-4 h-16 w-[90%] text-lg text-amber-100">
          {t("common.back_to_homepage")}
        </Button>
      </Link>

      <div
        ref={layerDivRef}
        className="absolute w-full h-full backdrop-blur bg-black bg-opacity-80 top-0 left-0 px-16 flex flex-col items-start justify-center"
      >
        <p className="text-service_bg text-xl ">{t("order.all_services_and_orders")}</p>
        <p className=" text-white mt-6">{t("order.order_success_layer_message")}</p>
        <div className="flex flex-col items-center justify-center w-full mt-6">
          <div
            onClick={hideLayer}
            className="w-12 h-12 bg-service_bg text-black rounded-full flex items-center justify-center cursor-pointer"
          >
            <XIcon className="w-8" />
          </div>
          <p className="text-gray-500 text-center max-w-[200px] w-full mt-3">
            {t("order.close_in_seconds", { second: countdown })}
          </p>
        </div>
      </div>
    </>
  );
};
